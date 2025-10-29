import { useEffect, useState } from "react";

import type { Game } from "../../types/game";
import { GameRatingComplexityText } from "./GameRatingComplexityText";

type ComplexityRating = "good" | "medium" | "bad" | undefined;

const determineComplexityRating = (game: Game): ComplexityRating => {
  if (!game) {
    return undefined;
  } else if (game.complexityRating < 3) {
    return "good";
  } else if (game.complexityRating >= 3 && game.complexityRating < 4) {
    return "medium";
  } else {
    return "bad";
  }
};

export const GameRatingComplexity = ({ game }: { game: Game }) => {
  const [complexityRating, setComplexityRating] =
    useState<ComplexityRating>(undefined);

  useEffect(() => {
    setComplexityRating(determineComplexityRating(game));
  }, [game]);

  return (
    <div className="w-full flex justify-center items-center gap-4 mb-[4rem]">
      <div
        className={`bad-inset bg-bad-accent rounded-full flex-grow border-[1.5px] border-background ${
          complexityRating === "bad" ? "h-10" : "h-5"
        }`}
      >
        {complexityRating === "bad" && (
          <GameRatingComplexityText complexityRating={game.complexityRating} />
        )}
      </div>
      <div
        className={`medium-inset bg-medium-accent rounded-full flex-grow border-[1.5px] border-background ${
          complexityRating === "medium" ? "h-10" : "h-5"
        }`}
      >
        {complexityRating === "medium" && (
          <GameRatingComplexityText complexityRating={game.complexityRating} />
        )}
      </div>
      <div
        className={`good-inset bg-good-accent rounded-full  flex-grow border-[1.5px] border-background ${
          complexityRating === "good" ? "h-10" : "h-5"
        }`}
      >
        {complexityRating === "good" && (
          <GameRatingComplexityText complexityRating={game.complexityRating} />
        )}
      </div>
    </div>
  );
};
