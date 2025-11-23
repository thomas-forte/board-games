import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/oswald/600.css";
import "./index.css";

import { Router } from "./router";
import { ScreenWidthProvider } from "./contexts/ScreenWidthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScreenWidthProvider>
      <Router />
    </ScreenWidthProvider>
  </StrictMode>
);
