/**
 * Locale Switcher Component - Client-side language selector
 * Interactive dropdown with flags
 */

"use client";

import { useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  SUPPORTED_LOCALES,
  LOCALE_NAMES,
  type Locale,
} from "@/lib/utils/locale";

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (params.locale as Locale) || "en";

  const handleLocaleChange = (newLocale: Locale) => {
    if (!pathname) {
      console.error("No pathname available");
      return;
    }

    // More robust: directly replace the locale segment in pathname
    // pathname format: /[locale]/rest/of/path or /[locale]
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "");
    const newPathname = `/${newLocale}${pathWithoutLocale || ""}`;

    console.log("Switching locale:", {
      currentLocale,
      newLocale,
      pathname,
      newPathname,
    });
    setIsOpen(false);
    router.push(newPathname);
  };

  return (
    <div className="relative pt-2" onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-brand -mt-2"
        aria-label="Change language"
      >
        <span className="hidden sm:inline">{LOCALE_NAMES[currentLocale]}</span>
        <svg
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
          {SUPPORTED_LOCALES.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`flex w-full items-center gap-3 px-4 py-2 text-sm text-left hover:bg-brand-light hover:text-brand ${
                locale === currentLocale
                  ? "bg-brand-light text-brand font-semibold"
                  : "text-gray-700"
              }`}
            >
              <span>{LOCALE_NAMES[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
