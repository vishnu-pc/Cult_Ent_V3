import type { GradientConfigKey } from './variants';

export interface GradientDividerProps {
  leftColor?: string;
  rightColor?: string;
  height?: string;
  className?: string;
  preset?: GradientConfigKey; // Use predefined color combination
  animated?: boolean; // Enable animated gradient movement
  cssVariable?: string; // CSS variable for animated gradients (e.g., '--gradient-full')
}

export interface StyledGradientDividerProps {
  $leftColor?: string;
  $rightColor?: string;
  $height: string;
  $animated: boolean;
  $cssVariable?: string;
}
