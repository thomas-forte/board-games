import { StarIcon } from "@heroicons/react/24/solid";
import type { Game } from "./types/game";

export const GameCard = (game: Game) => {
  return (
    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10">
      <div className="p-3">
        <h3 className="text-base/7 font-semibold text-gray-900 dark:text-white">
          {game.name || "N/A"}
        </h3>
        <p className="max-w-2xl text-sm/6 text-gray-500 dark:text-gray-300">
          {game.publisher || "N/A"}
        </p>
      </div>
      <div className="border-t border-gray-100 dark:border-white/5">
        <dl className="divide-y divide-gray-100 dark:divide-white/5">
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Release Year
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.releaseYear || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Average Rating
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              <div className="overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
                <div
                  style={{ width: `${game.averageRating * 10}%` }}
                  className="h-2 rounded-full bg-yellow-500 dark:bg-yellow-500"
                />
              </div>
              <small className="text-gray-500">
                {game.averageRating || "N/A"}
              </small>
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Players
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.players || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Playtime
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.playtime || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Complexity Rating
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.complexityRating ? (
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        game.complexityRating + 0.5 > i + 1
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <small className="ml-2 text-gray-500">
                    {game.complexityRating} of 5
                  </small>
                </div>
              ) : (
                "N/A"
              )}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Type
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              {game.type || "N/A"}
            </dd>
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
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
          </div>
          <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Board Game Geek
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
              <a
                href={game.boardGameGeek || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {game.boardGameGeek || "N/A"}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
