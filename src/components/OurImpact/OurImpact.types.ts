export interface VideoData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

export interface OurImpactProps {
  videos?: VideoData[];
}
