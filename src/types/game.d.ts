export interface Game {
  id: uuid;
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
  nobleKnightUrl: string;
  tags: string[];
}
