import { useParams } from "react-router";

import type { Tag } from "../types/tag";
import type { Game } from "../types/game";

import { Card } from "../components/Card";
import { CircleButton } from "../components/CircleButton";
import { PageHeading } from "../components/PageHeading";

import gamesData from "../assets/scraped.json";
import tagsData from "../assets/tags.json";

export const CategoryPage = () => {
  const { tagId } = useParams();

  const games = gamesData as Game[];

  const tag = (tagsData as Tag[]).find((tag) => tag.tag === tagId);

  if (!tag) {
    return <div>Tag not found</div>;
  }

  return (
    <>
      <PageHeading title={tag.name} />

      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 mt-8">
        {games
          .filter((game) => game.tags.includes(tag.tag))
          .map((game) => (
            <Card key={game.id} className="w-[10rem] h-[14rem]">
              <CircleButton text={game.name} to={`./${game.id}`} />
            </Card>
          ))}
      </div>
    </>
  );
};
