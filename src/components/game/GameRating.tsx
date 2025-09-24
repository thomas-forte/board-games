import type { Game } from "../../types/game";

import { Card } from "../../components/Card";
import { GameRatingComplexity } from "./GameRatingComplexity";

export const GameRating = ({ game }: { game: Game }) => {
  return (
    <Card className="mt-4 py-2 px-10 w-[20rem] w-max-content mx-auto">
      <p>{game.bggRating}</p>

      <GameRatingComplexity game={game} />
    </Card>
  );
};
