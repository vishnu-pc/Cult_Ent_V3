import React, { useState, useEffect } from 'react';
import cultLogo from '../../assets/icons/Cult_Navbar_Logo.png';
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
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <NavContainer>
      <Logo to='/'>
        <img src={cultLogo} alt='Cult for Corporates' />
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
        <NavLink to='/franchise'>FRANCHISE</NavLink>
        <NavLink to='/cultpass'>CULTPASS</NavLink>
        <NavLink to='/corporates'>CORPORATES</NavLink>
        <NavLink to='/equipment-solutions'>EQUIPMENT SOLUTIONS</NavLink>
        <NavLink to='/contact'>CONTACT US</NavLink>
        <LoginButton>LOGIN / SIGN UP</LoginButton>
      </NavLinks>
    </NavContainer>
  );
};

export default Navigation;
