'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { formatCategoryValue } from '@/types/hybike';

interface ProductFiltersProps {
  categories: string[];
  products: { category?: { value: string } | null }[];
}

export default function ProductFilters({ categories, products }: ProductFiltersProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const locale = (params.locale as string) || 'en';

  const param = searchParams.get('category') ?? 'All';
  const activeCategory = categories.includes(param) ? param : 'All';

  function selectCategory(cat: string) {
    if (cat === 'All') {
      router.push(`/${locale}/collection`);
    } else {
      router.push(`/${locale}/collection?category=${cat}`);
    }
  }

  return (
    <div className="flex items-stretch overflow-x-auto border-b border-primary">
      {categories.map((cat, i) => {
        const count =
          cat === 'All'
            ? products.length
            : products.filter((b) => b.category?.value === cat).length;
        const label = cat === 'All' ? 'All' : formatCategoryValue(cat);
        return (
          <button
            key={cat}
            onClick={() => selectCategory(cat)}
            className={`px-6 py-4 uppercase tracking-[0.1em] transition-colors whitespace-nowrap ${
              i < categories.length - 1 ? 'border-r border-primary' : ''
            } ${
              activeCategory === cat
                ? 'bg-primary text-secondary'
                : 'hover:bg-primary hover:text-secondary'
            }`}
            style={{ fontSize: '0.75rem', fontWeight: 700 }}
          >
            {label}
            <span
              className={`ml-2 ${activeCategory === cat ? 'text-accent' : 'text-muted'}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
