import React, { useState, useEffect } from 'react';
import cultLogo from '../../assets/icons/Cult_Navbar_Logo_New.webp';
import type { NavigationProps } from './Navigation.types';
import {
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  LoginButton,
  HamburgerButton,
} from './Navigation.styles';

const Navigation: React.FC<NavigationProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when window is resized above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Temporarily disable pointer events during auto-scroll to prevent interference
      document.body.style.pointerEvents = 'none';

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Re-enable pointer events after scroll completes
      // We use a timeout that's longer than typical scroll duration
      setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
      }, 1000);
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  // Handle smooth scroll navigation
  const handleNavClick = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <NavContainer>
      <Logo to='/'>
        <img
          src={cultLogo}
          alt='Cult for Corporates'
          width={2422}
          height={800}
          loading='eager'
          decoding='async'
          fetchPriority='high'
        />
      </Logo>

      <HamburgerButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <div />
        <div />
        <div />
      </HamburgerButton>

      <NavLinks isOpen={isOpen}>
        <NavLink
          to='#wellness-solutions'
          onClick={handleNavClick('wellness-solutions')}
        >
          SOLUTIONS
        </NavLink>
        <NavLink to='#our-impact' onClick={handleNavClick('our-impact')}>
          IMPACT
        </NavLink>
        <NavLink
          to='#why-choose-cult'
          onClick={handleNavClick('why-choose-cult')}
        >
          BENEFITS
        </NavLink>
        <NavLink to='#testimonials' onClick={handleNavClick('testimonials')}>
          INSIGHTS
        </NavLink>
        <NavLink to='#contact-us' onClick={handleNavClick('contact-us')}>
          CONTACT US
        </NavLink>
        <LoginButton>LOGIN / SIGN UP</LoginButton>
      </NavLinks>
    </NavContainer>
  );
};

export default Navigation;
