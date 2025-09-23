import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/oswald/600.css";
import "./index.css";

import { Router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
