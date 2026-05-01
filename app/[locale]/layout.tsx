/**
 * Locale-specific Layout
 * Wraps pages with Navigation and Footer
 * Validates locale parameter
 */

import { notFound } from "next/navigation";
import { Suspense } from "react";
import { isValidLocale, type Locale } from "@/lib/utils/locale";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import { SegmentProvider } from "@/lib/context/SegmentContext";
import { SiteSettingsProvider } from "@/lib/context/SiteSettingsContext";
import SegmentSwitcher from "@/components/ui/SegmentSwitcher";
import ChatWidget from "@/components/ui/ChatWidget";
import { hygraphRequest } from "@/lib/hygraph/client";
import {
  GetSiteSettingsDocument,
  GetSegmentsDocument,
  GetProductCategoriesDocument,
  type GetSiteSettingsQuery,
  type GetSiteSettingsQueryVariables,
  type GetSegmentsQuery,
  type GetProductCategoriesQuery,
} from "@/types/hygraph-generated";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  const [siteSettingsData, segmentsData, categoriesData] = await Promise.all([
    hygraphRequest<GetSiteSettingsQuery>(GetSiteSettingsDocument, {
      locale,
    } as GetSiteSettingsQueryVariables),
    hygraphRequest<GetSegmentsQuery>(GetSegmentsDocument, {}),
    hygraphRequest<GetProductCategoriesQuery>(GetProductCategoriesDocument, {}),
  ]);

  const siteSettings = siteSettingsData.allSiteSettings?.[0] ?? null;
  const segments = segmentsData.segments ?? [];
  const bikeCategories = [
    ...new Set(categoriesData.products.map((p) => p.category?.value)),
  ];

  return (
    <SiteSettingsProvider siteSettings={siteSettings}>
      <Suspense fallback={null}>
        <SegmentProvider>
          <div className="flex min-h-screen flex-col">
            {siteSettings?.announcement?.html && (
              <AnnouncementBanner
                html={siteSettings.announcement.html}
                entryId={siteSettings.id}
              />
            )}
            <Navigation locale={locale as Locale} siteSettings={siteSettings} />
            <main className="flex-1">{children}</main>
            <Footer
              locale={locale as Locale}
              siteSettings={siteSettings}
              bikeCategories={bikeCategories}
            />
            <Suspense>
              <SegmentSwitcher segments={segments} />
            </Suspense>
            <ChatWidget />
          </div>
        </SegmentProvider>
      </Suspense>
    </SiteSettingsProvider>
  );
}

/**
 * Generate static params for all supported locales
 * Enables ISR for each locale
 */
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
