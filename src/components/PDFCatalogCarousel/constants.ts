import type { CatalogItem } from './PDFCatalogCarousel.types';
import Catalog1 from '../../assets/images/LastLogo/Catalogue-1.webp';
import CorporatePDF from '../../assets/images/LastLogo/cult_for_corporate logo.pdf';

/**
 * CATALOG DATA - Hard-coded catalog items for the PDF carousel
 *
 * Each catalog item contains:
 * - id: Unique identifier for carousel navigation
 * - imageSrc: Path to the catalog cover image
 * - altText: Accessible description for screen readers
 * - pdfUrl: Download link for the PDF file
 * - title: Display title for the catalog
 */
export const catalogItems: readonly CatalogItem[] = [
  {
    id: 1,
    imageSrc: Catalog1,
    altText: 'Employee Health and Wellness Guide 2023',
    pdfUrl: CorporatePDF,
    title: 'Employee Health & Wellness 2023',
  },
  {
    id: 2,
    imageSrc: Catalog1,
    altText: 'Corporate Fitness Programs Catalog',
    pdfUrl: CorporatePDF,
    title: 'Corporate Fitness Programs',
  },
  {
    id: 3,
    imageSrc: Catalog1,
    altText: 'Mental Health Initiatives Guide',
    pdfUrl: CorporatePDF,
    title: 'Mental Health Initiatives',
  },
  {
    id: 4,
    imageSrc: Catalog1,
    altText: 'Workplace Nutrition Handbook',
    pdfUrl: CorporatePDF,
    title: 'Workplace Nutrition Handbook',
  },
  {
    id: 5,
    imageSrc: Catalog1,
    altText: 'Team Building Activities Guide',
    pdfUrl: CorporatePDF,
    title: 'Team Building Activities',
  },
] as const;
