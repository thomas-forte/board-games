import { useParams } from "react-router";

import type { Tag } from "../types/tag";
import type { Game } from "../types/game";

import { Card } from "../components/Card";
import { CircleButton } from "../components/CircleButton";

import gamesData from "../assets/scraped.json";
import tagsData from "../assets/tags.json";

export const Category = () => {
  const { tagId } = useParams();

  const games = gamesData as Game[];

  const tag = (tagsData as Tag[]).find((tag) => tag.tag === tagId);

  return (
    <>
      <h1 className="text-[4rem] font-semibold font-oswald text-primary uppercase text-center mt-8">
        {tag?.name}
      </h1>

      <div className="grid grid-cols-1 gap-4 mt-8">
        {games
          .filter((game) => game.tags.includes(tag?.name || ""))
          .map((game) => (
            <Card key={game.id}>
              <CircleButton text={game.name} to={`./${game.id}`} />
            </Card>
          ))}
      </div>
    </>
  );
};
