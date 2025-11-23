import { useContext } from "react";
import { ScreenWidthContext } from "../contexts/screenWidthContext";

export const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext);
  if (!context) {
    throw new Error("useScreenWidth must be used within a ScreenWidthProvider");
  }
  return context;
};

