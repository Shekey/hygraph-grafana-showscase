"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";
import type { Bike, BikeListItem } from "@/types/hybike";
import { formatCategoryValue, formatPrice } from "@/types/hybike";
import {
  createPreviewAttributes,
  createComponentChainLink,
} from "@hygraph/preview-sdk/core";

const COLOR_HEX: Record<string, string> = {
  "Signal Red": "#CC2200",
  "Carbon Black": "#121212",
  "Pearl White": "#F0EDE8",
  "Midnight Black": "#121212",
  "Steel Blue": "#1E4D8C",
  "Chalk White": "#F0EDE8",
  "Graphite Grey": "#5A5A5A",
  "Forest Green": "#2D5A27",
  "Storm Blue": "#1C3D5A",
  "Titanium Silver": "#9E9E9E",
  "Matte Black": "#121212",
  Terracotta: "#C97B5A",
};

function colorHexForLabel(label: string): string {
  const known = COLOR_HEX[label];
  if (known) return known;
  let h = 0;
  for (let i = 0; i < label.length; i++) {
    h = (h * 31 + label.charCodeAt(i)) % 360;
  }
  return `hsl(${h}, 42%, 48%)`;
}

interface OptionValue {
  id: number;
  label: string;
  option_id: number;
  option_display_name: string;
}

interface OptionGroup {
  option_id: number;
  display_name: string;
  values: OptionValue[];
}

function buildOptionGroups(bike: Bike): OptionGroup[] {
  const variants = bike.externalProduct?.data?.variants;
  if (!variants?.length) return [];
  const map = new Map<number, OptionGroup>();
  for (const variant of variants) {
    for (const ov of variant.option_values ?? []) {
      if (!map.has(ov.option_id)) {
        map.set(ov.option_id, {
          option_id: ov.option_id,
          display_name: ov.option_display_name,
          values: [],
        });
      }
      const group = map.get(ov.option_id)!;
      if (!group.values.some((v) => v.id === ov.id)) {
        group.values.push(ov);
      }
    }
  }
  return Array.from(map.values());
}

function sortOptionGroups(groups: OptionGroup[]): OptionGroup[] {
  const rank = (displayName: string) => {
    const lower = displayName.toLowerCase();
    if (lower === "color") return 0;
    if (lower === "size") return 1;
    return 2;
  };

  return [...groups].sort((a, b) => {
    const d = rank(a.display_name) - rank(b.display_name);
    if (d !== 0) return d;
    return a.display_name.localeCompare(b.display_name);
  });
}

function findSelectedVariant(
  bike: Bike,
  selectedOptions: Record<number, number>
) {
  const variants = bike.externalProduct?.data?.variants;
  if (!variants?.length) return null;
  return (
    variants.find((v) =>
      (v.option_values ?? []).every(
        (ov) => selectedOptions[ov.option_id] === ov.id
      )
    ) ?? null
  );
}

interface ProductViewProps {
  bike: Bike;
  relatedBikes: BikeListItem[];
}

export default function ProductView({ bike, relatedBikes }: ProductViewProps) {
  const params = useParams();
  const locale = (params.locale as string) || "en";

  const optionGroups = sortOptionGroups(buildOptionGroups(bike));
  const initialSelected = Object.fromEntries(
    optionGroups.map((g) => [g.option_id, g.values[0]?.id])
  ) as Record<number, number>;

  const [selectedOptions, setSelectedOptions] =
    useState<Record<number, number>>(initialSelected);
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = findSelectedVariant(bike, selectedOptions);
  const category = formatCategoryValue(bike.category?.value);
  const price =
    selectedVariant?.calculated_price ??
    bike.externalProduct?.data?.calculated_price;

  const specs: [string, string][] = bike.specifications
    ? Object.entries(bike.specifications)
        .filter(([key, value]) => key !== "id" && value != null)
        .map(([key, value]) => [key, String(value)])
    : [];

  return (
    <div>
      {/* Breadcrumb */}
      <section className="border-b border-primary">
        <div className="flex items-center px-8 md:px-12 lg:px-16 py-4 gap-2">
          <Link
            href={`/${locale}/collection`}
            className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            <ArrowLeft size={14} />
            Collection
          </Link>
          <span className="text-muted mx-2">/</span>
          <span
            className="text-primary"
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {bike.name}
          </span>
        </div>
      </section>

      {/* Product */}
      <section className="border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-primary">
            <div
              {...createPreviewAttributes({
                entryId: bike.id,
                fieldApiId: "image",
              })}
              className="aspect-[4/3] lg:aspect-auto relative"
            >
              {bike.image?.url ? (
                <Image
                  src={bike.image.url}
                  alt={bike.name}
                  width={bike.image.width || 1200}
                  height={bike.image.height || 900}
                  className="w-full lg:max-h-[calc(100vh-107px)] object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full min-h-[400px] bg-[#E8E8E4] flex items-center justify-center">
                  <span className="text-muted text-sm uppercase tracking-widest">
                    No image
                  </span>
                </div>
              )}
              {category && (
                <div className="absolute top-0 left-0 bg-brand text-white px-6 py-3">
                  <p
                    className="uppercase tracking-[0.15em]"
                    style={{ fontSize: "0.65rem", fontWeight: 700 }}
                  >
                    {category}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-16">
            {category && (
              <p
                className="uppercase tracking-[0.2em] text-muted mb-3"
                style={{ fontSize: "0.65rem", fontWeight: 700 }}
              >
                {category}
              </p>
            )}
            <h2
              {...createPreviewAttributes({
                entryId: bike.id,
                fieldApiId: "name",
              })}
              className="mb-2"
            >
              {bike.name}
              <span className="text-brand">.</span>
            </h2>
            {bike.tagline && (
              <p
                {...createPreviewAttributes({
                  entryId: bike.id,
                  fieldApiId: "tagline",
                })}
                className="text-muted mb-6"
                style={{ lineHeight: 1.6 }}
              >
                {bike.tagline}
              </p>
            )}
            <p
              className="text-primary mb-8"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 900,
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              {formatPrice(price)}
            </p>

            {/* Dynamic option pickers */}
            {optionGroups.map((group) => {
              const isColorGroup = group.display_name.toLowerCase() === "color";
              return (
                <div key={group.option_id} className="mb-6">
                  <p
                    className="uppercase tracking-[0.15em] text-muted mb-3"
                    style={{ fontSize: "0.65rem", fontWeight: 700 }}
                  >
                    {group.display_name} &mdash;{" "}
                    {
                      group.values.find(
                        (v) => v.id === selectedOptions[group.option_id]
                      )?.label
                    }
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {group.values.map((value) => {
                      const isSelected =
                        selectedOptions[group.option_id] === value.id;
                      if (isColorGroup) {
                        const cssColor = colorHexForLabel(value.label);
                        return (
                          <button
                            key={value.id}
                            title={value.label}
                            onClick={() =>
                              setSelectedOptions((prev) => ({
                                ...prev,
                                [group.option_id]: value.id,
                              }))
                            }
                            className={`w-10 h-10 border-2 transition-all ${
                              isSelected
                                ? "border-brand scale-110"
                                : "border-primary/20 hover:border-primary"
                            }`}
                            style={{ backgroundColor: cssColor }}
                          />
                        );
                      }
                      return (
                        <button
                          key={value.id}
                          onClick={() =>
                            setSelectedOptions((prev) => ({
                              ...prev,
                              [group.option_id]: value.id,
                            }))
                          }
                          className={`h-12 px-4 border transition-colors uppercase tracking-[0.05em] ${
                            isSelected
                              ? "bg-primary text-secondary border-primary"
                              : "border-primary hover:bg-primary hover:text-secondary"
                          }`}
                          style={{ fontSize: "0.8rem", fontWeight: 700 }}
                        >
                          {value.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Quantity */}
            <div className="mb-8">
              <p
                className="uppercase tracking-[0.15em] text-muted mb-3"
                style={{ fontSize: "0.65rem", fontWeight: 700 }}
              >
                Quantity
              </p>
              <div className="flex items-center border border-primary w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors border-r border-primary"
                >
                  <Minus size={14} />
                </button>
                <span
                  className="w-12 h-12 flex items-center justify-center"
                  style={{
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors border-l border-primary"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="w-full bg-brand text-white py-5 uppercase tracking-[0.15em] hover:bg-brand/90 transition-colors flex items-center justify-center gap-3"
              style={{ fontSize: "0.8rem", fontWeight: 700 }}
            >
              Add to Cart
              <ArrowRight size={16} />
            </button>

            <div
              className="mt-4 flex items-center gap-2 text-muted"
              style={{ fontSize: "0.8rem" }}
            >
              <Check size={14} className="text-brand" />
              Free shipping within Europe. 30-day returns.
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specs */}
      {(bike.productFeatures?.length || specs.length > 0) && (
        <section className="border-b border-primary">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Features */}
            {bike.productFeatures && bike.productFeatures.length > 0 && (
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-primary">
                <p
                  className="uppercase tracking-[0.2em] text-muted mb-4"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  Description
                </p>
                <p
                  {...createPreviewAttributes({
                    entryId: bike.id,
                    fieldApiId: "description",
                  })}
                  className="mb-6 max-w-[540px]"
                >
                  {bike.description?.text}
                </p>
                <div
                  {...createPreviewAttributes({
                    entryId: bike.id,
                    fieldApiId: "productFeatures",
                  })}
                  className="space-y-3"
                >
                  {bike.productFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-brand flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specs */}
            {specs.length > 0 && (
              <div className="lg:col-span-5 p-8 md:p-12 lg:p-16">
                <p
                  className="uppercase tracking-[0.2em] text-muted mb-6"
                  style={{ fontSize: "0.65rem", fontWeight: 700 }}
                >
                  Specifications
                </p>
                <div>
                  {specs.map(([key, value], i) => (
                    <div
                      key={key}
                      className={`flex justify-between py-4 ${
                        i < specs.length - 1 ? "border-b border-primary/20" : ""
                      }`}
                    >
                      <span
                        className="text-muted uppercase tracking-[0.1em]"
                        style={{ fontSize: "0.75rem", fontWeight: 500 }}
                      >
                        {key}
                      </span>
                      <span
                        {...createPreviewAttributes({
                          entryId: bike.id,
                          fieldApiId: key,
                          componentChain: [
                            createComponentChainLink(
                              "specifications",
                              bike.specifications!.id
                            ),
                          ],
                        })}
                        style={{
                          fontWeight: 700,
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Related */}
      {relatedBikes.length > 0 && (
        <section>
          <div className="p-8 md:p-12 lg:px-16 border-b border-primary">
            <p
              className="uppercase tracking-[0.2em] text-muted mb-3"
              style={{ fontSize: "0.65rem", fontWeight: 700 }}
            >
              You may also like
            </p>
            <h3>More from the collection</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {relatedBikes.slice(0, 2).map((related, i) => (
              <div
                key={related.id}
                className={`${
                  i === 0 ? "md:border-r border-primary" : ""
                } border-b border-primary`}
              >
                <Link
                  href={`/${locale}/product/${related.slug}`}
                  className="group block hover:bg-primary transition-colors duration-300"
                >
                  <div
                    {...createPreviewAttributes({
                      entryId: related.id,
                      fieldApiId: "image",
                    })}
                    className="aspect-square overflow-hidden border-b border-primary"
                  >
                    {related.image?.url ? (
                      <Image
                        src={related.image.url}
                        alt={related.name}
                        width={related.image.width || 600}
                        height={related.image.height || 600}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#E8E8E4]" />
                    )}
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p
                        className="uppercase tracking-[0.15em] text-muted group-hover:text-secondary/50 mb-1 transition-colors"
                        style={{ fontSize: "0.65rem", fontWeight: 700 }}
                      >
                        {formatCategoryValue(related.category?.value)}
                      </p>
                      <h3
                        {...createPreviewAttributes({
                          entryId: related.id,
                          fieldApiId: "name",
                        })}
                        className="group-hover:text-secondary transition-colors"
                      >
                        {related.name}
                      </h3>
                    </div>
                    <p
                      className="text-primary group-hover:text-brand transition-colors"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {formatPrice(
                        related.externalProduct?.data?.calculated_price
                      )}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
