import React from 'react';

export type ResponsiveImageSource = {
  type: 'image/avif' | 'image/webp' | 'image/jpeg' | 'image/png';
  srcSet: string; // e.g. "/img/hero-640.avif 640w, /img/hero-1280.avif 1280w"
};

export interface ResponsiveImageProps {
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string; // e.g. "(max-width: 768px) 100vw, 1280px"
  fallbackSrc: string; // final <img src>
  sources: ResponsiveImageSource[]; // ordered: avif, webp, ...
  className?: string;
  style?: React.CSSProperties;
  placeholderSrc?: string; // tiny blurred placeholder
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  alt,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  sizes = '(max-width: 768px) 100vw, 1280px',
  fallbackSrc,
  sources,
  className,
  style,
  placeholderSrc,
}) => {
  const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    src: fallbackSrc,
    alt,
    width,
    height,
    loading,
    decoding,
    // fetchPriority is a standard attribute; TS may not include it yet
    // @ts-ignore
    fetchpriority: fetchPriority,
    className,
    style,
  };

  // Optional LQIP placeholder support
  if (placeholderSrc && loading === 'lazy') {
    imgProps.src = placeholderSrc;
    // data-src can be used with your existing IntersectionObserver to swap in real src
    (imgProps as any)['data-src'] = fallbackSrc;
  }

  return (
    <picture>
      {sources.map((s, i) => (
        <source key={i} type={s.type} srcSet={s.srcSet} sizes={sizes} />
      ))}
      <img {...imgProps} />
    </picture>
  );
};

export default ResponsiveImage;
