# GradientDivider Usage Guide

## Section-Specific Variants (Recommended)

Each section has its own variant component for easy maintenance and future customization. Both
animated and static versions are available:

```tsx
// Import section-specific variants
import {
  LandingBannerDivider,
  LogoLoaderDivider,
  WellnessSolutionsDivider,
  ClienteleDivider,
  TestimonialsDivider,
  OurImpactDivider,
  BeBetterSectionDivider,
  // Static versions
  LandingBannerDividerStatic,
  WellnessSolutionsDividerStatic,
  // ... etc
} from '../ui/GradientDivider';

// Animated usage (all currently use --gradient-full)
<LandingBannerDivider />
<LogoLoaderDivider height="4px" />
<WellnessSolutionsDivider className="custom-class" />

// Static usage (uses predefined color pairs)
<LandingBannerDividerStatic />
<WellnessSolutionsDividerStatic height="4px" />
```

## Combined Configuration File

All gradient configurations are now in `variants.tsx` with the `GRADIENT_CONFIGS` object:

```tsx
// Current structure in variants.tsx:
export const GRADIENT_CONFIGS = {
  LANDING_BANNER: {
    leftColor: '#0066ff', // Blue (for static)
    rightColor: '#ffff00', // Yellow (for static)
    cssVariable: '--gradient-full', // For animated
  },
  WELLNESS_SOLUTIONS: {
    leftColor: '#00b4ff', // Light Blue (for static)
    rightColor: '#ed3a79', // Pink (for static)
    cssVariable: '--gradient-full', // For animated
  },
  // ... etc
};
```

## Changing Colors Per Section (Future)

**Option 1: Change CSS Variable (Animated)**

```tsx
// In variants.tsx, change the cssVariable:
LANDING_BANNER: {
  leftColor: '#0066ff',
  rightColor: '#ffff00',
  cssVariable: '--gradient-primary', // <- Change this
},
```

**Option 2: Change Static Colors**

```tsx
// In variants.tsx, change leftColor/rightColor:
WELLNESS_SOLUTIONS: {
  leftColor: '#ff0000',  // <- Change this
  rightColor: '#00ff00', // <- Change this
  cssVariable: '--gradient-full',
},
```

## Available CSS Variables

From `variables.css`:

- `--gradient-primary` (Yellow to Pink)
- `--gradient-secondary` (Pink to Blue)
- `--gradient-tertiary` (Blue to Yellow)
- `--gradient-full` (All three colors) _currently used_
- `--gradient-rainbow` (Rainbow loop)

## Manual Usage (Advanced)

```tsx
import GradientDivider, { createCustomGradientVariant } from '../ui/GradientDivider';

// Animated with custom CSS variable
<GradientDivider animated={true} cssVariable="--gradient-primary" />

// Static with preset from config
<GradientDivider preset="BRAND_PRIMARY" />

// Static with custom colors
<GradientDivider leftColor="#ff6b6b" rightColor="#4ecdc4" />

// Create custom variants
const MyCustomDivider = createCustomGradientVariant('#ff0000', '#00ff00', '--gradient-rainbow');
<MyCustomDivider />
```

## File Structure Summary

- `variants.tsx` - **Combined** static/animated configurations + variant components
- `GradientDivider.tsx` - Main component with forwardRef support
- `GradientDivider.types.ts` - TypeScript interfaces
- `GradientDivider.styles.ts` - Styled components with animation
- `index.ts` - Exports all variants and utilities
