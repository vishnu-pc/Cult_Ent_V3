import type { TileData } from './NumbersDontLie.types';
import Wellness1 from '../../assets/images/Wellness/Wellness-1.jpg';
import Wellness2 from '../../assets/images/Wellness/Wellness-2.jpeg';

export const tilesData: TileData[] = [
  // Row 1, Column 1 - with image
  {
    id: 1,
    value: '70%',
    description: 'increase in employee engagement',
    backgroundImage: Wellness1,
    hasImage: true,
    position: 'row1-col1',
  },
  // Row 1, Column 2
  {
    id: 2,
    title: 'Significant reduction',
    description: 'in absenteeism rates',
    hasImage: false,
    position: 'row1-col2',
  },
  // Row 1, Column 3
  {
    id: 3,
    title: 'Complete User Privacy',
    description: 'your data stays yours',
    hasImage: false,
    position: 'row1-col3',
  },
  // Row 1, Column 4
  {
    id: 4,
    title: 'Exclusive Corporate Dashboard',
    description: 'to track and monitor program performance',
    hasImage: false,
    position: 'row1-col4',
  },
  // Row 2, Column 1
  {
    id: 5,
    value: '40%',
    description: 'increase in employee productivity',
    backgroundImage: Wellness2,
    hasImage: true,
  },
  // Row 2, Columns 2-4 (wide) - Top row with image
  {
    id: 6,
    title: '100% Customized Programs',
    description: 'tailored to your company culture',
    backgroundImage:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop&auto=format',
    hasImage: true,
    position: 'row2-col2-top',
  },
  // Row 2, Columns 2-4 (wide) - Bottom row
  {
    id: 7,
    title: 'ISO 9001 & 45001',
    description: 'certified wellness solutions you can trust',
    hasImage: false,
    position: 'row2-col2-bottom',
  },
];
