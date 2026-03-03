/**
 * StatsBar Component - hybikes design
 * Supports three layouts: HORIZONTAL, GRID, MINIMAL
 */

import type { GetPageQuery } from '@/types/hygraph-generated';
import type { Locale } from '@/lib/utils/locale';

type StatsBarType = Extract<GetPageQuery['pages'][0]['sections'][0], { __typename?: 'StatsBar' }>;

interface StatsBarProps {
  section: StatsBarType;
  locale: Locale;
}

function StatValue({ value }: { value: string }) {
  const match = value.match(/^([0-9.,∞]+)([a-z%★+]*)$/i);
  const num = match ? match[1] : value;
  const unit = match ? match[2] : '';
  return (
    <>
      <span>{num}</span>
      {unit && <span className="text-accent" style={{ fontSize: '0.6em' }}>{unit}</span>}
    </>
  );
}

export default function StatsBar({ section }: StatsBarProps) {
  const { stats, statsLayout } = section;
  const layout = statsLayout ?? 'HORIZONTAL';

  if (layout === 'GRID') {
    const count = stats.length;
    return (
      <section className="border-b border-primary">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={[
                'p-6 md:p-8 text-center',
                i < count - 1 ? 'border-r border-primary' : '',
                i < 2 && count > 2 ? 'border-b md:border-b-0 border-primary' : '',
              ].join(' ')}
            >
              <p
                className="text-primary mb-1"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                <StatValue value={stat.value} />
              </p>
              <p className="text-muted uppercase tracking-[0.15em]" style={{ fontSize: '0.65rem', fontWeight: 500 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (layout === 'MINIMAL') {
    return (
      <section className="border-b border-primary">
        <div className="p-8 md:p-12 lg:px-16">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span
                  className="text-primary"
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    fontWeight: 900,
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  <StatValue value={stat.value} />
                </span>
                <span className="text-muted uppercase tracking-[0.15em]" style={{ fontSize: '0.6rem', fontWeight: 600 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // HORIZONTAL (default)
  return (
    <section className="border-b border-primary overflow-x-auto">
      <div className="flex min-w-max md:min-w-0 divide-x divide-primary">
        {stats.map((stat, i) => (
          <div key={i} className="flex-1 flex items-center gap-4 px-8 py-5 min-w-[180px]">
            <span
              className="text-primary shrink-0"
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                fontWeight: 900,
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              <StatValue value={stat.value} />
            </span>
            <span className="text-muted uppercase tracking-[0.15em] leading-tight" style={{ fontSize: '0.6rem', fontWeight: 600 }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
