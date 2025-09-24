import { useEffect, useState } from "react";

import type { Game } from "../../types/game";

import { Card } from "../../components/Card";

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

export const GameRating = ({ game }: { game: Game }) => {
  const [complexityRating, setComplexityRating] =
    useState<ComplexityRating>(undefined);

  useEffect(() => {
    setComplexityRating(determineComplexityRating(game));
  }, [game]);

  return (
    <Card className="mt-4 py-2 px-10">
      <p>{game.bggRating}</p>

      <div className="w-full flex justify-center items-center gap-4 mb-[2rem]">
        <div
          className={`bg-good-accent rounded-full  flex-grow border-1 border-background ${
            complexityRating === "good" ? "h-7" : "h-4"
          }`}
        >
          {complexityRating === "good" && (
            <div className="relative top-[150%] text-center text-[1rem] leading-[1rem]">
              {game.complexityRating.toFixed(2)}
              <span className="text-[.625rem] leading-[.625rem]">/5</span>
            </div>
          )}
        </div>
        <div
          className={`bg-medium-accent rounded-full flex-grow border-1 border-background ${
            complexityRating === "medium" ? "h-7" : "h-4"
          }`}
        >
          {complexityRating === "medium" && (
            <div className="relative top-[150%] text-center text-[1rem] leading-[1rem]">
              {game.complexityRating.toFixed(2)}
              <span className="text-[.625rem] leading-[.625rem]">/5</span>
            </div>
          )}
        </div>
        <div
          className={`bg-bad-accent rounded-full flex-grow border-1 border-background ${
            complexityRating === "bad" ? "h-7" : "h-4"
          }`}
        >
          {complexityRating === "bad" && (
            <div className="relative top-[150%] text-center text-[1rem] leading-[1rem]">
              {game.complexityRating.toFixed(2)}
              <span className="text-[.625rem] leading-[.625rem]">/5</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
