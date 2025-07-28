/**
 * Position interface for responsive positioning across different screen sizes
 */
export interface ResponsivePosition {
  desktop?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  laptop?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  tablet?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  mobile?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  smallMobile?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

/**
 * Testimonial data structure with responsive positioning
 */
export interface TestimonialData {
  id: number;
  company: string;
  logo: string;
  message: string;
  position: ResponsivePosition;
  animationDelay: number;
}

/**
 * Props for the Testimonials component
 */
export interface TestimonialsProps {
  testimonials?: TestimonialData[];
}
