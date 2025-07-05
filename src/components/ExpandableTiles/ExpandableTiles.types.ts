export interface TileData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface ExpandableTilesProps {
  tiles: TileData[];
}
