/**
 * Theme utility functions for dynamic color theming
 * Converts Hygraph brandColor (hex) to CSS variables for Tailwind
 */

/**
 * Converts hex color to HSL format
 * @param hex - Hex color string (e.g., "#0EA5E9" or "0EA5E9")
 * @returns HSL values as string "H S% L%" (e.g., "199 89% 48%")
 */
export function hexToHSL(hex: string): string {
  // Remove # if present
  const cleanHex = hex.replace('#', '');

  // Parse hex to RGB
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  // Find min/max values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  // Calculate lightness
  let l = (max + min) / 2;

  // Calculate saturation
  let s = 0;
  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  }

  // Calculate hue
  let h = 0;
  if (delta !== 0) {
    if (max === r) {
      h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
    } else if (max === g) {
      h = ((b - r) / delta + 2) / 6;
    } else {
      h = ((r - g) / delta + 4) / 6;
    }
  }

  // Convert to degrees and percentages
  const hDeg = Math.round(h * 360);
  const sPercent = Math.round(s * 100);
  const lPercent = Math.round(l * 100);

  return `${hDeg} ${sPercent}% ${lPercent}%`;
}

/**
 * Generates theme color variants from base HSL
 * Creates hover, active, light, and dark variants
 */
function generateColorVariants(hsl: string): {
  primary: string;
  hover: string;
  active: string;
  light: string;
  dark: string;
} {
  // Parse HSL values
  const match = hsl.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
  if (!match) {
    throw new Error(`Invalid HSL format: ${hsl}`);
  }

  const h = parseInt(match[1]);
  const s = parseInt(match[2]);
  const l = parseInt(match[3]);

  return {
    primary: `${h} ${s}% ${l}%`,
    hover: `${h} ${s}% ${Math.max(l - 6, 0)}%`, // Darker for hover
    active: `${h} ${s}% ${Math.max(l - 10, 0)}%`, // Even darker for active
    light: `${h} ${s}% ${Math.min(l + 40, 95)}%`, // Much lighter for backgrounds
    dark: `${h} ${s}% ${Math.max(l - 20, 10)}%`, // Much darker for text
  };
}

/**
 * Generates CSS variable map from brand color
 * @param brandColor - Hex color from Hygraph SiteSettings (e.g., "#0EA5E9")
 * @returns Object mapping CSS variable names to HSL values
 */
export function generateThemeVariables(brandColor: string): Record<string, string> {
  const hsl = hexToHSL(brandColor);
  const variants = generateColorVariants(hsl);

  return {
    '--brand-hsl': variants.primary,
    '--brand-hover-hsl': variants.hover,
    '--brand-active-hsl': variants.active,
    '--brand-light-hsl': variants.light,
    '--brand-dark-hsl': variants.dark,
  };
}

/**
 * Converts theme variables object to inline CSS string
 * @param variables - CSS variables object from generateThemeVariables
 * @returns CSS string (e.g., "--color-brand-primary: 199 89% 48%; --color-brand-hover: ...")
 */
export function themeVariablesToCSS(variables: Record<string, string>): string {
  return Object.entries(variables)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
}
