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

export const Navigation = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <></>;
  } else {
    return (
      <nav className="flex justify-between items-center font-lato font-light uppercase text-2xl">
        {getBackLink(location)}
      </nav>
    );
  }
};
