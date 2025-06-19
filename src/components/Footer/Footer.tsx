import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface FooterProps {}

const FooterContainer = styled.footer`
  background-color: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-2xl) 0;
  border-top: 1px solid var(--color-grey-dark);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h4`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
`;

const FooterLink = styled(Link)`
  color: var(--color-grey);
  text-decoration: none;
  margin-bottom: var(--spacing-sm);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-accent-primary);
  }
`;

const FooterText = styled.p`
  color: var(--color-grey);
  margin-bottom: var(--spacing-sm);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
`;

const SocialIcon = styled.a`
  color: var(--color-grey);
  font-size: var(--font-size-xl);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-accent-primary);
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: var(--spacing-xl) auto 0;
  padding: var(--spacing-md) var(--spacing-xl);
  border-top: 1px solid var(--color-grey-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--color-grey);
  font-size: var(--font-size-sm);
`;

const LegalLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

const LegalLink = styled(Link)`
  color: var(--color-grey);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-accent-primary);
  }
`;

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>CULT</FooterTitle>
          <FooterText>
            Transforming corporate wellness with innovative solutions that engage employees and improve overall wellbeing.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Solutions</FooterTitle>
          <FooterLink to="/solutions/fitness">Premium Fitness Access</FooterLink>
          <FooterLink to="/solutions/engagement">Employee Engagement</FooterLink>
          <FooterLink to="/solutions/wellness">All-Round Wellness</FooterLink>
          <FooterLink to="/solutions/campus">On-Campus Solutions</FooterLink>
          <FooterLink to="/solutions/gifting">Corporate Gifting</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/impact">Our Impact</FooterLink>
          <FooterLink to="/testimonials">Testimonials</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterText>123 Wellness Street</FooterText>
          <FooterText>Fitness City, FC 12345</FooterText>
          <FooterText>contact@cultenterprise.com</FooterText>
          <FooterText>+1 (555) 123-4567</FooterText>
        </FooterSection>
      </FooterContent>
      
      <BottomBar>
        <Copyright>© {currentYear} CULT. All rights reserved.</Copyright>
        <LegalLinks>
          <LegalLink to="/terms">Terms of Service</LegalLink>
          <LegalLink to="/privacy">Privacy Policy</LegalLink>
          <LegalLink to="/cookies">Cookie Policy</LegalLink>
        </LegalLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer; 