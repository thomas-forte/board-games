import type { Tag } from "../types/tag";

import { SearchBar } from "../components/SearchBar";
import { CircleButton } from "../components/CircleButton";
import { PageHeading } from "../components/PageHeading";

import tagsData from "../assets/tags.json";

export const HomePage = () => {
  const tags = (tagsData as Tag[]).sort((a, b) => a.position - b.position);
  return (
    <>
      <SearchBar />

      <PageHeading title="War Games" />

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {tags.map((tag) => (
          <CircleButton
            key={tag.tag}
            text={tag.name}
            className="w-1/3 sm:w-1/5 md:w-1/5 lg:w-1/6 xl:w-1/7 2xl:w-1/8"
            to={`/category/${tag.tag}`}
            imageUrl={`/tag_icons/${tag.name}.svg`}
          />
        ))}
      </div>
    </>
  );
};
