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
    return `${basePlayers} (👍 ${players.best})`;
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
    <div className="mt-4 grid grid-cols-2 gap-4">
      {formattedPlaytime && (
        <GameDetail
          Icon={ClockIcon}
          value={formattedPlaytime}
          label="minutes"
        />
      )}

      {formattedPlayers && (
        <GameDetail Icon={UserIcon} value={formattedPlayers} label="players" />
      )}

      <GameDetail
        Icon={PuzzlePieceIcon}
        value={game.counters?.total?.toFixed(0) || "-"}
        label="counters"
      />

      <GameDetail
        Icon={MapIcon}
        value={game.maps?.length?.toFixed(0) || "-"}
        label="maps"
      />

      <GameDetail
        Icon={ArrowsPointingOutIcon}
        value={game.counters?.size || "-"}
        label="counter size"
      />

      <GameDetail
        Icon={DocumentTextIcon}
        value={game.scenarios?.toFixed(0) || "-"}
        label="scenarios"
      />
    </div>
  );
};
