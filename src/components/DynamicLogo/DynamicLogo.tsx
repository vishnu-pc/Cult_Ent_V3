import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface DynamicLogoProps {}

const SectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  overflow: hidden;
  position: relative;
`;

const LogoContainer = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const LogoCircle = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(255, 77, 77, 0.4);
  
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    background-color: var(--color-background);
    z-index: 1;
  }
`;

const LogoText = styled(motion.div)`
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-text);
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TaglineText = styled(motion.h2)`
  font-size: var(--font-size-2xl);
  color: var(--color-text);
  margin-top: var(--spacing-xl);
  text-align: center;
  max-width: 80%;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`;

const DynamicLogo: React.FC<DynamicLogoProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <SectionContainer>
      <LogoContainer
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <LogoCircle
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        />
        <LogoText
          animate={{
            color: isHovered ? "var(--color-accent-primary)" : "var(--color-text)"
          }}
          transition={{ duration: 0.5 }}
        >
          CULT
        </LogoText>
      </LogoContainer>
      
      <TaglineText
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Transforming Corporate Wellness
      </TaglineText>
    </SectionContainer>
  );
};

export default DynamicLogo; 