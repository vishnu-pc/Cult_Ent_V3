import React from 'react';
import { TestimonialsDivider } from '../ui/GradientDivider';
import type { TestimonialsProps } from './Testimonials.types';
import { testimonialsData } from './constants';
import InvertedCommaImg from '../../assets/images/Testimonials/Invertedcomma.png';
// TODO: Replace with AVIF/WebP responsive sources when provided
import {
  SectionContainer,
  OverlayTitle,
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
} from './Testimonials.styles';

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = testimonialsData,
}) => {
  return (
    <>
      <TestimonialsDivider />
      <SectionContainer id='testimonials'>
        <OverlayTitle>Testimonials</OverlayTitle>
        <ContentWrapper>
          {/* Floating Testimonial Cards with Responsive Positioning */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              $animationType={testimonial.id}
              $responsivePosition={testimonial.position}
              style={{
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
                <CompanyLogo
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  loading='lazy'
                  decoding='async'
                  width={70}
                  height={70}
                />
              </CompanySection>
            </TestimonialCard>
          ))}

          {/* Central Text Section */}
          <CentralTextSection>
            <QuoteSymbol
              src={InvertedCommaImg}
              alt='Quote symbol'
              loading='lazy'
              decoding='async'
              width={160}
              height={160}
            />
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
