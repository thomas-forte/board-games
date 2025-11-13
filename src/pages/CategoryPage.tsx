import { useParams } from "react-router";

import type { Tag } from "../types/tag";
import type { Game } from "../types/game";
import type { GameImage } from "../types/images";

import { Card } from "../components/Card";
import { SquareButton } from "../components/SquareButton";
import { PageHeading } from "../components/PageHeading";

import gamesData from "../assets/scraped.json";
import tagsData from "../assets/tags.json";
import imagesData from "../assets/images.json";

export const CategoryPage = () => {
  const { tagId } = useParams();

  const games = gamesData as Game[];
  const images = imagesData as GameImage[];

  const tag = (tagsData as Tag[]).find((tag) => tag.tag === tagId);

  if (!tag) {
    return <div>Tag not found</div>;
  }

  return (
    <>
      <PageHeading title={tag.name} />

      <div className="flex flex-wrap justify-center gap-10 mt-8 max-w-7xl mx-auto">
        {games
          .filter((game) => game.tags.includes(tag.tag))
          .map((game) => (
            <div key={game.id} className="w-1/3 sm:w-1/4 lg:w-1/5 xl:w-1/6">
              <Card
                className="h-full hover:scale-110 transition-all duration-300 cursor-pointer"
                to={`./${game.id}`}
              >
                <SquareButton
                  text={game.name}
                  imageUrl={
                    images.find((image) => image.id === game.id)?.imageUrl
                  }
                />
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};
