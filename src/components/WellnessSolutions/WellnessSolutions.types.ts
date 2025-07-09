/**
 * Props for the WellnessSolutions component.
 * This interface currently serves as a placeholder and can be extended
 * with additional props as the component evolves.
 */
export interface WellnessSolutionsProps {}

/**
 * Defines the structure for a single wellness solution object.
 * Each solution has a unique ID, a title, a description, an image URL,
 * background gradient for hover, and border gradient for the bottom border.
 */
export interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  backgroundGradient: string; // CSS variable for background hover gradient (top to bottom)
  borderGradient: string; // CSS variable for border-bottom gradient (left to right)
}
