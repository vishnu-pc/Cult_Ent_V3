export interface TestimonialData {
  id: number;
  company: string;
  logo: string;
  message: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  animationDelay: number;
}

export interface TestimonialsProps {
  testimonials?: TestimonialData[];
} 