import { CapitalizedText } from "../Capitalize";

import type { Game } from "../../types/game";

export const GameTitle = ({ game }: { game: Game }) => {
  return (
    <>
      <h1 className="text-[2rem] font-semibold font-oswald text-primary uppercase text-center">
        <CapitalizedText text={game.name} />
      </h1>

      {game.publishers.length > 0 && (
        <h2 className="text-[1.5rem] font-lato text-primary-neutral uppercase text-center mt-4">
          <CapitalizedText text={game.publishers[0]} />
        </h2>
      )}

      {game.releaseYear && (
        <h3 className="font-lato text-primary-neutral uppercase text-center">
          {game.releaseYear}
        </h3>
      )}

      {game.warfareLevel && (
        <h4 className="text-[.875rem] font-lato text-primary-neutral uppercase text-center">
          {game.warfareLevel}
        </h4>
      )}
    </>
  );
};
