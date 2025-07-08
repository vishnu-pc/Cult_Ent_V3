import React, { useState } from 'react';
import girljumpImage from '../../assets/images/ContactUs/girljump.png';
import type { ContactUsProps, ContactFormData } from './ContactUs.types';
import {
  SectionContainer,
  ContentWrapper,
  LeftSection,
  TitleSection,
  ImageSection,
  JumpingGirlImage,
  FormSection,
  ContactTitle,
  MainHeadline,
  CutToTheText,
  ChaseText,
  Subtitle,
  Form,
  FormRow,
  FormGroup,
  FullWidthFormGroup,
  Input,
  Select,
  TextArea,
  RecaptchaContainer,
  RecaptchaCheckbox,
  RecaptchaText,
  SubmitButton,
} from './ContactUs.styles';

const ContactUs: React.FC<ContactUsProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    designation: '',
    companyName: '',
    mobileNumber: '',
    workEmail: '',
    industry: '',
    city: '',
    employeeStrength: '',
    requirement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaChecked) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);

    try {
      // Placeholder function call
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default placeholder behavior
        console.log('Form submitted:', formData);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        alert('Demo request submitted successfully!');
      }

      // Reset form
      setFormData({
        fullName: '',
        designation: '',
        companyName: '',
        mobileNumber: '',
        workEmail: '',
        industry: '',
        city: '',
        employeeStrength: '',
        requirement: '',
      });
      setRecaptchaChecked(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionContainer id='contact-us'>
      <ContentWrapper>
        <LeftSection>
          <TitleSection>
            <ContactTitle>Contact Us</ContactTitle>
            <MainHeadline>
              <CutToTheText>LET'S CUT TO THE </CutToTheText>
              <ChaseText>CHASE</ChaseText>
            </MainHeadline>
            <Subtitle>
              Your employees want this. Your bottom line needs this. What are
              you waiting for?
            </Subtitle>
          </TitleSection>

          <ImageSection>
            <JumpingGirlImage
              src={girljumpImage}
              alt='Jumping Girl'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
          </ImageSection>
        </LeftSection>

        <FormSection>
          <Form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Input
                  name='fullName'
                  placeholder='Full Name'
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name='designation'
                  placeholder='Your Designation'
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Input
                  name='companyName'
                  placeholder='Company Name'
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name='mobileNumber'
                  placeholder='Mobile Number'
                  type='tel'
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Input
                  name='workEmail'
                  placeholder='Work E-mail'
                  type='email'
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Select
                  name='industry'
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value=''>Industry</option>
                  <option value='technology'>Technology</option>
                  <option value='healthcare'>Healthcare</option>
                  <option value='finance'>Finance</option>
                  <option value='manufacturing'>Manufacturing</option>
                  <option value='retail'>Retail</option>
                  <option value='education'>Education</option>
                  <option value='other'>Other</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Input
                  name='city'
                  placeholder='Which City Is This Enquiry For?'
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Select
                  name='employeeStrength'
                  value={formData.employeeStrength}
                  onChange={handleChange}
                  required
                >
                  <option value=''>Employee Strength</option>
                  <option value='1-50'>1-50</option>
                  <option value='51-200'>51-200</option>
                  <option value='201-500'>201-500</option>
                  <option value='501-1000'>501-1000</option>
                  <option value='1001-5000'>1001-5000</option>
                  <option value='5000+'>5000+</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FullWidthFormGroup>
              <TextArea
                name='requirement'
                placeholder='Briefly Describe Your Corporate Requirement'
                value={formData.requirement}
                onChange={handleChange}
                rows={4}
              />
            </FullWidthFormGroup>

            <RecaptchaContainer>
              <RecaptchaCheckbox
                type='checkbox'
                checked={recaptchaChecked}
                onChange={e => setRecaptchaChecked(e.target.checked)}
                required
              />
              <RecaptchaText>
                I'm not a robot (reCAPTCHA placeholder)
              </RecaptchaText>
            </RecaptchaContainer>

            <SubmitButton
              type='submit'
              disabled={isSubmitting}
              whileHover={{
                scale: isSubmitting ? 1 : 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Submitting...' : 'Request A Demo'}
            </SubmitButton>
          </Form>
        </FormSection>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ContactUs;
