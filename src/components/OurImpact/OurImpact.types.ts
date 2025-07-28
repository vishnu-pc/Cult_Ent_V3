export interface VideoData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail?: string; // Optional since YouTube provides its own thumbnails
  videoUrl: string;
}

export interface OurImpactProps {
  videos?: VideoData[];
}
