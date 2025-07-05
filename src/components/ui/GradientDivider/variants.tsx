import React from 'react';
import GradientDivider from './GradientDivider';
import type { GradientDividerProps } from './GradientDivider.types';

// Combined gradient configurations for static and animated variants
export const GRADIENT_CONFIGS = {
  // Primary brand gradients
  BRAND_PRIMARY: {
    leftColor: '#0066ff',  // Blue
    rightColor: '#ffff00', // Yellow
    cssVariable: '--gradient-full', // For animated version
  },
  
  // Section-specific gradients
  LANDING_BANNER: {
    leftColor: '#0066ff',  // Blue
    rightColor: '#ffff00', // Yellow
    cssVariable: '--gradient-full', // For animated version
  },
  
  WELLNESS_SOLUTIONS: {
    leftColor: '#00b4ff',  // Light Blue
    rightColor: '#ed3a79', // Pink
    cssVariable: '--gradient-full', // For animated version
  },
  
  WHY_CHOOSE_CULT: {
    leftColor: '#fdd914',  // Golden Yellow
    rightColor: '#ed3a79', // Pink
    cssVariable: '--gradient-full', // For animated version
  },
  
  CONTACT_US: {
    leftColor: '#ed3a79',  // Pink
    rightColor: '#0066ff', // Blue
    cssVariable: '--gradient-full', // For animated version
  },
  
  OUR_IMPACT: {
    leftColor: '#00ff88',  // Green
    rightColor: '#0066ff', // Blue
    cssVariable: '--gradient-full', // For animated version
  },
  
  TESTIMONIALS: {
    leftColor: '#ffff00',  // Yellow
    rightColor: '#ff6b6b', // Coral Red
    cssVariable: '--gradient-full', // For animated version
  },
  
  // Special gradients
  SUCCESS: {
    leftColor: '#00ff88',  // Green
    rightColor: '#00b4ff', // Light Blue
    cssVariable: '--gradient-full', // For animated version
  },
  
  WARNING: {
    leftColor: '#ffd700',  // Gold
    rightColor: '#ff8c00', // Orange
    cssVariable: '--gradient-full', // For animated version
  },
  
  ERROR: {
    leftColor: '#ff6b6b',  // Red
    rightColor: '#ee5a24', // Dark Orange
    cssVariable: '--gradient-full', // For animated version
  },
  
  NEUTRAL: {
    leftColor: '#636e72',  // Gray
    rightColor: '#2d3436', // Dark Gray
    cssVariable: '--gradient-full', // For animated version
  },
} as const;

// Type for gradient configuration keys
export type GradientConfigKey = keyof typeof GRADIENT_CONFIGS;

// Generic variant creator function
const createGradientVariant = (
  configKey: GradientConfigKey,
  animated: boolean = true
) => {
  return React.forwardRef<HTMLDivElement, Omit<GradientDividerProps, 'animated' | 'cssVariable' | 'preset' | 'leftColor' | 'rightColor'>>((props, ref) => {
    const config = GRADIENT_CONFIGS[configKey];
    
    if (animated) {
      return (
        <GradientDivider
          {...props}
          ref={ref}
          animated={true}
          cssVariable={config.cssVariable}
        />
      );
    } else {
      return (
        <GradientDivider
          {...props}
          ref={ref}
          animated={false}
          leftColor={config.leftColor}
          rightColor={config.rightColor}
        />
      );
    }
  });
};

// Section-specific ANIMATED variants (current default)
export const LandingBannerDivider = createGradientVariant('LANDING_BANNER', true);
LandingBannerDivider.displayName = 'LandingBannerDivider';

export const LogoLoaderDivider = createGradientVariant('BRAND_PRIMARY', true);
LogoLoaderDivider.displayName = 'LogoLoaderDivider';

export const WellnessSolutionsDivider = createGradientVariant('WELLNESS_SOLUTIONS', true);
WellnessSolutionsDivider.displayName = 'WellnessSolutionsDivider';

export const ClienteleDivider = createGradientVariant('BRAND_PRIMARY', true);
ClienteleDivider.displayName = 'ClienteleDivider';

export const TestimonialsDivider = createGradientVariant('TESTIMONIALS', true);
TestimonialsDivider.displayName = 'TestimonialsDivider';

export const OurImpactDivider = createGradientVariant('OUR_IMPACT', true);
OurImpactDivider.displayName = 'OurImpactDivider';

export const BeBetterSectionDivider = createGradientVariant('NEUTRAL', true);
BeBetterSectionDivider.displayName = 'BeBetterSectionDivider';

// Section-specific STATIC variants (for fallback or specific use cases)
export const LandingBannerDividerStatic = createGradientVariant('LANDING_BANNER', false);
LandingBannerDividerStatic.displayName = 'LandingBannerDividerStatic';

export const LogoLoaderDividerStatic = createGradientVariant('BRAND_PRIMARY', false);
LogoLoaderDividerStatic.displayName = 'LogoLoaderDividerStatic';

export const WellnessSolutionsDividerStatic = createGradientVariant('WELLNESS_SOLUTIONS', false);
WellnessSolutionsDividerStatic.displayName = 'WellnessSolutionsDividerStatic';

export const ClienteleDividerStatic = createGradientVariant('BRAND_PRIMARY', false);
ClienteleDividerStatic.displayName = 'ClienteleDividerStatic';

export const TestimonialsDividerStatic = createGradientVariant('TESTIMONIALS', false);
TestimonialsDividerStatic.displayName = 'TestimonialsDividerStatic';

export const OurImpactDividerStatic = createGradientVariant('OUR_IMPACT', false);
OurImpactDividerStatic.displayName = 'OurImpactDividerStatic';

export const BeBetterSectionDividerStatic = createGradientVariant('NEUTRAL', false);
BeBetterSectionDividerStatic.displayName = 'BeBetterSectionDividerStatic';

// Utility function to create custom variants on the fly
export const createCustomGradientVariant = (
  leftColor: string,
  rightColor: string,
  cssVariable: string = '--gradient-full',
  animated: boolean = true
) => {
  return React.forwardRef<HTMLDivElement, Omit<GradientDividerProps, 'animated' | 'cssVariable' | 'leftColor' | 'rightColor'>>((props, ref) => {
    if (animated) {
      return (
        <GradientDivider
          {...props}
          ref={ref}
          animated={true}
          cssVariable={cssVariable}
        />
      );
    } else {
      return (
        <GradientDivider
          {...props}
          ref={ref}
          animated={false}
          leftColor={leftColor}
          rightColor={rightColor}
        />
      );
    }
  });
};

// Export the gradient colors for backward compatibility
export const GRADIENT_COLORS = Object.fromEntries(
  Object.entries(GRADIENT_CONFIGS).map(([key, config]) => [
    key,
    { leftColor: config.leftColor, rightColor: config.rightColor }
  ])
) as Record<GradientConfigKey, { leftColor: string; rightColor: string }>;

/*
USAGE EXAMPLES:

// Current usage (animated):
<LandingBannerDivider />
<WellnessSolutionsDivider height="4px" />

// Static versions:
<LandingBannerDividerStatic />
<WellnessSolutionsDividerStatic height="4px" />

// To change colors in the future, modify GRADIENT_CONFIGS above:
// LANDING_BANNER: {
//   leftColor: '#0066ff',
//   rightColor: '#ffff00',
//   cssVariable: '--gradient-primary', // <- Change this line
// },

// Custom variants:
const MyCustomDivider = createCustomGradientVariant('#ff0000', '#00ff00', '--gradient-rainbow');
<MyCustomDivider />
*/
