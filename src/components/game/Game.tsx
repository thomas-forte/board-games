import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

import type { Game as GameType } from "../../types/game";

import { GameTitle } from "./GameTitle";
import { GameRating } from "./GameRating";
import { GameDetails } from "./GameDetails";

import bggLogo from "../../assets/bgg_logo.svg";
import nkLogo from "../../assets/nk_logo.png";

const formatCost = (game: GameType) => {
  const cost = game.cost;
  if (!cost) {
    return "Out of stock";
  }
  if (cost.min && cost.max) {
    return `${cost.min} - ${cost.max}`;
  } else if (cost.min) {
    return `${cost.min}`;
  } else if (cost.max) {
    return `${cost.max}`;
  } else {
    return "Out of stock";
  }
};

export const Game = ({ game }: { game: GameType }) => {
  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <>
      <GameTitle game={game} />
      <GameRating game={game} />
      <GameDetails game={game} />

      <hr className="my-4 border-secondary-neutral border-1" />

      <div className="flex justify-center items-center gap-4">
        <CurrencyDollarIcon className="size-12 text-primary" />
        <div className="flex flex-col items-center">
          <div className="text-[1.5rem] leading-[1.5rem] font-lato text-primary-neutral uppercase">
            {formatCost(game)}
          </div>
          <div className="text-[1rem] font-lato text-primary-neutral uppercase">
            Cost
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 mt-4">
        <a
          className="hover:opacity-75"
          href={game.nobleKnightUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-10" src={nkLogo} alt="Noble Knight" />
        </a>
        {game.officialUrl && (
          <a
            className="hover:opacity-75"
            href={game.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeAltIcon className="size-10 text-primary" />
          </a>
        )}
        <a
          className="hover:opacity-75"
          href={game.bggUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-10" src={bggLogo} alt="Board Game Geek" />
        </a>
      </div>

      {game.rulesUrl && (
        <>
          <hr className="my-4 border-secondary-neutral border-1" />
          <div className="text-[1.5rem] leading-[1.5rem] font-lato text-primary-neutral uppercase text-center">
            Rules
          </div>
        </>
      )}
    </>
  );
};
