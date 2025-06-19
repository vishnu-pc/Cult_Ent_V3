# CULT Corporate Wellness Platform

A responsive single-page application (SPA) built with React and TypeScript for CULT's corporate wellness solutions.

## Project Overview

This project is a modern, responsive website for CULT, a corporate wellness solutions provider. The website showcases CULT's services, impact, and client testimonials in a visually appealing and interactive manner. The application is built with React, TypeScript, and Vite, following best practices for performance, accessibility, and code organization.

## Technologies Used

- **Frontend Framework**: React.js with TypeScript
- **Build Tool**: Vite
- **Styling**: Styled Components
- **Routing**: React Router
- **Animations**: Framer Motion
- **Form Validation**: Custom implementation
- **API Integration**: Salesforce (integration ready)
- **Responsive Design**: Mobile-first approach

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable UI components
│   ├── Layout/      # Layout components (wrapper, container)
│   ├── Navigation/  # Navigation bar component
│   ├── Footer/      # Footer component
│   └── [Sections]/  # Individual section components
├── context/         # React context for state management
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── services/        # API services and integrations
├── styles/          # Global styles and theme
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Features

1. **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
2. **Interactive UI Elements**: Animations, transitions, and interactive components
3. **Accessibility Compliance**: WCAG 2.1 AA compliant
4. **Performance Optimization**: Optimized assets and code splitting
5. **Form Validation**: Client-side validation for the contact form
6. **Salesforce Integration**: Ready for integration with Salesforce for lead capture

## Website Sections

1. **Navigation Bar**: Collapsible navigation with smooth transitions
2. **Landing Banner**: Eye-catching banner with animated elements
3. **Our Clientele**: Showcase of client logos with infinite carousel
4. **Wellness Solutions**: Interactive display of wellness solutions
5. **Proven Impact**: Visual representation of impact metrics
6. **Why Choose Cult**: Expandable columns highlighting unique selling points
7. **Contact Us**: Form with validation and Salesforce integration
8. **Testimonials**: Carousel of client testimonials
9. **Our Impact**: Visual data representation of impact metrics
10. **Dynamic Logo**: Interactive logo with animation effects
11. **Hashtag**: Social media integration
12. **Footer**: Contact information and site navigation

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/cult-corporate-wellness.git
   cd cult-corporate-wellness
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Salesforce Integration

The contact form in the Contact Us section is designed to integrate with Salesforce. To enable this integration:

1. Set up a Salesforce account and create the necessary API credentials
2. Configure the API endpoint in the `src/services/salesforce.ts` file
3. Implement the API call in the ContactUs component

Example implementation:
```typescript
// In src/services/salesforce.ts
export const submitLeadToSalesforce = async (data) => {
  const response = await fetch('/api/salesforce/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      FirstName: data.firstName,
      LastName: data.lastName,
      Email: data.email,
      Company: data.company,
      // Additional fields as needed
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit form');
  }
  
  return response.json();
};
```

## Deployment Guidelines

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy to hosting service**:
   - For Netlify: Connect your GitHub repository and configure build settings
   - For Vercel: Import your project and configure deployment settings
   - For traditional hosting: Upload the contents of the `dist` directory to your server

3. **Environment Configuration**:
   - Create environment variables for API endpoints and credentials
   - Configure redirects for SPA routing

## Browser Compatibility

The application is compatible with:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)

## Future Enhancements

1. **Multi-language Support**: Implement i18n for multiple language options
2. **Dark/Light Theme Toggle**: Add theme switching capability
3. **Enhanced Analytics**: Integrate with Google Analytics or similar services
4. **User Authentication**: Add user login for client portals
5. **Blog Section**: Add a blog with CMS integration

## Known Issues/Limitations

- Font Awesome icons require a kit to be added for production
- Placeholder images need to be replaced with actual assets
- Salesforce integration requires backend API setup

## Author

- **Name**: vishnu-pc
- **Date**: 2025-06-18

## License

This project is proprietary and confidential. All rights reserved.
