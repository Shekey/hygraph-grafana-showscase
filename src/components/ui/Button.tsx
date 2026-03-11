/**
 * Button Component - CTA button with hybikes design
 * Sharp corners, uppercase tracking, accent color system
 */

import Link from "next/link";
import type { Button } from "@/types/hygraph-generated";

import {
  createPreviewAttributes,
  createComponentChainLink,
} from "@hygraph/preview-sdk/core";

interface ButtonProps {
  cta: Pick<Button, "id" | "label" | "href" | "variant" | "openInNewTab">;
  entryId: string;
  componentChain: ReturnType<typeof createComponentChainLink>[];
  size?: "sm" | "md";
  className?: string;
  style?: React.CSSProperties;
}

function getVariantClasses(variant: string): string {
  switch (variant) {
    case "PRIMARY":
      return "bg-accent text-white hover:bg-accent/90 transition-colors";
    case "SECONDARY":
      return "bg-secondary text-primary border border-primary hover:bg-[#EFEFE9] transition-colors";
    case "GHOST":
      return "border border-secondary/40 text-secondary hover:border-secondary transition-colors";
    case "OUTLINE":
      return "border border-primary hover:bg-primary hover:text-secondary transition-colors";
    case "TEXT":
      return "text-accent hover:underline transition-colors";
    default:
      return "bg-accent text-white hover:bg-accent/90 transition-colors";
  }
}

export default function Button({
  cta,
  entryId,
  componentChain,
  size = "md",
  className = "",
  style,
}: ButtonProps) {
  const variantClasses = getVariantClasses(cta.variant);
  const paddingClasses = size === "sm" ? "px-8 py-4" : "px-10 py-5";
  const baseClasses =
    cta.variant === "TEXT"
      ? "inline-flex items-center gap-3 uppercase tracking-[0.1em]"
      : `inline-flex items-center gap-3 ${paddingClasses} uppercase tracking-[0.1em]`;
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;
  const labelStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    fontWeight: 700,
    ...style,
  };

  const content = (
    <>
      <span
        {...createPreviewAttributes({
          entryId,
          fieldApiId: "label",
          componentChain,
        })}
      >
        {cta.label}
      </span>
      {cta.variant === "PRIMARY" && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </>
  );

  if (cta.openInNewTab) {
    return (
      <a
        href={cta.href}
        className={combinedClasses}
        style={labelStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={combinedClasses} style={labelStyle}>
      {content}
    </Link>
  );
}
