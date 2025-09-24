import { HashRouter, Routes, Route } from "react-router";

import { Layout } from "./layout/Layout.tsx";

import { HomePage } from "./pages/HomePage.tsx";
import { CategoryPage } from "./pages/CategoryPage.tsx";
import { GamePage } from "./pages/GamePage.tsx";

export const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:tagId">
          <Route index element={<CategoryPage />} />
          <Route path=":gameId" element={<GamePage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>
);
