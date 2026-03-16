"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  SUPPORTED_LOCALES,
  LOCALE_NAMES,
  type Locale,
} from "@/lib/utils/locale";
import { buildHref } from "@/lib/utils/navigation";
import type { GetSiteSettingsQuery } from "@/types/hygraph-generated";
import GitHubIcon from "@/components/icons/GitHubIcon";

interface NavigationProps {
  locale: Locale;
  siteSettings: GetSiteSettingsQuery["allSiteSettings"][0] | null;
}

export default function Navigation({ locale, siteSettings }: NavigationProps) {
  const navItems = siteSettings?.mainNavigation?.items ?? [];
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const localeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (localeRef.current && !localeRef.current.contains(e.target as Node)) {
        setLocaleOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocalePath(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  }

  return (
    <nav className="sticky top-0 z-50 bg-secondary border-b border-t border-primary">
      <div className="flex items-stretch h-[56px]">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center px-6 border-r border-primary hover:bg-primary hover:text-secondary transition-colors"
        >
          <span
            className="uppercase"
            style={{ fontWeight: 900, fontSize: "1rem" }}
          >
            {siteSettings?.siteName}
            <span className="text-brand">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-stretch">
          {navItems.map((item) => {
            const href = buildHref(item, locale);
            const isActive = pathname === href;
            return (
              <Link
                key={item.id}
                href={href}
                className={`flex items-center px-6 border-r border-primary transition-colors hover:bg-primary hover:text-secondary ${
                  isActive ? "bg-primary text-secondary" : ""
                }`}
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* GitHub */}
        <a
          href="https://github.com/hygraph/hybike-starter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 border-l border-primary hover:bg-primary hover:text-secondary transition-colors"
          aria-label="View on GitHub"
        >
          <GitHubIcon />
        </a>

        {/* Locale Picker */}
        <div className="relative" ref={localeRef}>
          <button
            onClick={() => setLocaleOpen(!localeOpen)}
            className="flex items-center gap-1.5 px-4 h-full border-l border-primary hover:bg-primary hover:text-secondary transition-colors"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span>{locale.toUpperCase()}</span>
            <ChevronDown
              size={11}
              strokeWidth={2}
              className={`transition-transform ${
                localeOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {localeOpen && (
            <div className="absolute right-0 top-full z-50 bg-secondary border-l border-r border-b border-primary min-w-[160px]">
              {SUPPORTED_LOCALES.map((l) => (
                <Link
                  key={l}
                  href={switchLocalePath(l)}
                  onClick={() => setLocaleOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 border-b border-primary last:border-b-0 hover:bg-primary hover:text-secondary transition-colors ${
                    l === locale ? "bg-primary text-secondary" : ""
                  }`}
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  <span>{LOCALE_NAMES[l]}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Cart */}
        <Link
          href={`/${locale}/collection`}
          className="flex items-center px-6 border-l border-primary hover:bg-primary hover:text-secondary transition-colors gap-2"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          <span className="hidden sm:inline">Cart (0)</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center px-5 border-l border-primary hover:bg-primary hover:text-secondary transition-colors"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-primary">
          {navItems.map((item) => {
            const href = buildHref(item, locale);
            const isActive = pathname === href;
            return (
              <Link
                key={item.id}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-4 border-b border-primary transition-colors hover:bg-primary hover:text-secondary ${
                  isActive ? "bg-primary text-secondary" : ""
                }`}
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
