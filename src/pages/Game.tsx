import { useParams } from "react-router";
import {
  ArrowsPointingOutIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  MapIcon,
  PuzzlePieceIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

import type { Game as GameType } from "../types/game";

import { Card } from "../components/Card";

import gamesData from "../assets/scraped.json";
import bggLogo from "../assets/bgg_logo.svg";
import nkLogo from "../assets/nk_logo.png";

export const Game = () => {
  const { gameId } = useParams();

  const game: GameType | undefined = gamesData.find(
    (game) => game.id === gameId
  );

  if (!game) {
    return <div>Game not found</div>;
  }

  const formatPlaytime = (playtime: GameType["playtime"]) => {
    if (playtime.min === playtime.max) {
      return `${playtime.min}`;
    } else if (playtime.min && playtime.max) {
      return `${playtime.min} - ${playtime.max}`;
    } else if (playtime.min) {
      return `${playtime.min}`;
    } else if (playtime.max) {
      return `${playtime.max}`;
    } else {
      return "N/A";
    }
  };

  const formatPlayers = (players: GameType["players"]) => {
    let basePlayers = "";
    if (players.min === players.max) {
      basePlayers = `${players.min}`;
    } else if (players.min && players.max) {
      basePlayers = `${players.min} - ${players.max}`;
    } else if (players.min) {
      basePlayers = `${players.min}`;
    } else if (players.max) {
      basePlayers = `${players.max}`;
    }

    if (players.best) {
      return `${basePlayers} (Best: ${players.best})`;
    } else {
      return basePlayers;
    }
  };

  return (
    <>
      <h1 className="text-[2rem] font-semibold font-oswald text-primary uppercase text-center mt-8">
        {game.name}
      </h1>

      {game.publishers.length > 0 && (
        <h2 className="text-[1.5rem] font-lato text-primary-neutral uppercase text-center mt-4">
          {game.publishers[0]}
        </h2>
      )}

      <h3 className="font-lato text-primary-neutral uppercase text-center">
        {game.releaseYear}
      </h3>

      <h4 className="text-[.875rem] font-lato text-primary-neutral uppercase text-center">
        game type
      </h4>

      <Card className="mt-4 py-2 px-10">
        <p>{game.bggRating}</p>

        <div className="w-full flex justify-center items-center gap-4 mb-[2rem]">
          <div className="bg-positive-accent rounded-full h-7 flex-grow border-1 border-background">
            {game.complexityRating < 3 && (
              <div className="relative top-[150%] text-center text-[1rem] leading-[1rem]">
                {game.complexityRating.toFixed(2)}
                <span className="text-[.625rem] leading-[.625rem]">/5</span>
              </div>
            )}
          </div>
          <div className="bg-warning-accent rounded-full h-4 flex-grow border-1 border-background">
            {game.complexityRating >= 3 && game.complexityRating < 4 && (
              <div className="relative top-[150%] text-center text-[1rem] leading-[1rem]">
                {game.complexityRating.toFixed(2)}
                <span className="text-[.625rem] leading-[.625rem]">/5</span>
              </div>
            )}
          </div>
          <div className="bg-alert-accent rounded-full h-4 flex-grow border-1 border-background">
            {game.complexityRating >= 4 && (
              <div className="relative top-[150%] text-center text-[1rem] leading-[1rem]">
                {game.complexityRating.toFixed(2)}
                <span className="text-[.625rem] leading-[.625rem]">/5</span>
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex justify-center items-center gap-4">
          <ClockIcon className="size-8 text-primary" />
          <div className="flex flex-col items-center">
            <div className="text-[1.25rem] leading-[1.25rem] font-lato text-primary-neutral uppercase">
              {formatPlaytime(game.playtime)}
            </div>
            <div className="text-[.75rem] font-lato text-primary-neutral uppercase">
              minutes
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <UserIcon className="size-8 text-primary" />
          <div className="flex flex-col items-center">
            <div className="text-[1.25rem] leading-[1.25rem] font-lato text-primary-neutral uppercase">
              {formatPlayers(game.players)}
            </div>
            <div className="text-[.75rem] font-lato text-primary-neutral uppercase">
              players
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <PuzzlePieceIcon className="size-8 text-primary" />
          <div className="flex flex-col items-center">
            <div className="text-[1.25rem] leading-[1.25rem] font-lato text-primary-neutral uppercase">
              "TBD"
            </div>
            <div className="text-[.75rem] font-lato text-primary-neutral uppercase">
              Counters
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <MapIcon className="size-8 text-primary" />
          <div className="flex flex-col items-center">
            <div className="text-[1.25rem] leading-[1.25rem] font-lato text-primary-neutral uppercase">
              "TBD"
            </div>
            <div className="text-[.75rem] font-lato text-primary-neutral uppercase">
              Map
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <ArrowsPointingOutIcon className="size-8 text-primary" />
          <div className="flex flex-col items-center">
            <div className="text-[1.25rem] leading-[1.25rem] font-lato text-primary-neutral uppercase">
              "TBD"
            </div>
            <div className="text-[.75rem] font-lato text-primary-neutral uppercase">
              Counter Size
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <DocumentTextIcon className="size-8 text-primary" />
          <div className="flex flex-col items-center">
            <div className="text-[1.25rem] leading-[1.25rem] font-lato text-primary-neutral uppercase">
              "TBD"
            </div>
            <div className="text-[.75rem] font-lato text-primary-neutral uppercase">
              Scenarios
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4 border-secondary-neutral border-1" />

      <div className="flex justify-center items-center gap-4">
        <CurrencyDollarIcon className="size-12 text-primary" />
        <div className="flex flex-col items-center">
          <div className="text-[1.5rem] leading-[1.5rem] font-lato text-primary-neutral uppercase">
            "TBD"
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
        {/* if game link is not empty */}
        <a
          className="hover:opacity-75"
          href={game.nobleKnightUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobeAltIcon className="size-10 text-primary" />
        </a>
        <a
          className="hover:opacity-75"
          href={game.bggUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-10" src={bggLogo} alt="Board Game Geek" />
        </a>
      </div>

      <hr className="my-4 border-secondary-neutral border-1" />

      <div className="text-[1.5rem] leading-[1.5rem] font-lato text-primary-neutral uppercase text-center">
        Rules
      </div>
    </>
  );
};
