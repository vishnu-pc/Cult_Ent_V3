export interface TileData {
  id: number;
  image: string;
  title: string;
  description: string;
  backgroundPosition?: string; // Optional custom background position for non-expanded state
}

export interface ExpandableTilesProps {
  tiles: TileData[];
}
