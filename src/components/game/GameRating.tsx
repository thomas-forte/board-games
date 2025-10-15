import type { Game } from "../../types/game";

import { Card } from "../../components/Card";
import { GameRatingComplexity } from "./GameRatingComplexity";

export const GameRating = ({ game }: { game: Game }) => {
  return (
    <Card className="mt-4 py-2 px-10 w-[20rem] w-max-content mx-auto font-lato">
      <div className="my-4">
        <div className="text-center text-[1.5rem] leading-[1.5rem]">
          {game.bggRating.toFixed(2)}
          <span className="text-[1rem] leading-[1rem]">/10</span>
        </div>
        <div className="text-center uppercase text-[.625rem]">Avg. Rating</div>
      </div>

      <GameRatingComplexity game={game} />
    </Card>
  );
};
