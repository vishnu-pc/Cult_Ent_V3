import type { TestimonialData } from './Testimonials.types';

// Import testimonial logo images
import Logo1 from '../../assets/images/Testimonials/Logo-1.png';
import Logo2 from '../../assets/images/Testimonials/Logo-2.png';
import Logo3 from '../../assets/images/Testimonials/Logo-3.png';
import Logo4 from '../../assets/images/Testimonials/Logo-4.png';

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    company: 'WARNER BROTHERS',
    logo: Logo1,
    message:
      "Our employees have greatly appreciated this program, especially at such a reasonable cost. We've successfully completed two rounds of registrations so far and look forward to more.",
    position: {
      desktop: {
        bottom: '107%',
        right: '64%',
      },
      laptop: {
        bottom: '130%',
        right: '67%',
      },
      tablet: {
        bottom: '130%',
        right: '67%',
      },
      mobile: {
        bottom: '250%',
        left: '3%',
      },
      smallMobile: {
        bottom: '250%',
        left: '3%',
      },
    },
    animationDelay: 0,
  },
  {
    id: 2,
    company: 'MEESHO',
    logo: Logo2,
    message:
      "Since offering Cult gym benefits, we've seen a noticeable boost in employee morale and overall wellness.",
    position: {
      desktop: {
        bottom: '88%',
        right: '3%',
      },
      laptop: {
        bottom: '98%',
        right: '0%',
      },
      tablet: {
        bottom: '98%',
        right: '0%',
      },
      mobile: {
        bottom: '140%',
        right: '3%',
      },
      smallMobile: {
        bottom: '140%',
        right: '3%',
      },
    },
    animationDelay: 2,
  },
  {
    id: 3,
    company: 'Narayana Health',
    logo: Logo3,
    message:
      'More employees are actively leveraging the benefits of the cult for Corporate program, leading to significant rise in our collective fitness levels.',
    position: {
      desktop: {
        top: '85%',
        left: '0%',
      },
      laptop: {
        top: '109%',
        left: '0%',
      },
      tablet: {
        top: '109%',
        left: '3%',
      },
      mobile: {
        top: '140%',
        left: '3%',
      },
      smallMobile: {
        top: '140%',
        left: '3%',
      },
    },
    animationDelay: 4,
  },
  {
    id: 4,
    company: 'Presidio',
    logo: Logo4,
    message:
      'We witnessed a significant boost in employee participation and satisfaction through various engagement activities and campaigns.',
    position: {
      desktop: {
        top: '117%',
        right: '6%',
      },
      laptop: {
        top: '139%',
        right: '6%',
      },
      tablet: {
        top: '139%',
        right: '6%',
      },
      mobile: {
        top: '250%',
        right: '3%',
      },
      smallMobile: {
        top: '250%',
        right: '3%',
      },
    },
    animationDelay: 6,
  },
];
