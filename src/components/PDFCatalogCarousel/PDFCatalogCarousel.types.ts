/**
 * PDF Catalog item data structure
 */
export interface CatalogItem {
  id: number;
  imageSrc: string;
  altText: string;
  pdfUrl: string;
  title: string;
}

/**
 * Props for the PDFCatalogCarousel component.
 * This interface currently serves as a placeholder and can be extended
 * with additional props as the component evolves.
 */
export interface PDFCatalogCarouselProps {
  className?: string;
}
