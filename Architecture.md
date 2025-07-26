# CULT Corporate Wellness Platform - Architecture Documentation

## Project Overview

The CULT Corporate Wellness Platform is a modern, responsive single-page application (SPA) built
with React and TypeScript for CULT's corporate wellness solutions. This platform showcases CULT's
services, impact metrics, and client testimonials through an interactive and visually appealing
interface.

### Key Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Interactive UI Elements**: Advanced animations, transitions, and dynamic components
- **Accessibility Compliance**: WCAG 2.1 AA compliant implementation
- **Performance Optimization**: Optimized assets, code splitting, and lazy loading
- **Form Validation**: Client-side validation with Salesforce integration
- **Modern Architecture**: Component-based architecture with TypeScript type safety

## Technology Stack

### Core Technologies

- **Frontend Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Styled Components 6.1.19
- **Routing**: React Router DOM 7.6.2
- **Animations**: Framer Motion 12.18.1
- **Type Safety**: TypeScript 5.8.3

### Development Tools

- **Linting**: ESLint 9.25.0 with TypeScript ESLint
- **Code Formatting**: Prettier 3.4.2 (mandatory)
- **CSS Processing**: PostCSS 8.5.6 with Autoprefixer
- **Utility Libraries**: clsx 2.1.1, tailwind-merge 3.3.1
- **Package Manager**: npm
- **UI Components**: Potential integration with Shadcn/UI and Radix UI

### Additional Integrations

- **API Integration**: Salesforce (ready for production)
- **Form Handling**: Custom implementation with validation
- **Asset Management**: Vite-based asset optimization

## Project Architecture

### Directory Structure

```
Cult_Ent_V3/
├── public/                          # Static assets
│   └── vite.svg                     # Vite logo
├── src/                             # Source code
│   ├── assets/                      # Static assets and media
│   │   ├── images/                  # Image assets organized by section
│   │   │   ├── Banner/              # Landing banner images
│   │   │   ├── ContactUs/           # Contact section images
│   │   │   ├── Footer/              # Footer assets
│   │   │   ├── LastLogo/            # Logo animations
│   │   │   ├── NumbersDon'tLie/     # Statistics section images
│   │   │   ├── Our_Clientele/       # Client logos and images
│   │   │   ├── OurImpact/           # Impact metrics visuals
│   │   │   ├── Testimonials/        # Testimonial assets
│   │   │   ├── Wellness/            # Wellness solution images
│   │   │   └── WhyChooseCult/       # Feature highlight images
│   │   ├── icons/                   # Icon assets
│   │   │   ├── Corporate_Logos.png  # Corporate branding
│   │   │   └── Cult_Navbar_Logo.png # Navigation logo
│   │   ├── Cult_Blank_Logo.svg      # Brand logo variants
│   │   ├── Cult_Colour_Logo.svg     # Colored brand logo
│   │   ├── Encircle_Ring_Blank.svg  # Ring graphics
│   │   ├── Encircle_Ring_Colour.svg # Colored ring graphics
│   │   ├── Gradient_Pack.svg        # Gradient design elements
│   │   └── react.svg                # React logo
│   ├── components/                  # React components
│   │   ├── BeBetterSection/         # "Be Better" content section
│   │   ├── Clientele/               # Client showcase with carousel
│   │   ├── ContactUs/               # Contact form with Salesforce integration
│   │   ├── DynamicLogo/             # Animated SVG logo component
│   │   ├── ExpandableTiles/         # Interactive expandable tiles
│   │   ├── Footer/                  # Site footer
│   │   ├── Hashtag/                 # Social media hashtag component
│   │   ├── LandingBanner/           # Hero section with animations
│   │   ├── Layout/                  # Main layout wrapper
│   │   ├── LogoLoader/              # Loading animation component
│   │   ├── Navigation/              # Responsive navigation bar
│   │   ├── NumbersDontLie/          # Statistics and metrics display
│   │   ├── OurImpact/               # Impact metrics visualization
│   │   ├── ProvenImpact/            # Impact proof section
│   │   ├── Testimonials/            # Client testimonials carousel
│   │   ├── ui/                      # Reusable UI components
│   │   │   └── GradientDivider/     # Gradient divider component
│   │   ├── WellnessSolutions/       # Interactive wellness solutions
│   │   └── WhyChooseCult/           # Feature highlights
│   ├── context/                     # React context providers
│   ├── hooks/                       # Custom React hooks
│   ├── lib/                         # Utility libraries
│   ├── pages/                       # Page components
│   │   └── Home.tsx                 # Main home page
│   ├── services/                    # API services
│   │   └── salesforce.ts            # Salesforce integration service
│   ├── styles/                      # Global styles and themes
│   │   ├── global.css               # Global CSS styles
│   │   └── variables.css            # CSS custom properties
│   ├── types/                       # TypeScript type definitions
│   ├── utils/                       # Utility functions
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Base CSS imports
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.app.json                # App-specific TypeScript config
├── tsconfig.node.json               # Node-specific TypeScript config
├── vite.config.ts                   # Vite configuration
└── eslint.config.js                 # ESLint configuration
```

## Component Architecture

### Component Organization Pattern

Components follow a tiered structure based on complexity:

#### **Tier 1: Simple Components (1 file)**

For basic components with minimal logic:

```
ComponentName/
└── ComponentName.tsx           # Single file with inline styled-components
```

**Examples**: Footer, Hashtag, Layout

#### **Tier 2: Medium Components (3-4 files)**

For components with moderate complexity:

```
ComponentName/
├── ComponentName.tsx           # Main component
├── ComponentName.styles.ts     # Styled components
├── ComponentName.types.ts      # TypeScript interfaces
└── index.ts                   # Barrel export (optional)
```

**Examples**: Navigation, LandingBanner, ContactUs, DynamicLogo

#### **Tier 3: Complex Components (5 files)**

For components with significant logic, data, and styling:

```
ComponentName/
├── index.ts                    # Barrel export
├── ComponentName.tsx           # Main component implementation
├── ComponentName.styles.ts     # Styled components
├── ComponentName.types.ts      # TypeScript interfaces
└── constants.ts               # Component-specific constants
```

**Examples**: WellnessSolutions, NumbersDontLie, WhyChooseCult, OurImpact, ProvenImpact

### Key Architectural Principles

1. **Tiered Component Structure**: Components are organized by complexity level
2. **Separation of Concerns**: Each component separates logic, styling, and types appropriately
3. **Barrel Exports**: Clean imports using index.ts files for medium and complex components
4. **Type Safety**: Comprehensive TypeScript interfaces for all components
5. **Styled Components**: CSS-in-JS with theme integration
6. **Responsive Design**: Mobile-first approach with breakpoint-based styling
7. **Accessibility First**: WCAG 2.1 AA compliance built into all components
8. **DRY Principle**: Don't Repeat Yourself - reusable, maintainable code
9. **Early Returns**: Improved code readability through early return patterns
10. **Const Functions**: Use const arrow functions with proper TypeScript typing

## Core Components

### 1. Navigation (`src/components/Navigation/`)

- **Purpose**: Responsive navigation bar with standard breakpoint implementation
- **Features**: Logo display, mobile hamburger menu, gradient hover effects, smooth transitions
- **Key Props**: None (self-contained)
- **Styling**: Styled components with standard responsive breakpoints and rem-based sizing
- **Responsive Behavior**:
  - **Desktop (>1024px)**: Full horizontal navigation, nav height 4.5rem, logo 4.25rem
  - **Tablet (768px-1024px)**: Increased nav height 5rem for touch, logo 3.5rem
  - **Mobile (≤768px)**: Hamburger menu, optimized nav height 5.5rem, logo 3rem
  - **Small Mobile (≤640px)**: Compact nav height 5rem, minimum logo 2.75rem (44px touch target)
- **Technical Implementation**: Uses CSS variables for navigation heights and logo sizing,
  touch-optimized dimensions, standard z-index values

### 2. LandingBanner (`src/components/LandingBanner/`)

- **Purpose**: Hero section with animated elements
- **Features**: Animated text, background effects, call-to-action
- **Key Props**: LandingBannerProps (extensible)
- **Styling**: Complex animations with Framer Motion

### 3. DynamicLogo (`src/components/DynamicLogo/`)

- **Purpose**: Interactive SVG logo with animations
- **Features**: 270-degree arc animation, hover effects, scroll-triggered highlighting
- **Key Props**: `className`, `forceHighlight`
- **Styling**: SVG-based with gradient animations

### 4. WellnessSolutions (`src/components/WellnessSolutions/`)

- **Purpose**: Interactive showcase of wellness solutions
- **Features**: Image gallery, hover effects, animated descriptions
- **Key Props**: WellnessSolutionsProps (extensible)
- **Data**: 5 wellness solutions with images and descriptions

### 5. ContactUs (`src/components/ContactUs/`)

- **Purpose**: Contact form with Salesforce integration
- **Features**: Form validation, reCAPTCHA, animated elements
- **Key Props**: `onSubmit` callback
- **Integration**: Salesforce API ready

### 6. NumbersDontLie (`src/components/NumbersDontLie/`)

- **Purpose**: Statistics and impact metrics display
- **Features**: Grid layout, animated counters, visual data representation
- **Key Props**: `tiles` array for data
- **Layout**: Complex grid with wide column support

### 7. WhyChooseCult (`src/components/WhyChooseCult/`)

- **Purpose**: Feature highlights with expandable content
- **Features**: Expandable tiles, background images, hover effects
- **Key Props**: WhyChooseCultProps (extensible)
- **Styling**: Background image integration

### 8. Clientele (`src/components/Clientele/`)

- **Purpose**: Client showcase with logo carousel
- **Features**: Infinite scrolling logos, background images, animations
- **Key Props**: Clientele props (extensible)
- **Animation**: Scroll-triggered text animations

### 9. Testimonials (`src/components/Testimonials/`)

- **Purpose**: Client testimonials with positioning
- **Features**: Positioned testimonials, company logos, animations
- **Key Props**: `testimonials` array
- **Layout**: Absolute positioning with responsive adjustments

### 10. OurImpact (`src/components/OurImpact/`)

- **Purpose**: Impact metrics visualization
- **Features**: Visual data representation, animated elements
- **Key Props**: OurImpactProps (extensible)
- **Styling**: Data visualization components

## UI Components

### GradientDivider (`src/components/ui/GradientDivider/`)

- **Purpose**: Reusable gradient divider component
- **Features**: Multiple gradient presets, animated variants, customizable height
- **Key Props**: `preset`, `animated`, `height`, `leftColor`, `rightColor`
- **Variants**: BRAND_PRIMARY, BRAND_SECONDARY, custom colors

## Styling System

### Unified Spacing System

The project implements a comprehensive spacing system optimized for 13" laptop displays with
automatic responsive scaling.

#### Spacing Scale (`src/styles/variables.css`)

```css
/* Base Spacing Scale - Optimized for 13" laptop displays */
--spacing-xxs: 0rem; /* 0px - No spacing */
--spacing-xs: 0.25rem; /* 4px - Micro spacing */
--spacing-sm: 0.5rem; /* 8px - Small spacing */
--spacing-md: 1rem; /* 16px - Standard spacing */
--spacing-lg: 1.5rem; /* 24px - Medium spacing */
--spacing-xl: 2rem; /* 32px - Large spacing */
--spacing-2xl: 3rem; /* 48px - Extra large spacing */
--spacing-3xl: 4rem; /* 64px - Section spacing */
--spacing-4xl: 6rem; /* 96px - Large section spacing */
--spacing-5xl: 8rem; /* 128px - Hero section spacing */
--spacing-6xl: 12rem; /* 192px - Major section spacing */
```

#### Responsive Scaling Multipliers

```css
/* Automatic scaling based on screen size */
--spacing-scale-desktop: 1; /* 13" laptop baseline */
--spacing-scale-large-desktop: 1.25; /* 15"+ displays (25% larger) */
--spacing-scale-tablet: 0.875; /* Tablets (12.5% smaller) */
--spacing-scale-mobile: 0.75; /* Mobile (25% smaller) */
--spacing-scale-small-mobile: 0.625; /* Small mobile (37.5% smaller) */
```

#### Section Spacing Standards

```css
/* Standardized section spacing variables */
--section-padding-vertical: var(--spacing-4xl); /* 96px base */
--section-padding-horizontal: var(--spacing-2xl); /* 48px base */
--section-margin-vertical: var(--spacing-3xl); /* 64px base */
```

#### Implementation Examples

```css
/* Regular Section Implementation */
section {
  padding-top: var(--section-padding-vertical);
  padding-bottom: var(--section-padding-vertical);
  padding-left: var(--section-padding-horizontal);
  padding-right: var(--section-padding-horizontal);
  margin-top: var(--section-margin-vertical);
  margin-bottom: var(--section-margin-vertical);
}

/* Hero Section Implementation */
section.hero-section {
  padding-top: 0;     /* Full viewport hero */
  padding-bottom: 0;  /* Full viewport hero */
  padding-left: var(--section-padding-horizontal);
  padding-right: var(--section-padding-horizontal);
  margin: 0;          /* No margins */
  height: 100vh;      /* Full viewport height */
  min-height: 100vh;  /* Ensure full height */
}

/* Component Spacing */
.component {
  margin: var(--spacing-xl);     /* 32px */
  padding: var(--spacing-lg);    /* 24px */
  gap: var(--spacing-md);        /* 16px */
}

/* Utility Classes Usage */
<div className="mt-xl px-2xl py-4xl">Content</div>
```

### CSS Custom Properties (`src/styles/variables.css`)

#### Brand Colors

```css
--color-background: #000000; /* Pure black background */
--color-text: #ffffff; /* White text */
--color-yellow: #fdd914; /* Brand yellow */
--color-pink: #ed3a79; /* Brand pink */
--color-blue: #00b4ff; /* Brand blue */
```

#### Gradient System

```css
--gradient-primary: linear-gradient(45deg, #fdd914, #ed3a79);
--gradient-secondary: linear-gradient(45deg, #ed3a79, #00b4ff);
--gradient-tertiary: linear-gradient(45deg, #00b4ff, #fdd914);
--gradient-full: linear-gradient(93deg, #fdd914 -4.03%, #40b9eb 47.54%, #ff3278 93.16%);
```

#### Typography

```css
--font-primary: 'Poppins', sans-serif;
--font-secondary: 'Inter', sans-serif;
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-md: 1rem; /* 16px */
/* ... additional font sizes */
```

#### Spacing System

```css
--spacing-xs: 0.25rem; /* 4px */
--spacing-sm: 0.5rem; /* 8px */
--spacing-md: 1rem; /* 16px */
--spacing-lg: 1.5rem; /* 24px */
--spacing-xl: 2rem; /* 32px */
--spacing-2xl: 3rem; /* 48px */
--spacing-3xl: 4rem; /* 64px */
```

### Global Styles (`src/styles/global.css`)

- **Reset**: CSS reset with box-sizing border-box
- **Typography**: Responsive font sizing with breakpoints
- **Accessibility**: Screen reader support and reduced motion preferences
- **Utility Classes**: Common layout and positioning utilities

## Data Management

### Constants Pattern

Each component with data uses a `constants.ts` file:

```typescript
// Example: WellnessSolutions constants
export const solutions: Solution[] = [
  {
    id: 1,
    title: 'Premium Fitness Access',
    description: 'Unlock 600+ elite fitness centers...',
    imageUrl: Wellness1,
    hoverColor: 'var(--color-yellow)',
  },
  // ... more solutions
];
```

### Type Definitions

Comprehensive TypeScript interfaces for all data structures:

```typescript
// Example: Solution interface
export interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  hoverColor: string;
}
```

## API Integration

### Salesforce Integration (`src/services/salesforce.ts`)

#### Service Functions

- `submitLeadToSalesforce(data: LeadData)`: Production API submission
- `simulateSalesforceSubmission(data: LeadData)`: Development simulation

#### Data Structure

```typescript
interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  employeeCount: string;
  phone?: string;
  message?: string;
}
```

#### Integration Points

- ContactUs component form submission
- Lead capture and validation
- Error handling and user feedback

## Animation System

### Framer Motion Integration

- **Component Animations**: Entry/exit animations for components
- **Hover Effects**: Interactive hover states
- **Scroll Animations**: Scroll-triggered animations
- **Page Transitions**: Smooth page transitions

### Animation Patterns

```typescript
// Example: Fade in animation
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

## Responsive Design

### Standard Breakpoint System

The project uses a standardized breakpoint system defined in `src/styles/variables.css`:

```css
--breakpoint-sm: 640px; /* Small mobile devices */
--breakpoint-md: 768px; /* Standard mobile/tablet transition */
--breakpoint-lg: 1024px; /* Tablet/desktop transition */
--breakpoint-xl: 1280px; /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large desktop */
```

### Responsive Implementation Standards

#### **Sizing Units Strategy**

- **Typography**: `rem` units for font sizes (user preference scaling)
- **Spacing**: `rem` units for margins, padding, gaps (consistent scaling)
- **Components**: `rem` or `%` for width/height (flexible layouts)
- **Viewport Sections**: `vh`/`vw` for full-screen elements only
- **Precise Elements**: `px` for borders, shadows, fine details

#### **Mobile-First Development**

- Base styles target mobile devices (320px+)
- Progressive enhancement for larger screens using min-width queries
- Touch-friendly interactions (minimum 44px touch targets)
- Responsive typography scaling with CSS variables

#### **Navigation Responsive Behavior**

- **Desktop (>1024px)**: Full horizontal navigation with large logo
- **Tablet (768px-1024px)**: Reduced logo size, maintained horizontal layout
- **Mobile (≤768px)**: Hamburger menu with slide-down animation
- **Small Mobile (≤640px)**: Compact spacing and sizing

### Responsive Component Examples

#### **Navigation Component Scaling**

```css
/* Desktop */
height: var(--nav-height-desktop); /* 4.5rem / 72px */
img {
  height: var(--nav-logo-desktop); /* 4.25rem / 68px */
}

/* Tablet */
@media (max-width: 1024px) {
  height: var(--nav-height-tablet); /* 5rem / 80px */
  img {
    height: var(--nav-logo-tablet); /* 3.5rem / 56px */
  }
}

/* Mobile */
@media (max-width: 768px) {
  height: var(--nav-height-mobile); /* 5.5rem / 88px */
  img {
    height: var(--nav-logo-mobile); /* 3rem / 48px */
  }
}

/* Small Mobile */
@media (max-width: 640px) {
  height: var(--nav-height-small-mobile); /* 5rem / 80px */
  img {
    height: var(--nav-logo-small-mobile); /* 2.75rem / 44px */
  }
}
```

#### **Standard Spacing Pattern**

```css
/* Using CSS variables for consistency */
padding: var(--spacing-xl); /* Desktop */
@media (max-width: 768px) {
  padding: var(--spacing-lg); /* Mobile */
}
@media (max-width: 640px) {
  padding: var(--spacing-md); /* Small mobile */
}
```

## Performance Optimization

### Build Configuration

- **Vite**: Fast build tool with HMR
- **Code Splitting**: Automatic code splitting
- **Asset Optimization**: Image optimization and lazy loading
- **Bundle Analysis**: Build size optimization

### Runtime Performance

- **React 19**: Latest React features and optimizations
- **Styled Components**: CSS-in-JS with theme caching
- **Framer Motion**: Optimized animations
- **Intersection Observer**: Scroll-based animations

## Development Workflow

### Scripts

```json
{
  "dev": "vite", // Development server
  "build": "tsc -b && vite build", // Production build
  "lint": "eslint .", // Code linting
  "preview": "vite preview" // Preview production build
}
```

### Code Quality

- **ESLint**: Code linting with TypeScript rules
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (mandatory - configured)
- **Git Hooks**: Pre-commit validation (recommended)

## Deployment

### Build Process

1. TypeScript compilation check
2. Vite production build
3. Asset optimization
4. Bundle generation in `dist/` directory

### Environment Configuration

- Development: Local development with HMR
- Production: Optimized build with minification
- Preview: Production preview mode

### Hosting Requirements

- Static site hosting (Netlify, Vercel, etc.)
- HTTPS support
- SPA routing configuration
- Environment variables for API endpoints

## Browser Compatibility

### Supported Browsers

- **Chrome**: Latest versions
- **Firefox**: Latest versions
- **Safari**: Latest versions
- **Edge**: Latest versions

### Polyfills

- Modern JavaScript features
- CSS Grid and Flexbox
- Intersection Observer API

## Accessibility

### WCAG 2.1 AA Compliance

- **Keyboard Navigation**: Full keyboard accessibility (Tab, Enter, Space, Arrow keys)
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: Adequate contrast ratios
- **Reduced Motion**: Respects user preferences
- **Interactive Elements**: Both click and keyboard event handlers

### Implementation

- Semantic HTML structure
- ARIA attributes where needed
- Focus management
- Alternative text for images

## Security Considerations

### Client-Side Security

- **Input Validation**: Form validation and sanitization
- **XSS Prevention**: Proper data handling
- **HTTPS**: Secure communication
- **Environment Variables**: Secure API key management

### API Security

- **Authentication**: Salesforce API authentication
- **Rate Limiting**: API request throttling
- **Data Validation**: Server-side validation

## Testing Strategy

### Testing Framework (Recommended)

- **Unit Tests**: Jest with React Testing Library
- **Component Tests**: Isolated component testing
- **Integration Tests**: API integration testing
- **E2E Tests**: Cypress or Playwright

### Test Coverage Areas

- Component rendering
- User interactions
- Form validation
- API integration
- Responsive behavior

## Maintenance and Updates

### Regular Maintenance

- **Dependency Updates**: Regular package updates
- **Security Patches**: Timely security updates
- **Performance Monitoring**: Build size and runtime performance
- **Browser Testing**: Cross-browser compatibility

### Content Updates

- **Images**: Asset replacement and optimization
- **Copy**: Text content updates
- **Data**: Statistics and metrics updates
- **Features**: New component additions

## Future Enhancements

### Planned Features

1. **Multi-language Support**: i18n implementation
2. **Dark/Light Theme**: Theme switching capability
3. **Enhanced Analytics**: Google Analytics integration
4. **User Authentication**: Client portal functionality
5. **CMS Integration**: Content management system
6. **Progressive Web App**: PWA features

### Technical Improvements

1. **Performance**: Further optimization
2. **Testing**: Comprehensive test suite
3. **Documentation**: Enhanced code documentation
4. **CI/CD**: Automated deployment pipeline
5. **Monitoring**: Error tracking and analytics

## Project Metadata

- **Project Name**: CULT Corporate Wellness Platform
- **Version**: 0.0.0
- **Technology Stack**: React 19.1.0 + TypeScript 5.8.3 + Vite 6.3.5
- **Created**: 2025-01-27
- **Last Updated**: 2025-01-27
- **License**: Proprietary and confidential
- **Repository**: Private repository

## Contact and Support

For technical questions or support regarding this project architecture, please contact the
development team or refer to the project documentation in the repository.

---

_This architecture documentation is maintained alongside the codebase and should be updated whenever
significant structural or functional changes are made to the project._
