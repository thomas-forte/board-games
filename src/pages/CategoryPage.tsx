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

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {games
          .filter((game) => game.tags.includes(tag.tag))
          .map((game) => (
            <div
              key={game.id}
              className="w-1/3 sm:w-1/5 md:w-1/5 lg:w-1/6 xl:w-1/7 2xl:w-1/8"
            >
              <Card className="h-full">
                <CircleButton text={game.name} to={`./${game.id}`} />
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};
