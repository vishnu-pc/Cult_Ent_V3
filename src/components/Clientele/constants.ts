// Company logo imports
import accenture from '../../assets/images/Clientele/Company-logos/accenture.png';
import americanExp from '../../assets/images/Clientele/Company-logos/American-exp.png';
import bcg from '../../assets/images/Clientele/Company-logos/Bcg.png';
import bosch from '../../assets/images/Clientele/Company-logos/Bosch.png';
import citibank from '../../assets/images/Clientele/Company-logos/citibank.png';
import daimler from '../../assets/images/Clientele/Company-logos/Daimler.png';
import pg from '../../assets/images/Clientele/Company-logos/P&g.png';
import deloitte from '../../assets/images/Clientele/Company-logos/Delloitte.png';
import ey from '../../assets/images/Clientele/Company-logos/EY.png';
import fidelity from '../../assets/images/Clientele/Company-logos/fidelity.png';
import kansaiNerolac from '../../assets/images/Clientele/Company-logos/Kensai-nerolac.png';
import optum from '../../assets/images/Clientele/Company-logos/Optum.png';

// Company logo interface
export interface CompanyLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
}

// Array of company logos for the carousel
export const companyLogos: CompanyLogo[] = [
  {
    id: 'accenture',
    name: 'Accenture',
    src: accenture,
    alt: 'Accenture company logo',
  },
  {
    id: 'american-express',
    name: 'American Express',
    src: americanExp,
    alt: 'American Express company logo',
  },
  {
    id: 'bcg',
    name: 'Boston Consulting Group',
    src: bcg,
    alt: 'BCG company logo',
  },
  {
    id: 'bosch',
    name: 'Bosch',
    src: bosch,
    alt: 'Bosch company logo',
  },
  {
    id: 'citibank',
    name: 'Citibank',
    src: citibank,
    alt: 'Citibank company logo',
  },
  {
    id: 'daimler',
    name: 'Daimler',
    src: daimler,
    alt: 'Daimler company logo',
  },
  {
    id: 'procter-gamble',
    name: 'Procter & Gamble',
    src: pg,
    alt: 'P&G company logo',
  },
  {
    id: 'deloitte',
    name: 'Deloitte',
    src: deloitte,
    alt: 'Deloitte company logo',
  },
  {
    id: 'ernst-young',
    name: 'Ernst & Young',
    src: ey,
    alt: 'EY company logo',
  },
  {
    id: 'fidelity',
    name: 'Fidelity',
    src: fidelity,
    alt: 'Fidelity company logo',
  },
  {
    id: 'kansai-nerolac',
    name: 'Kansai Nerolac',
    src: kansaiNerolac,
    alt: 'Kansai Nerolac company logo',
  },
  {
    id: 'optum',
    name: 'Optum',
    src: optum,
    alt: 'Optum company logo',
  },
];

// Duplicate the logos array for seamless infinite scroll
// Using 3 sets ensures continuous coverage during animation reset
export const duplicatedLogos: CompanyLogo[] = [
  ...companyLogos,
  ...companyLogos,
  ...companyLogos,
];
