import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { simulateSalesforceSubmission } from '../../services/salesforce';

interface ContactUsProps {}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  employeeCount: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  employeeCount?: string;
  phone?: string;
  message?: string;
}

const SectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  padding: var(--spacing-2xl) 0;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

const SectionSubtitle = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-grey-light);
  margin-bottom: var(--spacing-xl);
  max-width: 90%;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-md);
  }
`;

const ContactInfo = styled.div`
  margin-top: var(--spacing-xl);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-md);
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-md);
`;

const ContactText = styled.div`
  font-size: var(--font-size-md);
  color: var(--color-text);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: var(--font-size-sm);
  color: var(--color-grey-light);
  margin-bottom: var(--spacing-xs);
`;

const Input = styled.input<{ $hasError?: boolean }>`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid ${props => props.$hasError ? 'var(--color-accent-primary)' : 'var(--color-grey-dark)'};
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  font-size: var(--font-size-md);
  outline: none;
  transition: border-color var(--transition-fast);
  
  &:focus {
    border-color: var(--color-accent-secondary);
  }
`;

const Select = styled.select<{ $hasError?: boolean }>`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid ${props => props.$hasError ? 'var(--color-accent-primary)' : 'var(--color-grey-dark)'};
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  font-size: var(--font-size-md);
  outline: none;
  transition: border-color var(--transition-fast);
  
  &:focus {
    border-color: var(--color-accent-secondary);
  }
  
  option {
    background-color: var(--color-background);
  }
`;

const TextArea = styled.textarea<{ $hasError?: boolean }>`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid ${props => props.$hasError ? 'var(--color-accent-primary)' : 'var(--color-grey-dark)'};
  border-radius: var(--border-radius-md);
  color: var(--color-text);
  font-size: var(--font-size-md);
  outline: none;
  transition: border-color var(--transition-fast);
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    border-color: var(--color-accent-secondary);
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-accent-primary);
  font-size: var(--font-size-xs);
  margin-top: var(--spacing-xs);
`;

const SubmitButton = styled(motion.button)`
  background-color: var(--color-accent-primary);
  color: var(--color-text);
  border: none;
  border-radius: var(--border-radius-full);
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-md);
  font-weight: 600;
  cursor: pointer;
  margin-top: var(--spacing-md);
  align-self: flex-start;
  
  &:disabled {
    background-color: var(--color-grey-dark);
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(77, 255, 77, 0.1);
  border: 1px solid var(--color-accent-tertiary);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);
  color: var(--color-accent-tertiary);
  font-size: var(--font-size-md);
`;

const ContactUs: React.FC<ContactUsProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    employeeCount: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.employeeCount) {
      newErrors.employeeCount = 'Please select employee count';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Use the Salesforce service to submit the form data
      const response = await simulateSalesforceSubmission(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          employeeCount: '',
          phone: '',
          message: '',
        });
      } else if (response.errors && response.errors.length > 0) {
        setErrors({ ...errors, message: response.errors[0] });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ ...errors, message: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <SectionContainer>
      <ContentWrapper>
        <InfoContainer>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionSubtitle>
            Ready to transform your corporate wellness experience? Get in touch with our team to discuss how CULT can help your organization thrive.
          </SectionSubtitle>
          
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-map-marker-alt"></i>
              </ContactIcon>
              <ContactText>123 Wellness Street, Fitness City, FC 12345</ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-phone-alt"></i>
              </ContactIcon>
              <ContactText>+1 (555) 123-4567</ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <i className="fas fa-envelope"></i>
              </ContactIcon>
              <ContactText>contact@cultenterprise.com</ContactText>
            </ContactItem>
          </ContactInfo>
        </InfoContainer>
        
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name*</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  $hasError={!!errors.firstName}
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="lastName">Last Name*</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  $hasError={!!errors.lastName}
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  $hasError={!!errors.email}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="company">Company Name*</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  $hasError={!!errors.company}
                />
                {errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="employeeCount">Number of Employees*</Label>
                <Select
                  id="employeeCount"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  $hasError={!!errors.employeeCount}
                >
                  <option value="">Select...</option>
                  <option value="1-50">1-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1001+">1001+</option>
                </Select>
                {errors.employeeCount && <ErrorMessage>{errors.employeeCount}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </SubmitButton>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for your message! Our team will get back to you shortly.
              </SuccessMessage>
            )}
          </Form>
        </FormContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ContactUs; 