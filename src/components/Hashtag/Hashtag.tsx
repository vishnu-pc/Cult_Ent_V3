import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface HashtagProps {}

const SectionContainer = styled.section`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  padding: var(--spacing-2xl) 0;
  overflow: hidden;
`;

const HashtagText = styled(motion.h2)`
  font-size: 6rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--color-accent-primary), var(--color-accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-grey-light);
  text-align: center;
  max-width: 600px;
  margin: var(--spacing-lg) auto;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-md);
    max-width: 90%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-grey-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  font-size: var(--font-size-xl);
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-accent-primary);
  }
`;

const Hashtag: React.FC<HashtagProps> = () => {
  return (
    <SectionContainer>
      <HashtagText
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        #CULTivateWellness
      </HashtagText>
      
      <Description>
        Join the conversation and share your wellness journey with us. 
        Tag your posts with #CULTivateWellness to be featured on our social media channels.
      </Description>
      
      <SocialIcons>
        <SocialIcon 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </SocialIcon>
        
        <SocialIcon 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </SocialIcon>
        
        <SocialIcon 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </SocialIcon>
        
        <SocialIcon 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
      </SocialIcons>
    </SectionContainer>
  );
};

export default Hashtag; 