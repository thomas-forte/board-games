import { useState, type ReactNode, Children } from "react";

import { useScreenWidth } from "../hooks/useScreenWidth";

export const Carousel = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useScreenWidth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const childArray = Children.toArray(children);
  const totalSlides = childArray.length;

  // Minimum swipe distance (in px) to trigger a slide change
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (totalSlides === 0) {
    return null;
  }

  if (!isMobile) {
    return children;
  }

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden rounded-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {childArray.map((child, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center p-12"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {childArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-secondary-neutral hover:bg-primary-neutral"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
