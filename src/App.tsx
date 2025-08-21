import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { GameCard, type Game } from "./GameCard";
import data from "./assets/data.json";

function App() {
  const [selectedTag, setSelectedTag] = useState("");

  const games = data as Game[];

  const tags = [...new Set(games.flatMap((game) => game.tags))];

  const getGames = () =>
    games.filter((game) =>
      selectedTag ? game.tags.includes(selectedTag) : game
    );

  const formatTag = (tag: string) => {
    return tag
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="p-4 bg-gray-100">
      <div>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1">
            <select
              aria-label="Select a tag"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-gray-100 dark:outline-white/10 dark:*:bg-gray-800 dark:focus:outline-indigo-500"
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {formatTag(tag)}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500 dark:fill-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getGames().map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
}

export default App;
