/**
 * Dynamic Page - Renders any Page by slug via Hygraph Page model.
 * Listing slugs (blog, careers, collection) also fetch their respective content.
 */

import { cookies } from "next/headers";
import { hygraphRequest } from "@/lib/hygraph/client";
import {
  GetPageDocument,
  type GetPageQuery,
  type GetPageQueryVariables,
} from "@/types/hygraph-generated";
import { type Locale } from "@/lib/utils/locale";
import HeroSection from "@/components/sections/HeroSection";
import FeatureGrid from "@/components/sections/FeatureGrid";
import EditorialSection from "@/components/sections/EditorialSection";
import CTABlock from "@/components/sections/CTABlock";
import ProductShowcase from "@/components/sections/ProductShowcase";
import StatsBar from "@/components/sections/StatsBar";
import ArticleList from "@/components/sections/ArticleList";
import FeaturedArticle from "@/components/sections/FeaturedArticle";
import JobList from "@/components/sections/JobList";
import SectionHeader from "@/components/sections/SectionHeader";
import Timeline from "@/components/sections/Timeline";
import ContactSection from "@/components/sections/ContactSection";
import PageHeader from "@/components/sections/PageHeader";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Type guards for section types
type PageSection = GetPageQuery["pages"][0]["sections"][0];

function isPageHeader(
  section: PageSection
): section is Extract<PageSection, { __typename?: "PageHeader" }> {
  return section.__typename === "PageHeader";
}

function isHeroSection(
  section: PageSection
): section is Extract<PageSection, { __typename?: "HeroSection" }> {
  return section.__typename === "HeroSection";
}

function isFeatureGrid(
  section: PageSection
): section is Extract<PageSection, { __typename?: "FeatureGrid" }> {
  return section.__typename === "FeatureGrid";
}

function isEditorialSection(
  section: PageSection
): section is Extract<PageSection, { __typename?: "EditorialSection" }> {
  return section.__typename === "EditorialSection";
}

function isCTABlock(
  section: PageSection
): section is Extract<PageSection, { __typename?: "CTABlock" }> {
  return section.__typename === "CTABlock";
}

function isProductShowcase(
  section: PageSection
): section is Extract<PageSection, { __typename?: "ProductShowcase" }> {
  return section.__typename === "ProductShowcase";
}

function isStatsBar(
  section: PageSection
): section is Extract<PageSection, { __typename?: "StatsBar" }> {
  return section.__typename === "StatsBar";
}

function isArticleList(
  section: PageSection
): section is Extract<PageSection, { __typename?: "ArticleList" }> {
  return section.__typename === "ArticleList";
}

function isJobList(
  section: PageSection
): section is Extract<PageSection, { __typename?: "JobList" }> {
  return section.__typename === "JobList";
}

function isFeaturedArticle(
  section: PageSection
): section is Extract<PageSection, { __typename?: "FeaturedArticle" }> {
  return section.__typename === "FeaturedArticle";
}

function isSectionHeader(
  section: PageSection
): section is Extract<PageSection, { __typename?: "SectionHeader" }> {
  return section.__typename === "SectionHeader";
}

function isTimeline(
  section: PageSection
): section is Extract<PageSection, { __typename?: "Timeline" }> {
  return section.__typename === "Timeline";
}

function isContactSection(
  section: PageSection
): section is Extract<PageSection, { __typename?: "ContactSection" }> {
  return section.__typename === "ContactSection";
}

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const data = await hygraphRequest<GetPageQuery>(GetPageDocument, {
      slug,
      locale,
      segmentName: undefined,
    } as GetPageQueryVariables);

    const page = data.pages?.[0];
    if (!page) {
      return { title: "Page Not Found" };
    }

    return {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription ?? undefined,
      openGraph: page.seo?.ogImage
        ? {
            images: [
              {
                url: page.seo.ogImage.url,
                width: page.seo.ogImage.width ?? undefined,
                height: page.seo.ogImage.height ?? undefined,
                alt: page.title,
              },
            ],
          }
        : undefined,
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return { title: "Page" };
  }
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;

  // Read segment from cookie for variant selection
  const cookieStore = await cookies();
  const audienceCookie = cookieStore.get("hybike-audience")?.value;
  const segmentName =
    audienceCookie && audienceCookie !== "Default" ? audienceCookie : undefined;

  const data = await hygraphRequest<GetPageQuery>(GetPageDocument, {
    slug,
    locale,
    segmentName,
  } as GetPageQueryVariables);

  const page = data?.pages?.[0];

  if (!page) {
    notFound();
  }

  // Use variant sections if available, otherwise use base sections
  const variant =
    page.variants && page.variants.length > 0 ? page.variants[0] : null;
  const displaySections = variant?.sections || page.sections;

  function renderSections() {
    return displaySections.map((section) => {
      if (isPageHeader(section)) {
        return <PageHeader key={section.id} section={section} />;
      }
      if (isArticleList(section)) {
        return <ArticleList key={section.id} section={section} />;
      }
      if (isFeaturedArticle(section)) {
        return (
          <FeaturedArticle
            key={section.id}
            section={section}
            locale={locale as Locale}
          />
        );
      }
      if (isJobList(section)) {
        return <JobList key={section.id} section={section} />;
      }
      if (isHeroSection(section)) {
        return (
          <HeroSection
            key={section.id}
            section={section}
            locale={locale as Locale}
          />
        );
      }
      if (isFeatureGrid(section)) {
        return <FeatureGrid key={section.id} section={section} />;
      }
      if (isEditorialSection(section)) {
        return <EditorialSection key={section.id} section={section} />;
      }
      if (isCTABlock(section)) {
        return (
          <CTABlock
            key={section.id}
            section={section}
            locale={locale as Locale}
          />
        );
      }
      if (isProductShowcase(section)) {
        return (
          <ProductShowcase
            key={section.id}
            section={section}
            locale={locale as Locale}
          />
        );
      }
      if (isSectionHeader(section)) {
        return <SectionHeader key={section.id} section={section} />;
      }
      if (isTimeline(section)) {
        return <Timeline key={section.id} section={section} />;
      }
      if (isContactSection(section)) {
        return <ContactSection key={section.id} section={section} />;
      }
      if (isStatsBar(section)) {
        return (
          <StatsBar
            key={section.id}
            section={section}
            locale={locale as Locale}
          />
        );
      }

      console.warn(
        `Unknown section type: ${
          (section as { __typename: string }).__typename
        }`
      );
      return null;
    });
  }

  return <div>{renderSections()}</div>;
}

export const revalidate = 300;
