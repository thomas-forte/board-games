import { useParams } from "react-router";

import type { Game as GameType } from "../types/game";

import { Game } from "../components/game/Game";

import gamesData from "../assets/scraped.json";

export const GamePage = () => {
  const { gameId } = useParams();

  const game: GameType | undefined = gamesData.find(
    (game) => game.id === gameId
  );

  if (!game) {
    return <div>Game not found</div>;
  }

  return <Game game={game} />;
};
