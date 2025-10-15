export interface Game {
  id: uuid;
  name: string;
  publishers: string[];
  releaseYear: number;
  bggRating: number;
  players: {
    min?: number;
    max?: number;
    best?: string;
  };
  playtime: {
    min?: number;
    max?: number;
  };
  complexityRating: number;
  bggUrl: string;
  nobleKnightUrl: string;
  tags: string[];
  // manual data
  warfareLevel?: "tactical" | "strategic" | "operational";
  officialUrl?: string;
  rulesUrl?: string;
  counters?: {
    total?: number;
    size?: string;
  };
  cost?: {
    min?: number;
    max?: number;
  };
  maps?: {
    size: string;
    count: number;
  }[];
  scenarios?: number;
}
