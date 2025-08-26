import { StarIcon } from "@heroicons/react/24/solid";

export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${
            rating + 0.5 > i + 1 ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
      <small className="ml-2 text-gray-500">{rating.toFixed(2)} of 5</small>
    </div>
  );
};
