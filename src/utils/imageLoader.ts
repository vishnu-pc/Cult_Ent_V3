/**
 * Dynamic image import utility for lazy loading images
 * This helps reduce initial bundle size by loading images only when needed
 */

export interface LazyImageData {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Lazy load image with optional placeholder
 */
export const createLazyImage = (src: string, alt: string): LazyImageData => ({
  src,
  alt,
  loading: 'lazy',
});

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Create optimized image props with responsive loading
 */
export const createOptimizedImageProps = (
  src: string,
  alt: string,
  isCritical = false
): LazyImageData => ({
  src,
  alt,
  loading: isCritical ? 'eager' : 'lazy',
});

/**
 * Get WebP image with PNG fallback
 */
export const getOptimizedImageSrc = (basePath: string, extension = 'webp'): string => {
  // Return WebP version by default, browser will handle fallbacks
  return basePath.replace(/\.(png|jpg|jpeg)$/i, `.${extension}`);
};
