import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f0120 0%, #000000 100%);
  display: flex;
  align-items: center;

  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: var(--spacing-2xl) var(--spacing-md);
    min-height: auto;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-2xl);
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;

export const TitleSection = styled.div`
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-xl);
    text-align: center;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const JumpingGirlImage = styled(motion.img)`
  width: 100%;
  height: auto;
  max-height: 90vh;
  min-height: 1000px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-height: 60vh;
    min-height: 400px;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    max-width: none;
  }
`;

export const ContactTitle = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const MainHeadline = styled.h1`
  font-size: var(--font-size-5xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;

export const CutToTheText = styled.span`
  color: var(--color-text);
`;

export const ChaseText = styled.span`
  background: linear-gradient(90deg, #b96aff 0%, #fa7e29 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

export const Form = styled.form`
margin-top: 250px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FullWidthFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
`;

export const Input = styled.input`
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
  transition: all var(--transition-normal);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    border-color: #b96aff;
    box-shadow: 0 0 0 1px #b96aff;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Select = styled.select`
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
  transition: all var(--transition-normal);
  cursor: pointer;
  
  &:focus {
    border-color: #b96aff;
    box-shadow: 0 0 0 1px #b96aff;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  option {
    background-color: #0f0120;
    color: var(--color-text);
  }
`;

export const TextArea = styled.textarea`
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  font-size: var(--font-size-md);
  font-family: var(--font-primary);
  outline: none;
  transition: all var(--transition-normal);
  min-height: 120px;
  resize: vertical;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:focus {
    border-color: #b96aff;
    box-shadow: 0 0 0 1px #b96aff;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const RecaptchaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
`;

export const RecaptchaCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #b96aff;
`;

export const RecaptchaText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: var(--font-size-sm);
`;

export const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: var(--spacing-lg) var(--spacing-xl);
  background-color: var(--color-text);
  color: #ff3c3c;
  border: none;
  border-radius: 50px;
  font-size: var(--font-size-lg);
  font-weight: 700;
  font-family: var(--font-primary);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all var(--transition-normal);
  
  &:hover {
    background-color: #ff3c3c;
    color: var(--color-text);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 60, 60, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: rgba(255, 255, 255, 0.3);
    color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`; 