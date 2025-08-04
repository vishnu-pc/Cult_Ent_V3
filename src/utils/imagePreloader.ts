/**
 * Image preloading strategies for performance optimization
 */

// Critical images that should be preloaded immediately
const criticalImages = [
  '/src/assets/Cult_Colour_Logo.svg',
  '/src/assets/icons/Cult_Navbar_Logo_New.webp',
];

// Images to preload after critical content loads
const priorityImages = [
  '/src/assets/images/Banner/Cult-Mobile-Background.png',
  '/src/assets/images/Testimonials/Invertedcomma.png',
];

/**
 * Preload critical images on app startup
 */
export const preloadCriticalImages = async (): Promise<void> => {
  const preloadPromises = criticalImages.map((src) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => {
        console.warn(`Failed to preload critical image: ${src}`);
        resolve(); // Don't block app startup for failed images
      };
      img.src = src;
    });
  });

  try {
    await Promise.all(preloadPromises);
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
};

/**
 * Preload priority images after initial load
 */
export const preloadPriorityImages = (): void => {
  // Use requestIdleCallback if available, otherwise setTimeout
  const schedulePreload = (callback: () => void) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback);
    } else {
      setTimeout(callback, 100);
    }
  };

  schedulePreload(() => {
    priorityImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });
};

/**
 * Intersection Observer for lazy loading images
 */
export const createImageObserver = (): IntersectionObserver | null => {
  if (!('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
        }
      });
    },
    {
      rootMargin: '50px 0px', // Start loading 50px before the image enters viewport
      threshold: 0.01,
    }
  );
};
