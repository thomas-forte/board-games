export const GameRatingChart = ({ rating }: { rating: number }) => (
  <div className="my-4">
    <div className="text-center text-[1.5rem] leading-[1.5rem]">
      {rating.toFixed(2)}
      <span className="text-[1rem] leading-[1rem]">/10</span>
    </div>
    <div className="text-center uppercase text-[.625rem]">Avg. Rating</div>
  </div>
);
