/**
 * Props for the NumbersDontLie component.
 * Accepts an optional array of table cell data to override the default data.
 */
export interface NumbersDontLieProps {
  /** Optional array of table cell data. If not provided, uses default tableData from constants */
  tableData?: readonly TableCellData[];
}

/**
 * Data structure for grid cells in the NumbersDontLie component.
 * Supports both text-only cells and cells with background images.
 * Designed for CSS Grid layout with named grid areas.
 */
export interface TableCellData {
  /** Unique identifier for the cell */
  id: number;
  /** Large percentage value (e.g., "70%", "40%") - displayed prominently */
  value?: string;
  /** Bold title text for the cell */
  title?: string;
  /** Description text - always present */
  description: string;
  /** Optional background image URL for overlay effect */
  backgroundImage?: string;
  /** Optional CSS image-set string for responsive backgrounds */
  backgroundImageSet?: string;
  /** Grid area assignment for CSS Grid layout */
  gridArea: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
}
