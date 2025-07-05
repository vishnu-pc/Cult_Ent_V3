export interface TileData {
  id: number;
  title?: string;
  value?: string;
  description: string;
  backgroundImage?: string;
  hasImage: boolean;
  position?: string;
}

export interface NumbersDontLieProps {
  tiles?: TileData[];
}
