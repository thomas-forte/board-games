export interface Game {
  name: string;
  publishers: string[];
  releaseYear: number;
  bggRating: number;
  players: {
    min: number;
    max: number;
    best: string;
  };
  playtime: {
    min: number;
    max: number;
  };
  complexityRating: number;
  bggUrl: string;
  tags: string[];
}
