/**
 * CTA Block Component - hybikes design
 * Dark background (#121212), orange button, centered text
 */

import Link from 'next/link';
import type { GetPageQuery } from '@/types/hygraph-generated';
import type { Locale } from '@/lib/utils/locale';

type CTABlockType = Extract<GetPageQuery['pages'][0]['sections'][0], { __typename?: 'CTABlock' }>;

interface CTABlockProps {
  section: CTABlockType;
  locale: Locale;
}

export default function CTABlock({ section }: CTABlockProps) {
  const isDark = section.backgroundColor === 'DARK' || section.backgroundColor === 'PRIMARY';

  return (
    <section
      className="border-b border-primary"
      style={{ backgroundColor: isDark ? '#121212' : '#F9F9F7' }}
    >
      <div
        className="p-8 md:p-12 lg:p-20 text-center flex flex-col items-center"
        style={{ color: isDark ? '#F9F9F7' : '#121212' }}
      >
        <p
          className="uppercase tracking-[0.2em] mb-6"
          style={{ fontSize: '0.65rem', fontWeight: 700, color: isDark ? 'rgba(249,249,247,0.4)' : '#6B6B6B' }}
        >
          Ready to ride?
        </p>

        <h2
          className="mb-8 max-w-3xl"
          style={{ color: isDark ? '#F9F9F7' : '#121212' }}
        >
          {section.headline.replace(/\.$/, '')}
          <span className="text-accent">.</span>
        </h2>

        {section.description && (
          <p
            className="max-w-lg mb-10"
            style={{ lineHeight: 1.7, color: isDark ? 'rgba(249,249,247,0.6)' : '#6B6B6B' }}
          >
            {section.description.text}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={section.primaryButton.href}
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 uppercase tracking-[0.1em] hover:bg-accent/90 transition-colors"
            style={{ fontSize: '0.75rem', fontWeight: 700 }}
          >
            {section.primaryButton.label}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          {section.secondaryButton && (
            <Link
              href={section.secondaryButton.href}
              className="inline-flex items-center gap-3 border px-10 py-5 uppercase tracking-[0.1em] transition-colors"
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                borderColor: isDark ? 'rgba(249,249,247,0.3)' : '#121212',
                color: isDark ? '#F9F9F7' : '#121212',
              }}
            >
              {section.secondaryButton.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
