/**
 * Props for the WellnessSolutions component.
 * This interface currently serves as a placeholder and can be extended
 * with additional props as the component evolves.
 */
export interface WellnessSolutionsProps {}

/**
 * Defines the structure for a single wellness solution object.
 * Each solution has a unique ID, a title, a description, an image URL,
 * and a hover color for styling purposes.
 */
export interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  hoverColor: string;
}
