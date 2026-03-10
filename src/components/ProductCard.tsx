import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Bike, BikeListItem } from '@/types/hybike';
import { formatCategoryValue, formatPrice } from '@/types/hybike';
import { createPreviewAttributes } from '@hygraph/preview-sdk/core';

interface ProductCardProps {
  bike: Bike | BikeListItem;
  locale: string;
  showPrices?: boolean;
  showStock?: boolean;
}

export default function ProductCard({ bike, locale, showPrices = true, showStock = false }: ProductCardProps) {
  const price = bike.externalProduct?.data?.calculated_price;
  const availability = bike.externalProduct?.data?.availability;
  const inventoryLevel = bike.externalProduct?.data?.inventory_level;
  const inStock = availability === 'available' && (inventoryLevel ?? 0) > 0;
  const category = formatCategoryValue(bike.category?.value);

  return (
    <Link
      href={`/${locale}/product/${bike.slug}`}
      className="group block border border-primary bg-secondary hover:bg-primary transition-colors duration-300"
    >
      {/* Image */}
      <div
        {...createPreviewAttributes({ entryId: bike.id, fieldApiId: "image" })}
        className="aspect-square overflow-hidden border-b border-primary"
      >
        {bike.image?.url ? (
          <Image
            src={bike.image.url}
            alt={bike.name}
            width={bike.image.width || 600}
            height={bike.image.height || 600}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[#E8E8E4] flex items-center justify-center">
            <span className="text-muted text-sm uppercase tracking-widest">No image</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p
              className="uppercase tracking-[0.15em] text-muted group-hover:text-secondary/50 mb-1 transition-colors"
              style={{ fontSize: '0.65rem', fontWeight: 700 }}
            >
              {category}
            </p>
            <h3
              {...createPreviewAttributes({ entryId: bike.id, fieldApiId: "name" })}
              className="group-hover:text-secondary transition-colors"
            >
              {bike.name}
            </h3>
          </div>
          {showPrices && (
            <p
              className="text-primary group-hover:text-accent transition-colors whitespace-nowrap mt-1"
              style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {formatPrice(price)}
            </p>
          )}
        </div>
        {showStock && (
          <p
            className={`uppercase tracking-[0.15em] mb-3 transition-colors ${inStock ? 'text-green-600' : 'text-muted'}`}
            style={{ fontSize: '0.65rem', fontWeight: 700 }}
          >
            {inStock ? 'In Stock' : 'Out of Stock'}
          </p>
        )}

        {bike.tagline && (
          <p
            {...createPreviewAttributes({ entryId: bike.id, fieldApiId: "tagline" })}
            className="text-muted group-hover:text-secondary/60 transition-colors mb-4"
            style={{ lineHeight: 1.6 }}
          >
            {bike.tagline}
          </p>
        )}

        <div className="flex items-center gap-2 text-accent">
          <span className="uppercase tracking-[0.1em]" style={{ fontSize: '0.7rem', fontWeight: 700 }}>
            View Details
          </span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
