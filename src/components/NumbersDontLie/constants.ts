import type { TableCellData } from './NumbersDontLie.types';
import Wellness1 from '../../assets/images/NumbersDontLie/Numbers-1.webp';
import Wellness2 from '../../assets/images/NumbersDontLie/Numbers-2.jpg';

/**
 * Grid data structure for the NumbersDontLie component.
 * Uses CSS Grid with named areas for precise layout control.
 *
 * Desktop Layout (4 columns, 3 rows: 1fr, 0.5fr, 0.5fr):
 * grid-template-areas:
 *   "A B C D"
 *   "E F F F"
 *   "E G G G"
 *
 * Mobile Layout (2 columns, 5 rows: 1fr, 3fr, 1fr, 1fr, 1fr):
 * grid-template-areas:
 *   "A E"
 *   "F B"
 *   "F C"
 *   "F D"
 *   "G G"
 */
export const tableData: readonly TableCellData[] = [
  // Grid Area A - Cell 1: 70% with background image
  {
    id: 1,
    value: '70%',
    description: 'increase in employee engagement',
    backgroundImage: Wellness1,
    gridArea: 'A',
  },
  // Grid Area B - Cell 2: Significant reduction
  {
    id: 2,
    title: 'Significant reduction',
    description: 'in absenteeism rates',
    gridArea: 'B',
  },
  // Grid Area C - Cell 3: Complete User Privacy
  {
    id: 3,
    title: 'Complete User Privacy',
    description: 'your data stays yours',
    gridArea: 'C',
  },
  // Grid Area D - Cell 4: Exclusive Corporate Dashboard
  {
    id: 4,
    title: 'Exclusive Corporate Dashboard',
    description: 'to track and monitor program performance',
    gridArea: 'D',
  },
  // Grid Area E - Cell 5: 40% (spans vertically on desktop)
  {
    id: 5,
    value: '40%',
    description: 'increase in employee productivity',
    gridArea: 'E',
  },
  // Grid Area F - Cell 6: 100% Customized Programs with background image
  {
    id: 6,
    title: '100% Customized Programs',
    description: 'tailored to your company culture',
    backgroundImage: Wellness2,
    gridArea: 'F',
  },
  // Grid Area G - Cell 7: ISO 9001 & 45001
  {
    id: 7,
    title: 'ISO 9001 & 45001',
    description: 'certified wellness solutions you can trust',
    gridArea: 'G',
  },
] as const;
