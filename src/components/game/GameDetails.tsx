import { useEffect, useState } from "react";
import {
  ArrowsPointingOutIcon,
  ClockIcon,
  DocumentTextIcon,
  MapIcon,
  PuzzlePieceIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import type { Game } from "../../types/game";

import { GameDetail } from "./GameDetail";
import { GameRating } from "./GameRating";

const formatPlaytime = (game: Game) => {
  const playtime = game.playtime;
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

const formatPlayers = (game: Game) => {
  const players = game.players;
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
    return `${basePlayers} (${players.best})`;
  } else {
    return basePlayers;
  }
};

export const GameDetails = ({ game }: { game: Game }) => {
  const [formattedPlaytime, setFormattedPlaytime] = useState<string>("");
  const [formattedPlayers, setFormattedPlayers] = useState<string>("");

  useEffect(() => {
    setFormattedPlaytime(formatPlaytime(game));
    setFormattedPlayers(formatPlayers(game));
  }, [game]);

  return (
    <div className="mt-8 flex justify-around gap-4 max-w-4xl mx-auto">
      <div className="flex flex-col justify-evenly gap-4">
        {formattedPlaytime && (
          <GameDetail
            Icon={ClockIcon}
            value={formattedPlaytime}
            label="Minutes"
          />
        )}
        <GameDetail
          Icon={PuzzlePieceIcon}
          value={game.counters?.total?.toFixed(0) || "-"}
          label="Counters"
        />
        <GameDetail
          Icon={ArrowsPointingOutIcon}
          value={game.counters?.size || "-"}
          label="Counter Size"
        />
      </div>

      <div className="hidden lg:block">
        <GameRating game={game} />
      </div>

      <div className="flex flex-col justify-evenly gap-4">
        {formattedPlayers && (
          <GameDetail
            Icon={UserIcon}
            value={formattedPlayers}
            label="Players"
          />
        )}

        <GameDetail
          Icon={MapIcon}
          value={
            game.maps?.reduce((acc, map) => acc + map.count, 0).toFixed(0) ||
            "-"
          }
          label={
            (game.maps?.reduce((acc, map) => acc + map.count, 0) ?? 2) != 1
              ? "Maps"
              : "Map"
          }
        />

        <GameDetail
          Icon={DocumentTextIcon}
          value={game.scenarios?.toFixed(0) || "-"}
          label="Scenarios"
        />
      </div>
    </div>
  );
};
