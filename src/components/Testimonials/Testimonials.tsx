import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialsProps {}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'HR Director',
    company: 'TechGlobal Inc.',
    content: 'Implementing CULT\'s wellness program has transformed our workplace culture. Employee engagement is up 40%, and our team members are more energized and productive than ever before.',
    avatar: 'avatar1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CEO',
    company: 'Innovate Solutions',
    content: 'As a fast-growing startup, we needed a wellness solution that could scale with us. CULT delivered beyond our expectations, creating customized programs that our diverse team loves.',
    avatar: 'avatar2.jpg',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    position: 'Wellness Coordinator',
    company: 'Global Finance Partners',
    content: 'The data-driven approach from CULT has allowed us to quantify the benefits of our wellness investment. We\'ve seen healthcare costs decrease by 23% while improving retention rates.',
    avatar: 'avatar3.jpg',
  },
  {
    id: 4,
    name: 'Robert Taylor',
    position: 'Operations Manager',
    company: 'Nexus Manufacturing',
    content: 'Our manufacturing environment presents unique wellness challenges. CULT worked closely with us to design on-site solutions that address our specific needs and work schedules.',
    avatar: 'avatar4.jpg',
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    position: 'Chief People Officer',
    company: 'Creative Media Group',
    content: 'The personalized approach from CULT has made all the difference. Our employees feel valued, and we\'ve created a culture where wellbeing is truly prioritized.',
    avatar: 'avatar5.jpg',
  },
];

const SectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  padding: var(--spacing-2xl) 0;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 500px;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  width: 80%;
  max-width: 800px;
  position: absolute;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 90%;
    padding: var(--spacing-lg);
  }
`;

const TestimonialContent = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: var(--spacing-xl);
  position: relative;
  
  &:before {
    content: '"';
    font-size: 4rem;
    color: var(--color-accent-primary);
    opacity: 0.3;
    position: absolute;
    top: -20px;
    left: -20px;
  }
  
  &:after {
    content: '"';
    font-size: 4rem;
    color: var(--color-accent-primary);
    opacity: 0.3;
    position: absolute;
    bottom: -50px;
    right: 0;
  }
  
  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: var(--spacing-lg);
`;

const Avatar = styled.div<{ $imageUrl: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  margin-right: var(--spacing-md);
  border: 2px solid var(--color-accent-primary);
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  font-size: var(--font-size-md);
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
`;

const AuthorPosition = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-grey);
  margin-bottom: var(--spacing-xs);
`;

const AuthorCompany = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-accent-primary);
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
`;

const NavButton = styled(motion.button)<{ $isActive?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.$isActive ? 'var(--color-accent-primary)' : 'var(--color-grey-dark)'};
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-size: var(--font-size-md);
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const IndicatorDots = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
`;

const IndicatorDot = styled.div<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.$isActive ? 'var(--color-accent-primary)' : 'var(--color-grey-dark)'};
  cursor: pointer;
  transition: background-color var(--transition-fast);
`;

const Testimonials: React.FC<TestimonialsProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  
  return (
    <SectionContainer>
      <SectionTitle>What Our Clients Say</SectionTitle>
      
      <TestimonialsContainer>
        <AnimatePresence custom={direction} mode="wait">
          <TestimonialCard
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <TestimonialContent>
              {testimonials[currentIndex].content}
            </TestimonialContent>
            
            <TestimonialAuthor>
              <Avatar $imageUrl={testimonials[currentIndex].avatar} />
              <AuthorInfo>
                <AuthorName>{testimonials[currentIndex].name}</AuthorName>
                <AuthorPosition>{testimonials[currentIndex].position}</AuthorPosition>
                <AuthorCompany>{testimonials[currentIndex].company}</AuthorCompany>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </AnimatePresence>
      </TestimonialsContainer>
      
      <NavigationButtons>
        <NavButton 
          onClick={prevTestimonial} 
          disabled={testimonials.length <= 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </NavButton>
        <NavButton 
          onClick={nextTestimonial} 
          disabled={testimonials.length <= 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </NavButton>
      </NavigationButtons>
      
      <IndicatorDots>
        {testimonials.map((_, index) => (
          <IndicatorDot 
            key={index} 
            $isActive={currentIndex === index}
            onClick={() => goToTestimonial(index)}
          />
        ))}
      </IndicatorDots>
    </SectionContainer>
  );
};

export default Testimonials; 