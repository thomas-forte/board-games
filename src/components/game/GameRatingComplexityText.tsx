export const GameRatingComplexityText = ({
  complexityRating,
}: {
  complexityRating: number;
}) => (
  <div className="relative top-[150%] flex flex-col items-center gap-1">
    <svg width="25" height="7" viewBox="0 0 25 7" fill="none">
      <path
        d="M12.5 0L24.1913 6.75H0.808657L12.5 0Z"
        className="fill-primary-neutral"
      />
    </svg>
    <div className="text-center text-[1rem] leading-[1rem]">
      {complexityRating.toFixed(2)}
      <span className="text-[.625rem] leading-[.625rem]">/5</span>
    </div>
  </div>
);
