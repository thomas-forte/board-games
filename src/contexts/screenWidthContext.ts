import { createContext } from "react";

export interface ScreenWidthContextType {
  screenWidth: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const ScreenWidthContext = createContext<ScreenWidthContextType | undefined>(
  undefined
);

