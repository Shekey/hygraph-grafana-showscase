import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/utils/locale";
import { buildHref } from "@/lib/utils/navigation";
import { formatCategoryValue } from "@/types/hybike";
import type { GetSiteSettingsQuery } from "@/types/hygraph-generated";

interface FooterProps {
  locale: Locale;
  siteSettings: GetSiteSettingsQuery["allSiteSettings"][0] | null;
  bikeCategories: string[];
}

export default function Footer({
  locale,
  siteSettings,
  bikeCategories,
}: FooterProps) {
  const footerNavItems = siteSettings?.footerNavigation?.items ?? [];
  const socialLinks = siteSettings?.socialLinks ?? [];
  return (
    <footer className="border-t border-secondary/20 bg-primary text-secondary">
      {/* Newsletter + Links */}
      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-secondary/20">
        <div className="md:col-span-5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-secondary/20">
          <h3 className="text-secondary mb-4">{siteSettings?.footerSubscribeTitle}</h3>
          <p className="text-secondary/60 mb-6" style={{ lineHeight: 1.6 }}>
            {siteSettings?.footerSubscribeSubtitle}
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-secondary/30 px-4 py-3 text-secondary placeholder-secondary/30 focus:outline-none focus:border-accent"
            />
            <button
              className="bg-accent text-white px-6 py-3 uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors"
              style={{ fontSize: "0.75rem", fontWeight: 700 }}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3">
          {/* Shop */}
          <div className="p-8 border-b sm:border-b-0 border-r border-secondary/20">
            <p
              className="uppercase tracking-[0.15em] text-secondary/40 mb-6"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              Shop
            </p>
            <div className="space-y-3">
              {bikeCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/${locale}/collection?category=${cat}`}
                  className="block text-secondary/70 hover:text-accent transition-colors"
                  style={{ fontSize: "0.8rem" }}
                >
                  {formatCategoryValue(cat)}
                </Link>
              ))}
            </div>
          </div>

          {/* CMS nav links */}
          <div className="p-8 border-b sm:border-b-0 sm:border-r border-secondary/20">
            <p
              className="uppercase tracking-[0.15em] text-secondary/40 mb-6"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              Company
            </p>
            <div className="space-y-3">
              {footerNavItems.map((item) => (
                <Link
                  key={item.id}
                  href={buildHref(item, locale)}
                  className="block text-secondary/70 hover:text-accent transition-colors"
                  style={{ fontSize: "0.8rem" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="p-8 col-span-2 sm:col-span-1">
            <p
              className="tracking-[0.15em] text-secondary/40 mb-6"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              Social
            </p>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-secondary/70 hover:text-accent transition-colors"
                  style={{ fontSize: "0.8rem" }}
                >
                  <span className="lowercase [&::first-letter]:uppercase">
                    {link.platform}
                  </span>
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom watermark */}
      <div className="flex flex-col items-center justify-between px-8 md:px-12 py-6 gap-4">
        <span
          className="tracking-[-0.05em] uppercase opacity-20 leading-[0.9]"
          style={{ fontWeight: 900, fontSize: "16rem" }}
        >
          {siteSettings?.siteName}
          <span className="text-accent">.</span>
        </span>
        <p className="text-secondary/40" style={{ fontSize: "0.8rem" }}>
          {siteSettings?.footerText?.text}
        </p>
      </div>
    </footer>
  );
}
