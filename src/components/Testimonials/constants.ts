import type { TestimonialData } from './Testimonials.types';

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    company: 'WARNER BROTHERS',
    logo: 'WB',
    message:
      "Our employees have greatly appreciated this program, especially at such a reasonable cost. We've successfully completed two rounds of registrations so far and look forward to more.",
    position: {
      top: '80%',
      left: '2%',
    },
    animationDelay: 0,
  },
  {
    id: 2,
    company: 'MEESHO',
    logo: 'm',
    message:
      "Since offering Cult gym benefits, we've seen a noticeable boost in employee morale and overall wellness.",
    position: {
      top: '50%',
      right: '2%',
    },
    animationDelay: 2,
  },
  {
    id: 3,
    company: 'GOOGLE',
    logo: 'G',
    message:
      'The wellness sessions brought in a lot of positive energy to our workplace. Employees are more engaged and productive.',
    position: {
      bottom: '80%',
      left: '2%',
    },
    animationDelay: 4,
  },
  {
    id: 4,
    company: 'AMAZON',
    logo: 'A',
    message:
      'An engaging way to keep employees active and motivated. The program has exceeded our expectations in terms of participation.',
    position: {
      bottom: '70%',
      right: '2%',
    },
    animationDelay: 6,
  },
];
