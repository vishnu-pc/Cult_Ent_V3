import React from 'react';
import { StyledGradientDivider } from './GradientDivider.styles';
import type { GradientDividerProps } from './GradientDivider.types';
import { GRADIENT_COLORS } from './variants';

const GradientDivider = React.forwardRef<HTMLDivElement, GradientDividerProps>(
  (
    {
      leftColor,
      rightColor,
      height = '2px',
      className,
      preset = 'BRAND_PRIMARY',
      animated = false,
      cssVariable = '--gradient-full',
    },
    ref
  ) => {
    // For animated gradients, we only need height, className, and cssVariable
    if (animated) {
      return (
        <StyledGradientDivider
          ref={ref}
          $height={height}
          $animated={true}
          $cssVariable={cssVariable}
          className={className}
        />
      );
    }

    // For static gradients, use preset colors or individual colors
    const presetColors =
      GRADIENT_COLORS[preset as keyof typeof GRADIENT_COLORS];
    const finalLeftColor = leftColor || presetColors.leftColor;
    const finalRightColor = rightColor || presetColors.rightColor;

    return (
      <StyledGradientDivider
        ref={ref}
        $leftColor={finalLeftColor}
        $rightColor={finalRightColor}
        $height={height}
        $animated={false}
        className={className}
      />
    );
  }
);

GradientDivider.displayName = 'GradientDivider';

export default GradientDivider;
