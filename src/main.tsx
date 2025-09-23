import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";

import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/oswald/600.css";
import "./index.css";

import { Layout } from "./components/Layout.tsx";

import { Home } from "./pages/Home.tsx";
import { Category } from "./pages/Category.tsx";
import { Game } from "./pages/Game.tsx";

import { Old } from "./pages/Old.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:tagId" element={<Category />} />
          <Route path="/game/:gameId" element={<Game />} />
        </Route>
        <Route path="/old" element={<Old />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
