import { useParams } from "react-router";

import gamesData from "../assets/scraped.json";
import type { Game as GameType } from "../types/game";
import { Card } from "../components/Card";

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

  return (
    <>
      <h1 className="text-[2rem] font-semibold font-oswald text-primary uppercase text-center mt-8">
        {game.name}
      </h1>

      {game.publishers.length > 1 && (
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

      <Card>
        <p>{game.bggRating}</p>
        <p>{game.complexityRating}</p>
      </Card>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p>{game.playtime.min}</p>
          <p>{game.playtime.max}</p>
        </div>
        <div>
          <p>{game.players.min}</p>
          <p>{game.players.max}</p>
          <p>{game.players.best}</p>
        </div>
        <div>counters</div>
        <div>maps</div>
        <div>counter size</div>
        <div>scenarios</div>
      </div>
      <div>cost</div>

      <div className="flex justify-around items-center gap-4">
        <a
          className="hover:opacity-75"
          href={game.bggUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-8" src={bggLogo} alt="Board Game Geek" />
        </a>
        {/* if game link is not empty */}
        <a
          className="hover:opacity-75"
          href={game.nobleKnightUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-8" src={nkLogo} alt="Noble Knight" />
        </a>
      </div>

      <div>rules</div>
    </>
  );
};
