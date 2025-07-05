import React from 'react';
import { TestimonialsDivider } from '../ui/GradientDivider';
import type { TestimonialsProps } from './Testimonials.types';
import { testimonialsData } from './constants';
import InvertedCommaImg from '../../assets/images/Testimonials/Invertedcomma.png';
import {
  SectionContainer,
  ContentWrapper,
  TestimonialCard,
  TestimonialText,
  CompanySection,
  CompanyName,
  CompanyLogo,
  CentralTextSection,
  QuoteSymbol,
  TextBlock,
  TextLine,
  WhiteText,
  GradientText,
  MobileTestimonialContainer,
} from './Testimonials.styles';

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = testimonialsData,
}) => {
  return (
    <>
      <TestimonialsDivider />
      <SectionContainer>
        <ContentWrapper>
          {/* Floating Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              $animationType={testimonial.id}
              style={{
                top: testimonial.position.top,
                left: testimonial.position.left,
                right: testimonial.position.right,
                bottom: testimonial.position.bottom,
                animationDelay: `${testimonial.animationDelay}s`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
            >
              <TestimonialText>{testimonial.message}</TestimonialText>
              <CompanySection>
                <CompanyName>{testimonial.company}</CompanyName>
                <CompanyLogo>{testimonial.logo}</CompanyLogo>
              </CompanySection>
            </TestimonialCard>
          ))}

          {/* Mobile Testimonial Container */}
          <MobileTestimonialContainer>
            {testimonials.map(testimonial => (
              <TestimonialCard
                key={`mobile-${testimonial.id}`}
                $animationType={1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <TestimonialText>{testimonial.message}</TestimonialText>
                <CompanySection>
                  <CompanyName>{testimonial.company}</CompanyName>
                  <CompanyLogo>{testimonial.logo}</CompanyLogo>
                </CompanySection>
              </TestimonialCard>
            ))}
          </MobileTestimonialContainer>

          {/* Central Text Section */}
          <CentralTextSection>
            <QuoteSymbol src={InvertedCommaImg} alt='Quote symbol' />

            <TextBlock>
              <TextLine>
                <WhiteText>SEE </WhiteText>
                <GradientText>WHAT</GradientText>
              </TextLine>
              <TextLine>
                <GradientText>PEOPLE ARE</GradientText>
              </TextLine>
              <TextLine>
                <GradientText>SAYING </GradientText>
                <WhiteText>BEHIND</WhiteText>
              </TextLine>
              <TextLine>
                <WhiteText>OUR BACK</WhiteText>
              </TextLine>
            </TextBlock>
          </CentralTextSection>
        </ContentWrapper>
      </SectionContainer>
    </>
  );
};

export default Testimonials;
