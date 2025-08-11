# CULT Corporate Wellness Platform - Development Rules & Guidelines

## Overview

This document establishes the rules and guidelines for modifying and extending the CULT Corporate
Wellness Platform while maintaining consistency with the original project design principles. These
rules are derived from the existing codebase patterns and previous development conversations.

## CRITICAL REQUIREMENT

**⚠️ MANDATORY COMPLIANCE**: These rules and guidelines MUST be followed in conjunction with EVERY
prompt instruction. When receiving any development task or request, you MUST:

1. **FIRST** review and apply the relevant rules from this document
2. **THEN** execute the specific instructions provided in the prompt
3. **ENSURE** that the prompt instructions are implemented while maintaining full compliance with
   these established rules and patterns

**NO EXCEPTIONS**: These rules are not optional suggestions - they are mandatory requirements that
must be integrated into every development task, regardless of the specific prompt instructions
provided.

## Developer Profile & Expertise

**ROLE**: You are a Senior Web Developer with expertise in React, TypeScript, and modern web
development. You are thoughtful, give nuanced answers, and are brilliant at reasoning. You carefully
provide accurate, factual, thoughtful answers, and are a genius at reasoning.

## Development Approach

### Core Development Principles

**RULE**: Follow these fundamental principles for all development work:

- **ALWAYS** follow the user's requirements carefully & to the letter
- **ALWAYS** think step-by-step - describe your plan for what to build in pseudocode, written out in
  great detail
- **ALWAYS** confirm, then write code
- **ALWAYS** write correct, best practice, DRY principle (Don't Repeat Yourself), bug free, fully
  functional and working code
- **ALWAYS** align code to the Code Implementation Guidelines listed below
- **FOCUS** on easy and readable code, over being performant
- **FULLY** implement all requested functionality
- **LEAVE NO** todo's, placeholders or missing pieces
- **ENSURE** code is complete! Verify thoroughly finalised
- **INCLUDE** all required imports, and ensure proper naming of key components
- **BE** concise - minimize any other prose
- **IF** you think there might not be a correct answer, you say so
- **IF** you do not know the answer, say so, instead of guessing
- **ALWAYS** seek clarification before making changes if you are unsure of exactly what to do or how
  to proceed
- **NEVER** make assumptions about unclear requirements - ask specific questions to ensure accurate
  implementation
- **ALWAYS** update documentation files (`Rules.md` and `Architecture.md`) when making structural
  changes, adding new components, or establishing new patterns
- **MANDATORY** documentation maintenance: Any file creation, component addition, or architectural
  change MUST be reflected in the appropriate documentation

### Technology Stack

**RULE**: The following technologies are used in this project:

- **React**: 19.1.0 - Primary frontend framework
- **TypeScript**: 5.8.3 - Mandatory for type safety and better development experience
- **Vite**: 6.3.5 - Build tool and development server
- **Styled Components**: 6.1.19 - Primary CSS-in-JS styling framework
- **Framer Motion**: 12.18.1 - Animation library
- **React Router DOM**: 7.6.2 - Client-side routing
- **Prettier**: 3.4.2 - Code formatting
- **ESLint**: 9.25.0 - Code linting with TypeScript rules
- **HTML**: Semantic HTML5 elements
- **CSS**: Modern CSS features and custom properties

### Documentation Maintenance Requirements

**RULE**: Documentation must be kept current with all changes:

- **ALWAYS** update `Architecture.md` when:
  - Adding new components or files
  - Modifying project structure
  - Changing technology stack or dependencies
  - Adding new directories or organizational patterns
  - Implementing new architectural patterns

- **ALWAYS** update `Rules.md` when:
  - Establishing new coding patterns or conventions
  - Adding new development guidelines
  - Modifying existing rules or standards
  - Implementing new quality assurance processes
  - Adding new tools or workflow requirements

- **IMMEDIATE** documentation updates: Documentation changes should be made in the same session as
  code changes, not deferred
- **VALIDATION** requirement: Verify that documentation accurately reflects the current state of the
  project after any structural changes

### Code Implementation Guidelines

**RULE**: Follow these specific coding standards when writing code:

1. **Early Returns**: Use early returns whenever possible to make the code more readable
2. **Styled Components**: Always use Styled Components for styling HTML elements; avoid using inline
   styles
3. **Component Organization**: Separate styled components into `.styles.ts` files
4. **Descriptive Naming**: Use descriptive variable and function/const names. Event functions should
   be named with a "handle" prefix, like "handleClick" for onClick and "handleKeyDown" for onKeyDown
5. **Accessibility**: Implement accessibility features on elements. For example, a tag should have a
   tabindex="0", aria-label, on:click, and on:keydown, and similar attributes
6. **Const over Functions**: Use consts instead of functions, for example, "const toggle = () =>".
   Also, define a type if possible

## Core Architectural Principles

### 1. Component Organization Structure

**RULE**: Components follow a tiered structure based on complexity:

#### **Tier 1: Simple Components (1 file)**

For basic components with minimal logic and no separate styling:

```
ComponentName/
└── ComponentName.tsx           # Single file with inline styles (styled-components)
```

**Examples**: Footer, Hashtag, Layout

#### **Tier 2: Medium Components (3-4 files)**

For components with moderate complexity requiring separate styling:

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
├── index.ts                    # Barrel export (MANDATORY)
├── ComponentName.tsx           # Main component
├── ComponentName.styles.ts     # Styled components
├── ComponentName.types.ts      # TypeScript interfaces
└── constants.ts               # Component data/constants
```

**Examples**: WellnessSolutions, NumbersDontLie, WhyChooseCult, OurImpact, ProvenImpact

**Enforcement**:

- **CHOOSE** appropriate tier based on component complexity
- **ALWAYS** separate concerns into appropriate files
- **USE** barrel exports via `index.ts` for Tier 2 and Tier 3 components
- **KEEP** simple components in single files to avoid over-engineering

### 2. File Naming Conventions

**RULE**: Consistent naming patterns across all files:

- **Components**: PascalCase (e.g., `WellnessSolutions.tsx`)
- **Files**: Match component name exactly
- **Folders**: Match component name exactly
- **Types**: Interface names match component name + "Props" (e.g., `WellnessSolutionsProps`)
- **Constants**: camelCase for arrays, PascalCase for objects (e.g., `solutions`, `GRADIENT_COLORS`)

### 3. TypeScript Integration

**RULE**: Comprehensive TypeScript usage:

- **ALWAYS** define interfaces for all component props
- **ALWAYS** export interfaces from `.types.ts` files
- **ALWAYS** use proper typing for all functions and variables
- **NEVER** use `any` type unless absolutely necessary
- **ALWAYS** provide JSDoc comments for complex interfaces

Example:

```typescript
/**
 * Props for the WellnessSolutions component.
 * This interface currently serves as a placeholder and can be extended
 * with additional props as the component evolves.
 */
export interface WellnessSolutionsProps {}
```

## Styling Guidelines

### 1. Styled Components Pattern

**RULE**: All styling must use styled-components:

- **ALWAYS** create styled components in separate `.styles.ts` files
- **ALWAYS** use CSS custom properties from `variables.css`
- **NEVER** use inline styles except for dynamic values
- **ALWAYS** use responsive design patterns

Example:

```typescript
import styled from 'styled-components';

export const SectionContainer = styled.section`
  background-color: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-2xl);

  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;
```

### 2. CSS Custom Properties Usage

**RULE**: Use established CSS custom properties:

- **ALWAYS** use CSS variables from `variables.css`
- **NEVER** hardcode colors, spacing, or font sizes
- **ALWAYS** follow the established color palette
- **ALWAYS** use the gradient system for brand elements

### 3. Responsive Design Requirements

**RULE**: Mobile-first responsive design with standard breakpoints:

#### **Standard Responsive Breakpoints**

- **ALWAYS** use project-defined breakpoints from `variables.css`:
  - `--breakpoint-sm: 640px` - Small mobile devices
  - `--breakpoint-md: 768px` - Standard mobile/tablet transition
  - `--breakpoint-lg: 1024px` - Tablet/desktop transition
  - `--breakpoint-xl: 1280px` - Large desktop
  - `--breakpoint-2xl: 1536px` - Extra large desktop

#### **Responsive Implementation Standards**

- **ALWAYS** design for mobile first (min-width approach)
- **ALWAYS** use standard breakpoints consistently across all components
- **ALWAYS** test on all breakpoint sizes
- **ALWAYS** ensure touch-friendly interactions on mobile devices
- **NEVER** create custom breakpoints unless absolutely necessary
- **ALWAYS** comment breakpoints with their purpose (e.g., `/* --breakpoint-md */`)

#### **Responsive Sizing Best Practices**

- **Typography**: Use `rem` for font sizes (scales with user preferences)
- **Spacing**: Use `rem` for margins, padding, and gaps (consistent scaling)
- **Container Dimensions**: Use `rem` or `%` for component sizing
- **Viewport Units**: Only for full-viewport sections (`100vh`) or large decorative elements
- **Fixed Units**: Use `px` only for borders, shadows, and precise pixel requirements

#### **Unified Spacing System**

**RULE**: All spacing must use the standardized spacing scale optimized for 13" laptop displays:

```css
/* Unified Spacing Scale */
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

#### **Responsive Spacing Behavior**

**RULE**: Spacing automatically scales based on screen size using multipliers:

```css
/* Responsive Scaling Multipliers */
--spacing-scale-desktop: 1; /* 13" laptop baseline */
--spacing-scale-large-desktop: 1.25; /* 15"+ displays (25% larger) */
--spacing-scale-tablet: 0.875; /* Tablets (12.5% smaller) */
--spacing-scale-mobile: 0.75; /* Mobile (25% smaller) */
--spacing-scale-small-mobile: 0.625; /* Small mobile (37.5% smaller) */
```

#### **Section Spacing Standards**

**RULE**: All sections must follow standardized spacing patterns:

```css
/* ✅ GOOD - Regular section spacing */
section {
  /* Vertical spacing - padding within sections */
  padding-top: var(--section-padding-vertical);     /* 96px base */
  padding-bottom: var(--section-padding-vertical);  /* 96px base */

  /* Horizontal spacing - matches navigation pattern */
  padding-left: var(--section-padding-horizontal);  /* 48px base */
  padding-right: var(--section-padding-horizontal); /* 48px base */

  /* Vertical margins between sections */
  margin-top: var(--section-margin-vertical);       /* 64px base */
  margin-bottom: var(--section-margin-vertical);    /* 64px base */
}

/* ✅ GOOD - Hero section spacing (special full-viewport sections) */
section.hero-section {
  /* Hero-specific spacing - no vertical padding/margins */
  padding-top: 0;    /* Full viewport hero */
  padding-bottom: 0; /* Full viewport hero */
  padding-left: var(--section-padding-horizontal);  /* Horizontal only */
  padding-right: var(--section-padding-horizontal); /* Horizontal only */

  /* Hero layout */
  margin: 0;         /* No margins */
  height: 100vh;     /* Full viewport height */
  min-height: 100vh; /* Ensure full height */
}

/* ✅ GOOD - Using spacing variables */
margin: var(--spacing-xl);
padding: var(--spacing-lg);
gap: var(--spacing-md);

/* ✅ GOOD - Using utility classes */
<div className="mt-xl px-2xl py-4xl">Content</div>

/* ✅ GOOD - Hero section implementation */
export const HeroContainer = styled.section.attrs({
  className: 'hero-section'
})`
  /* Only hero-specific styles here */
  /* Spacing handled by .hero-section class in global.css */
`;

/* ❌ AVOID - Hardcoded values */
margin: 32px;                  /* Use var(--spacing-xl) instead */
padding: 24px 16px;           /* Use var(--spacing-lg) var(--spacing-md) */
margin: 3vh;                  /* Use spacing variables instead */
```

#### **Spacing Usage Guidelines**

**RULE**: Choose appropriate spacing sizes based on context:

- **xxs-xs (0-4px)**: Borders, fine adjustments, micro spacing
- **sm-md (8-16px)**: Text spacing, small component gaps, list items
- **lg-xl (24-32px)**: Component margins, card spacing, form elements
- **2xl-3xl (48-64px)**: Section internal spacing, large component gaps
- **4xl-5xl (96-128px)**: Section padding, hero sections, major spacing
- **6xl (192px)**: Major section dividers, landing page spacing

#### **Implementation Guidelines**

**RULE**: Consistent spacing implementation across all components:

- **ALWAYS** use spacing CSS variables instead of hardcoded values
- **ALWAYS** use utility classes for quick spacing application
- **ALWAYS** follow the section spacing standards for new sections
- **NEVER** create custom spacing values outside the established scale
- **ALWAYS** consider responsive scaling when designing layouts

#### **Utility Classes Usage**

**RULE**: Use standardized utility classes for rapid development:

```css
/* Margin utilities: .m-{size}, .mt-{size}, .mb-{size}, .mx-{size}, .my-{size} */
<div className="mt-xl mb-2xl">...</div>

/* Padding utilities: .p-{size}, .pt-{size}, .pb-{size}, .px-{size}, .py-{size} */
<div className="px-lg py-4xl">...</div>

/* Available sizes: xxs, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl */
```

## Component Development Rules

### 1. Component Structure

**RULE**: Consistent component implementation with modern patterns:

```typescript
import React from 'react';
import type { ComponentNameProps } from './ComponentName.types';
import { StyledSection } from './ComponentName.styles';

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Early return for conditional rendering
  if (!prop1) {
    return null;
  }

  // Event handlers with proper naming
  const handleClick = () => {
    // Handle click logic
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <StyledSection
      tabIndex={0}
      aria-label="Component description"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {/* Component JSX */}
    </StyledSection>
  );
};

export default ComponentName;
```

### 2. Props and State Management

**RULE**: Props and state handling with modern patterns:

- **ALWAYS** destructure props in function signature
- **ALWAYS** provide default values for optional props
- **ALWAYS** use proper TypeScript types for state
- **PREFER** props over hardcoded values for reusability
- **USE** const declarations for functions instead of function declarations
- **DEFINE** types for all functions when possible

### 3. Event Handlers

**RULE**: Event handler patterns with accessibility:

- **ALWAYS** use const arrow functions for event handlers
- **ALWAYS** provide proper TypeScript types for events
- **ALWAYS** handle edge cases and errors
- **ALWAYS** use descriptive function names with "handle" prefix
- **ALWAYS** implement keyboard accessibility for interactive elements
- **ALWAYS** include proper ARIA attributes

Example:

```typescript
type HandleMouseEnterType = (id: number) => void;

const handleMouseEnter: HandleMouseEnterType = (id: number) => {
  setHoveredOption(id);
  setLastHoveredOption(id);
};

const handleKeyDown = (event: React.KeyboardEvent, id: number) => {
  if (event.key === 'Enter' || event.key === ' ') {
    handleMouseEnter(id);
  }
};
```

## Animation and Interaction Rules

### 1. Framer Motion Integration

**RULE**: Animation implementation standards:

- **ALWAYS** use Framer Motion for animations
- **ALWAYS** provide accessibility considerations (reduced motion)
- **ALWAYS** use consistent animation durations and easing
- **ALWAYS** implement proper AnimatePresence for mount/unmount animations

Example:

```typescript
<AnimatePresence mode="wait">
  <StyledImage
    key={displaySolution.id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  />
</AnimatePresence>
```

### 2. Hover and Interactive States

**RULE**: Interaction design patterns with accessibility:

- **ALWAYS** provide visual feedback for interactive elements
- **ALWAYS** use consistent hover transition durations
- **ALWAYS** implement proper focus states for accessibility
- **ALWAYS** use established brand colors for hover states
- **ALWAYS** implement keyboard navigation support
- **ALWAYS** include proper ARIA attributes for screen readers
- **ALWAYS** use Styled Components for hover, focus, and active states

Example:

```typescript
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--color-blue);
  color: var(--color-text);
  transition: all var(--transition-normal);

  &:hover {
    background-color: var(--color-accent-secondary);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-accent-primary);
  }
`;

const StyledLink = styled.a`
  color: var(--color-blue);
  transition: all var(--transition-normal);

  &:hover {
    color: var(--color-accent-secondary);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-accent-primary);
  }
`;

<StyledButton
  tabIndex={0}
  aria-label="Submit contact form"
  onClick={handleSubmit}
  onKeyDown={handleKeyDown}
>
  Submit Form
</StyledButton>

<StyledLink
  href="/contact"
  aria-label="Navigate to contact page"
>
  Contact Us
</StyledLink>
```

## Data Management Rules

### 1. Constants Pattern

**RULE**: Data organization standards with TypeScript:

- **ALWAYS** store static data in `constants.ts` files
- **ALWAYS** use proper TypeScript interfaces for data structures
- **ALWAYS** organize data logically and consistently
- **NEVER** hardcode data directly in components
- **ALWAYS** define types for constants and data structures
- **USE** const assertions for immutable data

Example:

```typescript
// constants.ts
export interface Solution {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  hoverColor: string;
}

export const solutions: readonly Solution[] = [
  {
    id: 1,
    title: 'Premium Fitness Access',
    description: 'Unlock 600+ elite fitness centers...',
    imageUrl: '/images/wellness-1.jpg',
    hoverColor: 'var(--color-yellow)',
  },
  // ... more solutions
] as const;
```

### 2. API Integration

**RULE**: Service layer implementation:

- **ALWAYS** create services in the `src/services/` directory
- **ALWAYS** handle errors gracefully
- **ALWAYS** provide proper TypeScript interfaces for API responses
- **ALWAYS** implement loading states and user feedback

## Performance and Optimization Rules

### 1. Component Optimization

**RULE**: Performance considerations:

- **ALWAYS** use React.memo for expensive components
- **ALWAYS** implement proper key props for lists
- **ALWAYS** optimize images and assets
- **AVOID** unnecessary re-renders

### 2. Bundle Size Management

**RULE**: Asset and dependency management:

- **ALWAYS** optimize images before adding to assets
- **ALWAYS** use proper import statements (avoid importing entire libraries)
- **ALWAYS** implement code splitting where appropriate
- **REGULARLY** audit bundle size

## Accessibility Rules

### 1. WCAG 2.1 AA Compliance

**RULE**: Comprehensive accessibility requirements:

- **ALWAYS** provide proper ARIA labels and descriptions
- **ALWAYS** ensure keyboard navigation support (Tab, Enter, Space, Arrow keys)
- **ALWAYS** maintain proper color contrast ratios (4.5:1 for normal text, 3:1 for large text)
- **ALWAYS** provide alternative text for images
- **ALWAYS** implement proper focus management and focus indicators
- **ALWAYS** include tabindex="0" for interactive elements that aren't naturally focusable
- **ALWAYS** implement both click and keydown handlers for interactive elements
- **ALWAYS** use role attributes when semantic HTML isn't sufficient

### 2. Semantic HTML

**RULE**: HTML structure standards with accessibility:

- **ALWAYS** use semantic HTML elements (header, nav, main, section, article, aside, footer)
- **ALWAYS** provide proper heading hierarchy (h1, h2, h3, etc.)
- **ALWAYS** use proper form labels and validation
- **NEVER** rely solely on color for information
- **ALWAYS** use button elements for actions and anchor elements for navigation
- **ALWAYS** provide meaningful link text (avoid "click here" or "read more")

Example:

```typescript
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--color-blue);
  color: var(--color-text);
  transition: all var(--transition-normal);

  &:hover {
    background-color: var(--color-accent-secondary);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-accent-primary);
  }
`;

const StyledLink = styled.a`
  color: var(--color-blue);
  transition: all var(--transition-normal);

  &:hover {
    color: var(--color-accent-secondary);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-accent-primary);
  }
`;

<StyledButton
  tabIndex={0}
  aria-label="Submit contact form"
  onClick={handleSubmit}
  onKeyDown={handleKeyDown}
>
  Submit Form
</StyledButton>

<StyledLink
  href="/contact"
  aria-label="Navigate to contact page"
>
  Contact Us
</StyledLink>
```

## Git and Version Control Rules

### 1. Commit Standards

**RULE**: Commit message format:

- **ALWAYS** use descriptive commit messages
- **ALWAYS** reference component names in commits
- **ALWAYS** separate refactoring from feature additions
- **ALWAYS** test changes before committing

### 2. Branch Management

**RULE**: Branch naming and workflow:

- **ALWAYS** create feature branches for new components
- **ALWAYS** use descriptive branch names
- **ALWAYS** keep branches focused on single features
- **ALWAYS** update documentation with changes

## Testing Requirements

### 1. Component Testing

**RULE**: Testing standards (when implemented):

- **ALWAYS** test component rendering
- **ALWAYS** test user interactions
- **ALWAYS** test responsive behavior
- **ALWAYS** test accessibility features

### 2. Integration Testing

**RULE**: Integration testing (when implemented):

- **ALWAYS** test API integrations
- **ALWAYS** test form submissions
- **ALWAYS** test navigation flows
- **ALWAYS** test error handling

## Documentation Rules

### 1. Code Documentation

**RULE**: Documentation standards:

- **ALWAYS** provide JSDoc comments for complex functions
- **ALWAYS** document component purposes and features
- **ALWAYS** document prop interfaces thoroughly
- **ALWAYS** include usage examples for reusable components

### 2. Architecture Documentation

**RULE**: Documentation maintenance:

- **ALWAYS** update `Architecture.md` when adding new components
- **ALWAYS** update `Rules.md` when establishing new patterns
- **ALWAYS** document breaking changes
- **ALWAYS** maintain up-to-date component lists

## Specific Component Rules

### 1. Navigation Component

**RULE**: Navigation-specific guidelines with standard responsive implementation:

#### **Responsive Navigation Standards**

- **ALWAYS** use standard breakpoints for navigation transformations:
  - Desktop: Full horizontal navigation
  - Tablet (≤1024px): Reduced logo size, standard navigation
  - Mobile (≤768px): Hamburger menu with slide-down animation
  - Small mobile (≤640px): Compact spacing and sizing

#### **Navigation Sizing Standards**

- **Navigation heights**: Touch-optimized for mobile/tablet devices
  - Desktop: `var(--nav-height-desktop)` (4.5rem / 72px)
  - Tablet: `var(--nav-height-tablet)` (5rem / 80px)
  - Mobile: `var(--nav-height-mobile)` (5.5rem / 88px)
  - Small Mobile: `var(--nav-height-small-mobile)` (5rem / 80px)
- **Logo sizing**: Proportional to navigation height using CSS variables
  - Desktop: `var(--nav-logo-desktop)` (4.25rem / 68px)
  - Tablet: `var(--nav-logo-tablet)` (4.25rem / 68px)
  - Mobile: `var(--nav-logo-mobile)` (4rem / 64px)
  - Small Mobile: `var(--nav-logo-small-mobile)` (4rem / 64px)
- **Touch targets**: Minimum 44px (2.75rem) for all interactive elements
- **Spacing**: Use CSS variables (`var(--spacing-xl)`, etc.) for consistent margins

#### **Mobile Menu Implementation**

- **ALWAYS** position mobile menu using `rem` units relative to nav height
- **ALWAYS** use standard z-index values from CSS variables
- **ALWAYS** implement slide and fade animations with project transition variables
- **ALWAYS** ensure hamburger button transforms properly (lines to X animation)

#### **Navigation Behavior Standards**

- **ALWAYS** maintain responsive hamburger menu functionality
- **ALWAYS** use established logo and brand colors with gradient hover effects
- **ALWAYS** implement proper mobile menu transitions using CSS variables
- **ALWAYS** ensure touch-friendly interaction areas on mobile (44px minimum)
- **NEVER** break existing navigation structure or accessibility features

### 2. Form Components

**RULE**: Form handling standards:

- **ALWAYS** implement proper validation
- **ALWAYS** provide user feedback for form states
- **ALWAYS** handle loading and error states
- **ALWAYS** integrate with Salesforce service properly

### 3. Animation Components (DynamicLogo)

**RULE**: Complex animation components:

- **ALWAYS** maintain existing animation parameters
- **ALWAYS** preserve scroll-triggered and hover functionality
- **ALWAYS** use unique IDs for SVG elements to avoid conflicts
- **NEVER** break existing animation sequences

### 4. Layout Components

**RULE**: Layout and grid systems:

- **ALWAYS** maintain established proportions (35/65 splits, etc.)
- **ALWAYS** preserve responsive behavior
- **ALWAYS** maintain proper spacing using CSS custom properties
- **ALWAYS** ensure proper vertical alignment

## Asset Management Rules

### 1. Image Assets

**RULE**: Image handling standards:

- **ALWAYS** optimize images before adding to the project
- **ALWAYS** organize images by component/section
- **ALWAYS** use appropriate image formats (WebP when possible)
- **ALWAYS** provide proper alt text for accessibility

### 2. Icon and Logo Assets

**RULE**: Brand asset management:

- **NEVER** modify brand logos without approval
- **ALWAYS** maintain consistent logo usage
- **ALWAYS** preserve brand color integrity
- **ALWAYS** use vector formats for logos when possible

## Error Handling Rules

### 1. Component Error Boundaries

**RULE**: Error management:

- **ALWAYS** implement proper error boundaries for complex components
- **ALWAYS** provide fallback UI for error states
- **ALWAYS** log errors appropriately
- **NEVER** let errors crash the entire application

### 2. API Error Handling

**RULE**: Service error management:

- **ALWAYS** handle network errors gracefully
- **ALWAYS** provide user-friendly error messages
- **ALWAYS** implement retry mechanisms where appropriate
- **ALWAYS** log API errors for debugging

## Modification Workflow

### 1. Before Making Changes

**CHECKLIST**: Pre-modification requirements:

1. **READ** existing component documentation
2. **UNDERSTAND** the component's purpose and current functionality
3. **IDENTIFY** all dependencies and related components
4. **PLAN** changes to minimize breaking existing functionality
5. **REVIEW** these rules for applicable guidelines

### 2. During Development

**CHECKLIST**: Development process:

1. **FOLLOW** established patterns and conventions
2. **TEST** changes on all breakpoints
3. **VERIFY** accessibility compliance
4. **ENSURE** TypeScript compliance
5. **VALIDATE** performance impact

### 3. After Implementation

**CHECKLIST**: Post-development requirements:

1. **UPDATE** documentation if architectural changes were made
2. **UPDATE** this Rules.md if new patterns were established
3. **TEST** entire application for regressions
4. **COMMIT** changes with proper commit messages
5. **DOCUMENT** any breaking changes

## Breaking Change Management

### 1. Identifying Breaking Changes

**RULE**: Breaking change classification:

- **BREAKING**: Changes to component props interfaces
- **BREAKING**: Changes to established styling patterns
- **BREAKING**: Changes to component file structure
- **BREAKING**: Changes to data structures or APIs

### 2. Handling Breaking Changes

**RULE**: Breaking change process:

1. **DOCUMENT** the breaking change and its impact
2. **PROVIDE** migration guide if necessary
3. **UPDATE** all affected components
4. **UPDATE** documentation to reflect changes
5. **COMMUNICATE** changes to all team members

## Quality Assurance Rules

### 1. Code Review Requirements

**RULE**: Review standards:

- **ALWAYS** review code for adherence to these rules
- **ALWAYS** check for TypeScript compliance
- **ALWAYS** verify responsive design implementation
- **ALWAYS** ensure accessibility compliance

### 2. Testing Standards

**RULE**: Quality validation:

- **ALWAYS** test on multiple browsers
- **ALWAYS** test responsive behavior
- **ALWAYS** validate form functionality
- **ALWAYS** check animation performance

## Maintenance Rules

### 1. Regular Maintenance Tasks

**RULE**: Ongoing maintenance:

- **REGULARLY** update dependencies
- **REGULARLY** audit bundle size
- **REGULARLY** review and update documentation
- **REGULARLY** validate accessibility compliance

### 2. Performance Monitoring

**RULE**: Performance oversight:

- **MONITOR** build times and bundle sizes
- **MONITOR** runtime performance
- **MONITOR** accessibility compliance
- **MONITOR** browser compatibility

## Emergency Procedures

### 1. Critical Bug Fixes

**RULE**: Emergency response:

- **IMMEDIATELY** identify scope of the issue
- **PRIORITIZE** user experience and accessibility
- **IMPLEMENT** minimal fixes to restore functionality
- **DOCUMENT** temporary solutions
- **PLAN** proper long-term fixes

### 2. Rollback Procedures

**RULE**: Rollback standards:

- **ALWAYS** maintain ability to rollback changes
- **ALWAYS** document rollback procedures
- **ALWAYS** test rollback scenarios
- **ALWAYS** communicate rollback decisions

## Conclusion

These rules are designed to maintain the high quality and consistency of the CULT Corporate Wellness
Platform. They should be:

1. **REFERENCED** before making any changes
2. **UPDATED** when new patterns are established
3. **ENFORCED** through code reviews
4. **FOLLOWED** by all team members

**Remember**: When in doubt, follow existing patterns in the codebase and consult with the team
before making significant changes.

## FINAL REMINDER

**🚨 ABSOLUTE REQUIREMENT**: Every single development task, modification, or enhancement MUST be
executed in full compliance with these rules. There are NO circumstances where these rules can be
ignored or bypassed. They form the foundation of code quality, consistency, and maintainability for
this project.

**Integration Protocol**: For every prompt received:

1. Parse the prompt requirements
2. Identify applicable rules from this document
3. Plan implementation that satisfies both prompt AND rules
4. Execute with full compliance to established patterns
5. Validate that both prompt objectives and rule compliance are achieved

---

_Last Updated: 2025-01-27_ _This document should be updated whenever new rules or patterns are
established during development._
