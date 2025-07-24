import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { HamburgerProps } from './Navigation.types';

// Main navigation container with responsive margins
// This is the outermost container for the entire navigation bar
export const NavContainer = styled.header`
  width: 100%;
  height: 10vh; /* Navigation height - 10% of viewport height for responsive scaling */
  display: flex; /* Flexbox layout for horizontal alignment of logo and navigation items */
  justify-content: space-between; /* Pushes logo to left, nav items to right */
  align-items: center; /* Vertically centers all nav elements */

  /* Internal padding for nav items - keeps existing spacing between text elements */
  padding: 0 var(--spacing-xl); /* Horizontal padding for internal spacing, vertical padding is 0 */

  /* Visual styling */
  background-color: var(
    --color-background
  ); /* Background color - change to modify nav bar color */

  /* Positioning and layering */
  position: relative; /* Allows for z-index stacking */
  z-index: var(
    --z-index-sticky
  ); /* Ensures nav stays above other content - tune for layer ordering */
  box-sizing: border-box; /* Includes padding and borders in element's total width/height */

  /* MOBILE RESPONSIVE MARGINS - Optimized for smaller screens */
  @media (max-width: 768px) {
    //margin-left: 1.5vh; /* Reduced left margin for mobile - tune this for mobile spacing */
    //margin-right: 1.5vh; /* Reduced right margin for mobile - tune this for mobile spacing */
  }
`;

// Logo container and styling
// Wraps the logo image and handles its positioning and sizing
export const Logo = styled(Link)`
  display: flex; /* Flexbox for centering logo image */
  align-items: center; /* Vertically centers logo within container */
  text-decoration: none; /* Removes underline from link */
  margin-left: 3vh; /* Left margin - responsive to viewport height, tune this value */

  img {
    height: 70px; /* Default logo height - tune this for desktop logo size */
  }

  /* Logo size adjustment for smaller screens */
  @media (max-width: 1100px) {
    img {
      height: 50px; /* Reduced logo height for tablets/smaller screens - tune this value */
    }
  }
`;

// Navigation links container with mobile menu functionality
// Handles the layout and animation of navigation links
export const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex; /* Horizontal layout for desktop navigation */
  align-items: center; /* Vertically centers navigation items */
  margin-right: 3vh; /* Right margin - responsive to viewport height, tune this value */

  /* MOBILE MENU TRANSFORMATION - Controls mobile hamburger menu behavior */
  @media (max-width: 768px) {
    position: absolute; /* Positions mobile menu absolutely relative to NavContainer */
    top: 80px; /* Distance from top - tune this to adjust mobile menu position */
    left: 0; /* Aligns mobile menu to left edge */
    width: 100%; /* Full width mobile menu */
    background-color: var(
      --color-background
    ); /* Mobile menu background - tune for mobile menu color */
    flex-direction: column; /* Vertical layout for mobile menu items */
    align-items: center; /* Centers mobile menu items horizontally */
    padding: var(--spacing-lg) 0; /* Vertical padding for mobile menu - tune for mobile spacing */

    /* MOBILE MENU ANIMATION - Controls slide-in/slide-out effect */
    transform: ${({ isOpen }) =>
      isOpen
        ? 'translateY(0)'
        : 'translateY(-150%)'}; /* Slide animation - tune -150% for slide distance */
    opacity: ${({ isOpen }) =>
      isOpen ? 1 : 0}; /* Fade animation - tune opacity values */

    /* TRANSITION TIMING - Controls animation speed */
    transition:
      transform var(--transition-normal),
      /* Transform animation speed - tune for slide speed */ opacity
        var(--transition-normal); /* Opacity animation speed - tune for fade speed */

    z-index: var(
      --z-index-dropdown
    ); /* Layer positioning - tune for mobile menu stacking order */
  }
`;

// Individual navigation link styling with hover effects
// Controls the appearance and behavior of each navigation menu item
export const NavLink = styled(Link)`
  margin: 0 var(--spacing-md); /* Horizontal spacing between nav items - tune for desktop spacing */
  color: var(--color-text); /* Default text color - tune for link color */
  text-decoration: none; /* Removes underline from links */
  font-size: var(--font-size-md); /* Text size - tune for desktop font size */
  font-weight: 500;
  transition: color var(--transition-fast); /* Color change animation speed - tune for hover transition */
  text-transform: uppercase; /* Makes text uppercase - remove this line to use normal case */
  position: relative; /* Required for absolute positioning of underline */

  /* GRADIENT HOVER EFFECT - Creates gradient text on hover */
  &:hover {
    background: var(
      --gradient-primary
    ); /* Gradient for text - tune gradient colors in variables.css */
    -webkit-background-clip: text; /* Clips gradient to text shape (WebKit browsers) */
    background-clip: text; /* Clips gradient to text shape (standard) */
    -webkit-text-fill-color: transparent; /* Makes text transparent to show gradient (WebKit) */
    text-fill-color: transparent; /* Makes text transparent to show gradient (standard) */
  }

  /* ANIMATED UNDERLINE - Creates expanding underline on hover */
  &::after {
    content: ''; /* Creates pseudo-element for underline */
    position: absolute; /* Positions underline relative to link */
    bottom: -4px; /* Distance below text - tune this for underline position */
    left: 0; /* Starts underline from left edge */
    width: 0; /* Initial width (hidden) - underline starts invisible */
    height: 2px; /* Underline thickness - tune for underline height */
    background: var(
      --gradient-primary
    ); /* Underline gradient - tune colors in variables.css */
    transition: width var(--transition-normal); /* Animation speed - tune for underline expansion speed */
  }

  /* Expands underline to full width on hover */
  &:hover::after {
    width: 100%; /* Full width underline on hover - tune percentage for partial underlines */
  }

  /* MOBILE RESPONSIVE STYLING */
  @media (max-width: 768px) {
    margin: var(--spacing-sm) 0; /* Vertical spacing for mobile menu items - tune for mobile spacing */
    font-size: var(
      --font-size-lg
    ); /* Larger text for mobile - tune for mobile font size */
  }
`;

export const LoginButton = styled.button`
  background: var(--gradient-primary);
  color: var(--color-black);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-full);
  margin-left: var(--spacing-lg);
  font-weight: 500;
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;

  /* Gradient hover effect */
  &:hover {
    background: var(--gradient-secondary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(253, 217, 20, 0.3);
  }

  /* Active/pressed effect */
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    margin: var(--spacing-md) 0 0;
  }
`;

// Hamburger menu button for mobile navigation
// Creates animated hamburger icon that transforms into an X when opened
export const HamburgerButton = styled.button<HamburgerProps>`
  display: none; /* Hidden on desktop - only shows on mobile */
  flex-direction: column; /* Stacks hamburger lines vertically */
  justify-content: space-between; /* Equal spacing between hamburger lines */
  width: 30px; /* Button width - tune for hamburger size */
  height: 21px; /* Button height - tune for hamburger size */
  background: transparent; /* Transparent background */
  border: none; /* Removes button border */
  cursor: pointer; /* Shows pointer cursor on hover */
  padding: 0; /* Removes default button padding */
  z-index: 10; /* Ensures button stays above other elements - tune for layering */

  /* Show hamburger button only on mobile */
  @media (max-width: 768px) {
    display: flex; /* Makes hamburger visible on mobile screens */
  }

  /* HAMBURGER LINES STYLING AND ANIMATION */
  div {
    width: 30px; /* Line width - tune for hamburger line length */
    height: 3px; /* Line thickness - tune for hamburger line thickness */
    background: var(
      --gradient-primary
    ); /* Line color/gradient - tune colors in variables.css */
    border-radius: 10px; /* Rounded line ends - tune for line shape */
    transition: all var(--transition-fast); /* Animation speed - tune for hamburger transformation speed */
    position: relative; /* Required for transformation animations */
    transform-origin: 1px; /* Rotation point for transformations - tune for rotation behavior */

    /* TOP LINE TRANSFORMATION - Rotates to form top of X */
    &:first-child {
      transform: ${({ isOpen }) =>
        isOpen
          ? 'rotate(45deg)'
          : 'rotate(0)'}; /* 45° rotation for X shape - tune angle */
    }

    /* MIDDLE LINE TRANSFORMATION - Fades out and slides away */
    &:nth-child(2) {
      opacity: ${({ isOpen }) =>
        isOpen ? '0' : '1'}; /* Fades middle line - tune opacity values */
      transform: ${({ isOpen }) =>
        isOpen
          ? 'translateX(20px)'
          : 'translateX(0)'}; /* Slides middle line away - tune distance */
    }

    /* BOTTOM LINE TRANSFORMATION - Rotates to form bottom of X */
    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen
          ? 'rotate(-45deg)'
          : 'rotate(0)'}; /* -45° rotation for X shape - tune angle */
    }
  }
`;
