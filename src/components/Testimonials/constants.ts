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
        bottom: '119%',
        right: '64%',
      },
      laptop: {
        bottom: '120%',
        right: '67%',
      },
      tablet: {
        bottom: '150%',
        right: '67%',
      },
      mobile: {
        top: '120%',
        left: '0%',
      },
      smallMobile: {
        top: '120%',
        left: '0%',
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
        bottom: '98%',
        right: '1%',
      },
      laptop: {
        bottom: '98%',
        right: '0%',
      },
      tablet: {
        bottom: '118%',
        right: '0%',
      },
      mobile: {
        top: '210%',
        right: '0%',
      },
      smallMobile: {
        top: '210%',
        right: '0%',
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
        top: '95%',
        left: '0%',
      },
      laptop: {
        top: '115%',
        left: '0%',
      },
      tablet: {
        top: '119%',
        left: '0%',
      },
      mobile: {
        top: '295%',
        left: '0%',
      },
      smallMobile: {
        top: '295%',
        left: '0%',
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
        top: '129%',
        right: '6%',
      },
      laptop: {
        top: '137%',
        right: '6%',
      },
      tablet: {
        top: '159%',
        right: '6%',
      },
      mobile: {
        top: '380%',
        right: '0%',
      },
      smallMobile: {
        top: '380%',
        right: '0%',
      },
    },
    animationDelay: 6,
  },
];
