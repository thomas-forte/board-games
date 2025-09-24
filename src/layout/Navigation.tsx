import { Link, type Location, useLocation } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const getBackLink = (location: Location) => {
  const [, , tag, game] = location.pathname.split("/");
  if (game && tag) {
    return (
      <Link to={`/category/${tag}`}>
        <div className="inline-flex items-center gap-2">
          <ArrowLeftIcon className="size-6" />
          {tag.replaceAll("_", " ")}
        </div>
      </Link>
    );
  } else if (tag) {
    return (
      <Link to="/">
        <div className="inline-flex items-center gap-2">
          <ArrowLeftIcon className="size-6" /> Home
        </div>
      </Link>
    );
  } else {
    return <div></div>;
  }
};

const getCurrentLinkText = (location: Location) => {
  const [, , tag, game] = location.pathname.split("/");
  if (game && tag) {
    return "Details";
  } else if (tag) {
    return tag.replaceAll("_", " ");
  } else {
    return "Home";
  }
};

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center font-lato font-light uppercase text-2xl">
      {getBackLink(location)}
      <div className="underline underline-offset-4">
        {getCurrentLinkText(location)}
      </div>
    </nav>
  );
};
