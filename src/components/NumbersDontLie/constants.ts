import type { TileData } from './NumbersDontLie.types';
import Wellness1 from '../../assets/images/Wellness/Wellness-1.jpg';
import Wellness2 from '../../assets/images/Wellness/Wellness-2.jpeg';

export const tilesData: TileData[] = [
  {
    id: 1,
    value: '70%',
    description: 'increase in employee engagement',
    backgroundImage: Wellness1,
    hasImage: true,
  },
  {
    id: 2,
    title: 'Significant reduction',
    description: 'in absenteeism rates',
    hasImage: false,
  },
  {
    id: 3,
    title: 'Complete User Privacy',
    description: 'your data stays yours',
    hasImage: false,
  },
  {
    id: 4,
    title: 'Exclusive Corporate Dashboard',
    description: 'to track and monitor program performance',
    hasImage: false,
  },
  {
    id: 5,
    value: '40%',
    description: 'increase in employee productivity',
    backgroundImage: Wellness2,
    hasImage: true,
  },
  {
    id: 6,
    title: '100% Customized Programs',
    description: 'tailored to your company culture',
    hasImage: false,
  },
  {
    id: 7,
    title: 'ISO 9001 & 45001',
    description: 'certified wellness solutions you can trust',
    hasImage: false,
  },
]; 