import { HashRouter, Routes, Route } from "react-router";

import { Layout } from "./components/Layout.tsx";

import { Home } from "./pages/Home.tsx";
import { Category } from "./pages/Category.tsx";
import { Game } from "./pages/Game.tsx";

import { Old } from "./pages/Old.tsx";

export const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:tagId">
          <Route index element={<Category />} />
          <Route path=":gameId" element={<Game />} />
        </Route>
      </Route>
      <Route path="/old" element={<Old />} />
    </Routes>
  </HashRouter>
);
