/**
 * Props for the Clientele component.
 * This interface currently serves as a placeholder and can be extended
 * with additional props as the component evolves.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ClienteleProps {}

export interface StyledComponentProps {
  isVisible: boolean;
}

/**
 * Props for individual heading lines with staggered animation delays
 */
export interface HeadingLineProps {
  isVisible: boolean;
  delay: number;
  alignment?: 'left' | 'center' | 'right'; // Text alignment for individual lines
}
