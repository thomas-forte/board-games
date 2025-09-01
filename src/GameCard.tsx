import type { Game } from "./types/game";

import { DataList } from "./components/DataList";
import { DataRow } from "./components/DataRow";
import { ProgressBar } from "./components/ProgressBar";
import { StarRating } from "./components/StarRating";

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
            valueNode={`${game.players.min} - ${game.players.max} (Best: ${game.players.best})`}
          />
          <DataRow
            labelNode="Playtime"
            valueNode={`${game.playtime.min} - ${game.playtime.max}`}
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
            labelNode="Board Game Geek"
            valueNode={
              <a href={game.bggUrl} target="_blank" rel="noopener noreferrer">
                {game.bggUrl}
              </a>
            }
          />
          <DataRow
            labelNode="Noble Knight"
            valueNode={
              <a
                href={game.nobleKnightUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {game.nobleKnightUrl}
              </a>
            }
          />
          <DataRow
            labelNode="Tags"
            valueNode={
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 rounded-md px-2 py-1 text-sm"
                  >
                    {tag.replaceAll("_", " ").toUpperCase()}
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
