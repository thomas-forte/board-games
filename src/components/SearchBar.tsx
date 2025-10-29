import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import type { Game } from "../types/game";

import gamesData from "../assets/scraped.json";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const games = gamesData as Game[];

  const filteredGames =
    query === ""
      ? games
      : games.filter((game) => {
          return game.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      onChange={(game: Game) => {
        navigate(`/category/${game.tags[0]}/${game.id}`);
      }}
    >
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-full search-bar py-1.5 pr-12 pl-15 text-base text-primary-neutral-300 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
          placeholder="Search"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery("")}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <MagnifyingGlassIcon className="size-5 text-primary-neutral" />
        </ComboboxButton>
        <ComboboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {query.length > 0 && (
            <ComboboxOption
              value={{ id: null, name: query }}
              className="cursor-default px-3 py-2 text-gray-900 select-none data-focus:bg-primary data-focus:text-background data-focus:outline-hidden"
            >
              {query}
            </ComboboxOption>
          )}
          {filteredGames.map((game) => (
            <ComboboxOption
              key={game.id}
              value={game}
              className="cursor-default px-3 py-2 text-gray-900 select-none data-focus:bg-primary data-focus:text-background data-focus:outline-hidden"
            >
              <span className="block truncate">{game.name}</span>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
};
