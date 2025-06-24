import type { Solution } from './WellnessSolutions.types';

import Wellness1 from '../../assets/images/Wellness/Wellness-1.jpg';
import Wellness2 from '../../assets/images/Wellness/Wellness-2.jpeg';
import Wellness3 from '../../assets/images/Wellness/Wellness-3.avif';
import Wellness4 from '../../assets/images/Wellness/Wellness-4.avif';
import Wellness5 from '../../assets/images/Wellness/Wellness-5.avif';

/**
 * An array of wellness solution objects used to populate the component.
 * Each object contains the details for a specific wellness solution offered.
 */
export const solutions: Solution[] = [
  {
    id: 1,
    title: 'Premium Fitness Access',
    description: 'Provide your employees with unlimited access to premium fitness centers, classes, and personalized workout plans to promote physical wellbeing.',
    imageUrl: Wellness1,
  },
  {
    id: 2,
    title: 'Dynamic Employee Engagement',
    description: 'Boost morale and team cohesion with interactive challenges, team-building activities, and wellness competitions tailored to your company culture.',
    imageUrl: Wellness2,
  },
  {
    id: 3,
    title: 'Comprehensive All-Round Wellness',
    description: 'Address all aspects of wellbeing with holistic programs covering physical fitness, mental health, nutrition, and work-life balance.',
    imageUrl: Wellness3,
  },
  {
    id: 4,
    title: 'Flexible On-Campus Solutions',
    description: 'Transform your workplace with on-site fitness centers, wellness rooms, and health-focused amenities designed for your specific space and needs.',
    imageUrl: Wellness4,
  },
  {
    id: 5,
    title: 'Thoughtful Corporate Gifting',
    description: 'Show appreciation with curated wellness packages, fitness equipment, and health-focused gifts that demonstrate your commitment to employee wellbeing.',
    imageUrl: Wellness5,
  },
]; 