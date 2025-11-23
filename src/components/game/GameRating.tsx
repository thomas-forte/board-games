import type { Game } from "../../types/game";

import { Card } from "../../components/Card";
import { GameRatingChart } from "./GameRatingChart";
import { GameRatingComplexity } from "./GameRatingComplexity";

export const GameRating = ({ game }: { game: Game }) => (
  <Card className="py-2 px-10 w-[15rem] lg:w-[20rem] w-max-content font-lato">
    <GameRatingChart rating={game.bggRating} />

    <GameRatingComplexity game={game} />
  </Card>
);
