export interface ContactFormData {
  fullName: string;
  designation: string;
  companyName: string;
  mobileNumber: string;
  workEmail: string;
  industry: string;
  city: string;
  employeeStrength: string;
  requirement: string;
}

export interface ContactUsProps {
  onSubmit?: (data: ContactFormData) => void;
} 