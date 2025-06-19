import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { HamburgerProps } from './Navigation.types';

export const NavContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-xl);
  background-color: var(--color-background);
  position: relative;
  z-index: var(--z-index-sticky);
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 70px;
  }

  @media (max-width: 1100px) {
    img {
    height: 50px;
  }
  }
`;

export const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: var(--color-background);
    flex-direction: column;
    align-items: center;
    padding: var(--spacing-lg) 0;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: transform var(--transition-normal), opacity var(--transition-normal);
    z-index: var(--z-index-dropdown);
  }
`;

export const NavLink = styled(Link)`
  margin: 0 var(--spacing-md);
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-md);
  transition: color var(--transition-fast);
  text-transform: uppercase;
  
  &:hover {
    color: var(--color-accent-primary);
  }
  
  @media (max-width: 768px) {
    margin: var(--spacing-sm) 0;
    font-size: var(--font-size-lg);
  }
`;

export const LoginButton = styled.button`
  background-color: var(--color-grey-dark);
  color: var(--color-text);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-full);
  margin-left: var(--spacing-lg);
  font-weight: 500;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-accent-primary);
    color: var(--color-background);
  }
  
  @media (max-width: 768px) {
    margin: var(--spacing-md) 0 0;
  }
`;

export const HamburgerButton = styled.button<HamburgerProps>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  div {
    width: 30px;
    height: 3px;
    background-color: var(--color-text);
    border-radius: 10px;
    transition: all var(--transition-fast);
    position: relative;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`; 