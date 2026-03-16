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

type LinkCTA = Pick<Button, "id" | "label" | "href" | "variant" | "openInNewTab">;
type ActionCTA = { label: string; variant?: string; onClick: () => void };

interface ButtonProps {
  cta: LinkCTA | ActionCTA;
  entryId?: string;
  componentChain?: ReturnType<typeof createComponentChainLink>[];
  size?: "sm" | "md";
  className?: string;
  style?: React.CSSProperties;
}

function getVariantClasses(variant: string): string {
  switch (variant) {
    case "PRIMARY":
      return "bg-brand text-white hover:bg-brand/90 transition-colors";
    case "SECONDARY":
      return "bg-secondary text-primary border border-primary hover:bg-[#EFEFE9] transition-colors";
    case "GHOST":
      return "border border-secondary/40 text-secondary hover:border-secondary transition-colors";
    case "OUTLINE":
      return "border border-primary hover:bg-primary hover:text-secondary transition-colors";
    case "TEXT":
      return "text-brand hover:underline transition-colors";
    default:
      return "bg-brand text-white hover:bg-brand/90 transition-colors";
  }
}

function isActionCTA(cta: LinkCTA | ActionCTA): cta is ActionCTA {
  return "onClick" in cta;
}

export default function Button({
  cta,
  entryId,
  componentChain,
  size = "md",
  className = "",
  style,
}: ButtonProps) {
  const variant = isActionCTA(cta) ? (cta.variant ?? "OUTLINE") : cta.variant;
  const variantClasses = getVariantClasses(variant);
  const paddingClasses = size === "sm" ? "px-8 py-4" : "px-10 py-5";
  const baseClasses =
    variant === "TEXT"
      ? "inline-flex items-center gap-3 uppercase tracking-[0.1em] cursor-pointer"
      : `inline-flex items-center gap-3 ${paddingClasses} uppercase tracking-[0.1em] cursor-pointer`;
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;
  const labelStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    fontWeight: 700,
    ...style,
  };

  if (isActionCTA(cta)) {
    return (
      <button
        type="button"
        onClick={cta.onClick}
        className={combinedClasses}
        style={labelStyle}
      >
        {cta.label}
      </button>
    );
  }

  const content = (
    <>
      <span
        {...createPreviewAttributes({
          entryId: entryId!,
          fieldApiId: "label",
          componentChain: componentChain!,
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
