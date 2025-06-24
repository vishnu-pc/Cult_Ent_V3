import type { Solution } from './WellnessSolutions.types';

/**
 * An array of wellness solution objects used to populate the component.
 * Each object contains the details for a specific wellness solution offered.
 */
export const solutions: Solution[] = [
  {
    id: 1,
    title: 'Premium Fitness Access',
    description: 'Provide your employees with unlimited access to premium fitness centers, classes, and personalized workout plans to promote physical wellbeing.',
    imageUrl: 'fitness-placeholder.jpg',
  },
  {
    id: 2,
    title: 'Dynamic Employee Engagement',
    description: 'Boost morale and team cohesion with interactive challenges, team-building activities, and wellness competitions tailored to your company culture.',
    imageUrl: 'engagement-placeholder.jpg',
  },
  {
    id: 3,
    title: 'Comprehensive All-Round Wellness',
    description: 'Address all aspects of wellbeing with holistic programs covering physical fitness, mental health, nutrition, and work-life balance.',
    imageUrl: 'wellness-placeholder.jpg',
  },
  {
    id: 4,
    title: 'Flexible On-Campus Solutions',
    description: 'Transform your workplace with on-site fitness centers, wellness rooms, and health-focused amenities designed for your specific space and needs.',
    imageUrl: 'campus-placeholder.jpg',
  },
  {
    id: 5,
    title: 'Thoughtful Corporate Gifting',
    description: 'Show appreciation with curated wellness packages, fitness equipment, and health-focused gifts that demonstrate your commitment to employee wellbeing.',
    imageUrl: 'gifting-placeholder.jpg',
  },
]; 