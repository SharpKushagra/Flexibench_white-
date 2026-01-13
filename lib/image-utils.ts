/**
 * Generate a blur data URL for Next.js Image placeholder
 * Creates a tiny 1x1 pixel image with the specified color
 */
export function generateBlurDataURL(color: string = "#e5e7eb"): string {
  // Create a 1x1 pixel base64 encoded image
  const svg = `
    <svg width="1" height="1" xmlns="http://www.w3.org/2000/svg">
      <rect width="1" height="1" fill="${color}"/>
    </svg>
  `;
  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Predefined blur placeholders for different color schemes
 */
export const blurPlaceholders = {
  light: generateBlurDataURL("#f3f4f6"), // light gray
  dark: generateBlurDataURL("#1f2937"), // dark gray
  primary: generateBlurDataURL("#fb923c"), // orange
  blue: generateBlurDataURL("#3b82f6"), // blue
  purple: generateBlurDataURL("#8b5cf6"), // purple
  green: generateBlurDataURL("#10b981"), // green
  pink: generateBlurDataURL("#ec4899"), // pink
  default: generateBlurDataURL("#e5e7eb"), // default gray
};
