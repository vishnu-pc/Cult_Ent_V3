import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { HamburgerProps } from './Navigation.types';

// Main navigation container with standard responsive breakpoints
// This is the outermost container for the entire navigation bar
export const NavContainer = styled.header`
  width: 100vw;
  height: var(--nav-height-desktop); /* Standard desktop navigation height */
  display: flex; /* Flexbox layout for horizontal alignment of logo and navigation items */
  justify-content: space-between; /* Pushes logo to left, nav items to right */
  align-items: center; /* Vertically centers all nav elements */

  /* Standard spacing using project CSS variables */
  padding: 0 var(--section-padding-horizontal); //Horizontal padding matching section standard

  /* Visual styling */
  background-color: var(--color-background); /* Background color */

  /* Positioning and layering */
  position: relative; /* Allows for z-index stacking */
  z-index: var(--z-index-sticky); /* Ensures nav stays above other content */
  box-sizing: border-box; /* Includes padding and borders in element's total width/height */

  /* STANDARD RESPONSIVE BREAKPOINTS - Touch-optimized heights */
  @media (max-width: 1024px) {
    /* --breakpoint-lg - tablets */
    height: var(--nav-height-tablet); /* Larger height for tablet touch */
  }

  @media (max-width: 768px) {
    /* --breakpoint-md - mobile */
    height: var(--nav-height-mobile); /* Optimized mobile touch height */
    padding: 0 var(--container-padding-mobile); /* Matches standardized mobile padding */
  }

  @media (max-width: 640px) {
    /* --breakpoint-sm - small mobile */
    height: var(--nav-height-small-mobile); /* Compact but touch-friendly */
    padding: 0 var(--container-padding-small); /* Matches standardized small mobile padding */
  }
`;

// Logo container and styling with standard responsive breakpoints
// Wraps the logo image and handles its positioning and sizing
export const Logo = styled(Link)`
  display: flex; /* Flexbox for centering logo image */
  align-items: center; /* Vertically centers logo within container */
  text-decoration: none; /* Removes underline from link */
  margin-left: calc(-1 * var(--spacing-md));
  /* border: 1px solid red; */

  img {
    height: var(--nav-logo-desktop); /* Standard desktop logo height */
  }

  /* STANDARD RESPONSIVE BREAKPOINTS - Touch-optimized logo sizing */
  @media (max-width: 1024px) {
    /* --breakpoint-lg - tablets */
    img {
      height: var(--nav-logo-tablet); /* Proportional tablet logo height */
    }
  }

  @media (max-width: 768px) {
    /* --breakpoint-md - mobile */
    img {
      height: var(--nav-logo-mobile); /* Optimized mobile logo height */
    }
  }

  @media (max-width: 640px) {
    /* --breakpoint-sm - small mobile */
    img {
      height: var(--nav-logo-small-mobile); /* Minimum touch-friendly size */
    }
  }
`;

// Navigation links container with standard responsive mobile menu
// Handles the layout and animation of navigation links
export const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex; /* Horizontal layout for desktop navigation */
  align-items: center; /* Vertically centers navigation items */

  /* MOBILE MENU TRANSFORMATION - Standard responsive implementation */
  @media (max-width: 768px) {
    /* --breakpoint-md */
    position: absolute; /* Positions mobile menu absolutely relative to NavContainer */
    top: var(--nav-height-mobile); /* Aligns with mobile nav height */
    left: 0; /* Aligns mobile menu to left edge */
    width: 100%; /* Full width mobile menu */
    background-color: var(--color-background); /* Mobile menu background */
    flex-direction: column; /* Vertical layout for mobile menu items */
    align-items: center; /* Centers mobile menu items horizontally */
    padding: var(--spacing-lg) 0; /* Standard vertical padding */

    /* MOBILE MENU ANIMATION - Standard slide and fade implementation */
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0)' : 'translateY(-150%)'}; /* Slide animation */
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)}; /* Fade animation */

    /* TRANSITION TIMING - Using project CSS variables */
    transition:
      transform var(--transition-normal),
      opacity var(--transition-normal);

    z-index: var(--z-index-dropdown); /* Standard z-index layering */
  }

  @media (max-width: 640px) {
    /* --breakpoint-sm */
    top: var(
      --nav-height-small-mobile
    ); /* Adjusted for small mobile nav height */
  }
`;

// Individual navigation link styling with standard responsive behavior
// Controls the appearance and behavior of each navigation menu item
export const NavLink = styled(Link)`
  margin: 0 var(--spacing-md); /* Standard horizontal spacing between nav items */
  color: var(--color-text); /* Default text color */
  text-decoration: none; /* Removes underline from links */
  font-size: var(--font-size-md); /* Standard text size */
  font-weight: 500;
  transition: color var(--transition-fast); /* Color change animation */
  text-transform: uppercase; /* Uppercase text for brand consistency */
  position: relative; /* Required for absolute positioning of underline */

  /* GRADIENT HOVER EFFECT - Brand-consistent gradient text */
  &:hover {
    background: var(--gradient-primary); /* Primary brand gradient */
    -webkit-background-clip: text; /* Clips gradient to text shape (WebKit) */
    background-clip: text; /* Clips gradient to text shape (standard) */
    -webkit-text-fill-color: transparent; /* Makes text transparent to show gradient */
    text-fill-color: transparent; /* Standard property */
  }

  /* ANIMATED UNDERLINE - Expanding underline on hover */
  &::after {
    content: ''; /* Creates pseudo-element for underline */
    position: absolute; /* Positions underline relative to link */
    bottom: -0.25rem; /* Distance below text using rem */
    left: 0; /* Starts underline from left edge */
    width: 0; /* Initial width (hidden) */
    height: 0.125rem; /* Underline thickness using rem */
    background: var(--gradient-primary); /* Primary brand gradient */
    transition: width var(--transition-normal); /* Standard animation speed */
  }

  /* Expands underline to full width on hover */
  &:hover::after {
    width: 100%; /* Full width underline on hover */
  }

  /* STANDARD RESPONSIVE BREAKPOINTS */
  @media (max-width: 768px) {
    /* --breakpoint-md */
    margin: var(--spacing-sm) 0; /* Vertical spacing for mobile menu items */
    font-size: var(--font-size-lg); /* Larger text for mobile touchability */
  }

  @media (max-width: 640px) {
    /* --breakpoint-sm */
    font-size: var(--font-size-md); /* Standard size on small screens */
    margin: var(--spacing-xs) 0; /* Tighter spacing on small screens */
  }
`;

export const LoginButton = styled.button`
  background: var(--gradient-primary);
  color: var(--color-black);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-full);
  margin-left: var(--spacing-lg);
  margin-right: var(--spacing-sm);
  font-weight: 500;
  transition: all var(--transition-fast);
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-sm);

  /* Gradient hover effect */
  &:hover {
    background: var(--gradient-secondary);
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.75rem rgba(253, 217, 20, 0.3);
  }

  /* Active/pressed effect */
  &:active {
    transform: translateY(0);
  }

  /* STANDARD RESPONSIVE BREAKPOINTS */
  @media (max-width: 768px) {
    /* --breakpoint-md */
    margin: var(--spacing-md) 0 0;
    padding: var(--spacing-md) var(--spacing-xl);
    font-size: var(--font-size-md);
    min-height: 2.75rem; /* 44px minimum touch target */
  }

  @media (max-width: 640px) {
    /* --breakpoint-sm */
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: var(--font-size-sm);
    min-height: 2.5rem; /* 40px touch target for small screens */
  }
`;

// Hamburger menu button with standard responsive behavior
// Creates animated hamburger icon that transforms into an X when opened
export const HamburgerButton = styled.button<HamburgerProps>`
  display: none; /* Hidden on desktop - only shows on mobile */
  flex-direction: column; /* Stacks hamburger lines vertically */
  justify-content: space-between; /* Equal spacing between hamburger lines */
  width: 2.5rem; /* 40px - larger touch target */
  height: 1.75rem; /* 28px - proportional to width */
  background: transparent; /* Transparent background */
  border: none; /* Removes button border */
  cursor: pointer; /* Shows pointer cursor on hover */
  padding: 0.375rem; /* 6px padding for larger touch area */
  z-index: var(--z-index-modal); /* Standard z-index for overlays */

  /* Ensure minimum touch target size (44px) */
  min-width: 2.75rem; /* 44px minimum */
  min-height: 2.75rem; /* 44px minimum */

  /* STANDARD RESPONSIVE BREAKPOINTS */
  @media (max-width: 768px) {
    /* --breakpoint-md */
    display: flex; /* Makes hamburger visible on mobile screens */
  }

  /* HAMBURGER LINES STYLING AND ANIMATION */
  div {
    width: 1.75rem; /* 28px - fits within button padding */
    height: 0.25rem; /* 4px - slightly thicker for better visibility */
    background: var(--gradient-primary); /* Primary brand gradient */
    border-radius: 0.125rem; /* 2px - proportional to thickness */
    transition: all var(--transition-fast); /* Standard animation speed */
    position: relative; /* Required for transformation animations */
    transform-origin: 0.125rem; /* 2px - proportional to thickness */

    /* TOP LINE TRANSFORMATION - Rotates to form top of X */
    &:first-child {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(45deg)' : 'rotate(0)'}; /* 45° rotation for X shape */
    }

    /* MIDDLE LINE TRANSFORMATION - Fades out and slides away */
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')}; /* Fades middle line */
      transform: ${({ isOpen }) =>
        isOpen
          ? 'translateX(1.25rem)'
          : 'translateX(0)'}; /* 20px converted to rem */
    }

    /* BOTTOM LINE TRANSFORMATION - Rotates to form bottom of X */
    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen
          ? 'rotate(-45deg)'
          : 'rotate(0)'}; /* -45° rotation for X shape */
    }
  }
`;
