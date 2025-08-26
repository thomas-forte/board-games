export interface Game {
  name: string;
  publisher: string;
  releaseYear: number;
  averageRating: number;
  players: string;
  playtime: string;
  complexityRating: number;
  type: string;
  nobleKnightPrice: number;
  nobleKnightCondition: string;
  numberOfCounters: number;
  numberOfMaps: number;
  extraScenarios: number;
  nobleKnight?: string;
  boardGameGeek: string;
  tags: string[];
}
