import type { Game } from "../types/game";

import { DataList } from "./DataList";
import { DataRow } from "./DataRow";
import { ProgressBar } from "./ProgressBar";
import { StarRating } from "./StarRating";

import bggLogo from "../assets/bgg_logo.svg";
import nkLogo from "../assets/nk_logo.png";

const formatPlayers = (players: Game["players"]) => {
  let basePlayers = "";
  if (players.min === players.max) {
    basePlayers = `${players.min} player${players.min === 1 ? "" : "s"}`;
  } else if (players.min && players.max) {
    basePlayers = `${players.min} - ${players.max} players`;
  } else if (players.min) {
    basePlayers = `${players.min} player${players.min === 1 ? "" : "s"}`;
  } else if (players.max) {
    basePlayers = `${players.max} player${players.max === 1 ? "" : "s"}`;
  }

  if (players.best) {
    return `${basePlayers} (Best: ${players.best})`;
  } else {
    return basePlayers;
  }
};

const formatPlaytime = (playtime: Game["playtime"]) => {
  if (playtime.min === playtime.max) {
    return `${playtime.min} minutes`;
  } else if (playtime.min && playtime.max) {
    return `${playtime.min} - ${playtime.max} minutes`;
  } else if (playtime.min) {
    return `${playtime.min} minutes`;
  } else if (playtime.max) {
    return `${playtime.max} minutes`;
  } else {
    return "N/A";
  }
};

export const GameCard = (game: Game) => {
  return (
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
      <div className="p-3">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
          {game.name || "N/A"}
        </h3>
        <p className="max-w-2xl text-sm/6 text-gray-500 dark:text-gray-300">
          {game.publishers?.join(", ") || "N/A"}
        </p>
      </div>
      <div className="border-t border-gray-100 dark:border-white/5">
        <DataList>
          <DataRow labelNode="Release Year" valueNode={game.releaseYear} />
          <DataRow
            labelNode="Average Rating"
            valueNode={
              <ProgressBar
                percentage={game.bggRating * 10}
                displayValue={game.bggRating.toFixed(2)}
              />
            }
          />
          <DataRow
            labelNode="Players"
            valueNode={formatPlayers(game.players)}
          />
          <DataRow
            labelNode="Playtime"
            valueNode={formatPlaytime(game.playtime)}
          />
          <DataRow
            labelNode="Complexity Rating"
            valueNode={<StarRating rating={game.complexityRating} />}
          />
          {/* <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Type
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.type || "N/A"}
            </dd>
          </div> */}
          {/* <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Noble Knight Price
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.nobleKnightPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              }) || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Noble Knight Condition
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.nobleKnightCondition || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Number of Counters
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.numberOfCounters || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Number of Maps
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.numberOfMaps || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Extra Scenarios
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.extraScenarios || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Noble Knight
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              <a
                href={game.nobleKnight || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {game.nobleKnight || "N/A"}
              </a>
            </dd>
          </div> */}
          <DataRow
            labelNode="Links"
            valueNode={
              <div className="flex gap-2">
                <a
                  className="hover:opacity-75"
                  href={game.bggUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="h-8" src={bggLogo} alt="Board Game Geek" />
                </a>
                <a
                  className="hover:opacity-75"
                  href={game.nobleKnightUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="h-8" src={nkLogo} alt="Noble Knight" />
                </a>
              </div>
            }
          />
          <DataRow
            labelNode="Tags"
            valueNode={
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 rounded-md px-2 py-1 text-xs text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            }
          />
        </DataList>
      </div>
    </div>
  );
};
