/**
 * Salesforce API Integration Service
 *
 * This service handles the integration with Salesforce API for lead generation
 * and contact form submissions. It provides methods to submit form data to
 * Salesforce and handle responses.
 */

interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  employeeCount: string;
  phone?: string;
  message?: string;
}

interface SalesforceResponse {
  success: boolean;
  id?: string;
  errors?: string[];
}

/**
 * Submits a lead to Salesforce
 *
 * @param data - The lead data from the contact form
 * @returns A promise that resolves to the Salesforce response
 */
export const submitLeadToSalesforce = async (
  data: LeadData
): Promise<SalesforceResponse> => {
  try {
    // In a real implementation, this would be an actual API endpoint
    // const apiEndpoint = process.env.REACT_APP_SALESFORCE_ENDPOINT || '/api/salesforce/lead';
    const apiEndpoint = '/api/salesforce/lead'; // Placeholder endpoint

    // Simulate API call to Salesforce
    // In production, replace this with an actual API call
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add authentication headers as required by your Salesforce setup
        // 'Authorization': `Bearer ${process.env.REACT_APP_SALESFORCE_TOKEN}`,
      },
      body: JSON.stringify({
        FirstName: data.firstName,
        LastName: data.lastName,
        Email: data.email,
        Company: data.company,
        NumberOfEmployees: data.employeeCount,
        Phone: data.phone || '',
        Description: data.message || '',
        LeadSource: 'Website',
        Status: 'Open - Not Contacted',
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to submit form: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting to Salesforce:', error);
    throw error;
  }
};

/**
 * For development and testing purposes only
 * This function simulates a Salesforce API response
 *
 * @param data - The lead data from the contact form
 * @returns A promise that resolves to a mock Salesforce response
 */
export const simulateSalesforceSubmission = async (
  _data: LeadData
): Promise<SalesforceResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate random success/failure for demo
  const isSuccess = Math.random() > 0.1; // 90% success rate

  if (isSuccess) {
    return {
      success: true,
      id: `lead_${Date.now()}`,
    };
  } else {
    return {
      success: false,
      errors: ['Failed to submit lead to Salesforce'],
    };
  }
};

export default {
  submitLeadToSalesforce,
  simulateSalesforceSubmission,
};
