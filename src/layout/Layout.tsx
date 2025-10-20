import { Outlet } from "react-router";

import { Navigation } from "./Navigation";
import { ScrollToTop } from "./ScrollToTop";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Outlet />
    </>
  );
};
