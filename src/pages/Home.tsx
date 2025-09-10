import type { Tag } from "../types/tag";
import { SearchBar } from "../components/SearchBar";
import tagsData from "../assets/tags.json";
import { CircleButton } from "../components/CircleButton";

export const Home = () => {
  const tags = (tagsData as Tag[]).sort((a, b) => a.position - b.position);

  return (
    <>
      <SearchBar className="mt-edge" />

      <h1 className="text-[4rem] font-semibold font-oswald text-primary uppercase text-center mt-8">
        Categories
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {tags.map((tag) => (
          <CircleButton key={tag.tag} text={tag.name} />
        ))}
      </div>
    </>
  );
};
