import { useParams } from "react-router";

import gamesData from "../assets/scraped.json";
import type { Game as GameType } from "../types/game";

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
      <h1 className="text-[4rem] font-semibold font-oswald text-primary uppercase text-center mt-8">
        {game.name}
      </h1>
      <p>{game.publishers.join(", ")}</p>
      <p>{game.releaseYear}</p>
      <p>{game.bggRating}</p>
      <p>{game.players.min}</p>
      <p>{game.players.max}</p>
      <p>{game.players.best}</p>
      <p>{game.playtime.min}</p>
      <p>{game.playtime.max}</p>
      <p>{game.complexityRating}</p>
      <p>{game.bggUrl}</p>
      <p>{game.nobleKnightUrl}</p>
      <p>{game.tags.join(", ")}</p>
    </>
  );
};
