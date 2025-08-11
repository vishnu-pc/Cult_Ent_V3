export interface TileData {
  id: number;
  image: string; // default fallback image
  imageSet?: string; // CSS image-set string for responsive backgrounds
  title: string;
  description: string;
  backgroundPosition?: string; // Optional custom background position for non-expanded state
}

export interface ExpandableTilesProps {
  tiles: TileData[];
}
