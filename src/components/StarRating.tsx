import { Star } from "./Star";

export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => {
        const adjustedRating = Math.max(0, Math.min((rating - i) * 100, 100));
        return <Star key={i.toString()} fillPercentage={adjustedRating} />;
      })}
      <small className="ml-2 text-gray-500">{rating.toFixed(2)} of 5</small>
    </div>
  );
};
