import type { Solution } from './WellnessSolutions.types';

import Wellness1 from '../../assets/images/Wellness/Wellness-1.webp';
import Wellness2 from '../../assets/images/Wellness/Wellness-2.webp';
import Wellness3 from '../../assets/images/Wellness/Wellness-3.webp';
import Wellness4 from '../../assets/images/Wellness/Wellness-4.webp';
import Wellness5 from '../../assets/images/Wellness/Wellness-5.webp';

/**
 * An array of wellness solution objects used to populate the component.
 * Each object contains the details for a specific wellness solution offered.
 * Each solution includes a background gradient for hover and border gradient for border-bottom.
 */
export const solutions: Solution[] = [
  {
    id: 1,
    title: 'Premium Fitness Access',
    description:
      'Unlock 600+ elite fitness centers, gyms and sports facilities nationwide for your team. From HIIT warriors to zen-seeking yogis, everyone finds their fitness home.',
    imageUrl: Wellness1,
    backgroundGradient: 'var(--gradient-background-wellness-1)', // Top to bottom gradient
    borderGradient: 'var(--gradient-border-wellness-1)', // Left to right gradient
  },
  {
    id: 2,
    title: 'Dynamic Employee Engagement',
    description:
      'Transform "Maybe I\'ll exercise someday" into "Is it time for our team challenge yet?" with events that spark genuine excitement',
    imageUrl: Wellness2,
    backgroundGradient: 'var(--gradient-background-wellness-2)', // Top to bottom gradient
    borderGradient: 'var(--gradient-border-wellness-2)', // Left to right gradient
  },
  {
    id: 3,
    title: 'Comprehensive All-Round Wellness',
    description:
      'Because brilliant minds need balanced bodies. Cutting-edge nutrition, mental wellness support, and health check-ups that employees actually look forward to.',
    imageUrl: Wellness3,
    backgroundGradient: 'var(--gradient-background-wellness-3)', // Top to bottom gradient
    borderGradient: 'var(--gradient-border-wellness-3)', // Left to right gradient
  },
  {
    id: 4,
    title: 'Flexible On-Campus Solutions',
    description:
      "That forgotten corner of your office? It's your next culture-building hotspot. Or let us elevate your existing gym into something extraordinary.",
    imageUrl: Wellness4,
    backgroundGradient: 'var(--gradient-background-wellness-4)', // Top to bottom gradient
    borderGradient: 'var(--gradient-border-wellness-4)', // Left to right gradient
  },
  {
    id: 5,
    title: 'Thoughtful Corporate Gifting',
    description:
      'Forget the branded pens. Give something that powers performance and silently reminds them they work for a company that gets it.',
    imageUrl: Wellness5,
    backgroundGradient: 'var(--gradient-background-wellness-5)', // Top to bottom gradient
    borderGradient: 'var(--gradient-border-wellness-5)', // Left to right gradient
  },
];
