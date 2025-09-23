import { Link, Outlet, useLocation } from "react-router";
import { ArrowLeftIcon, LifebuoyIcon } from "@heroicons/react/24/outline";

export const Layout = () => {
  const location = useLocation();

  const getBackLink = () => {
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
      return (
        <Link to="/old">
          <div className="inline-flex items-center gap-2">
            <LifebuoyIcon className="size-6" /> Old
          </div>
        </Link>
      );
    }
  };

  const getCurrentLinkText = () => {
    const [, , tag, game] = location.pathname.split("/");
    if (game && tag) {
      return "Details";
    } else if (tag) {
      return tag.replaceAll("_", " ");
    } else {
      return "Home";
    }
  };

  return (
    <>
      <nav className="w-full flex justify-between font-lato font-light uppercase text-2xl">
        {getBackLink()}
        <div className="underline underline-offset-4">
          {getCurrentLinkText()}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
