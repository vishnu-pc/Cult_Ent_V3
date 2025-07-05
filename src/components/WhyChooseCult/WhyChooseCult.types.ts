export interface WhyChooseCultProps {}

export interface Reason {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
}

// Add to WhyChooseCult.types.ts
export interface ResultTile {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ResultsSectionProps {
  tiles?: ResultTile[];
}
