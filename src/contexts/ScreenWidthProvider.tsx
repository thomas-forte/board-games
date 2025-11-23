import { useState, useEffect, type ReactNode } from "react";
import { ScreenWidthContext } from "./screenWidthContext";

export const ScreenWidthProvider = ({ children }: { children: ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define breakpoints
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isDesktop = screenWidth >= 1024;

  return (
    <ScreenWidthContext.Provider
      value={{ screenWidth, isMobile, isTablet, isDesktop }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
};

