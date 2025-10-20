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

      <div className="grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4 mt-8 ">
        {tags.map((tag) => (
          <CircleButton
            key={tag.tag}
            text={tag.name}
            to={`/category/${tag.tag}`}
            imageUrl={`/tag_icons/${tag.name}.svg`}
          />
        ))}
      </div>
    </>
  );
};
