export const ProgressBar = ({
  percentage,
  displayValue,
}: {
  percentage: number;
  displayValue: string;
}) => {
  return (
    <>
      <div className="overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
        <div
          style={{ width: `${percentage}%` }}
          className="h-2 rounded-full bg-yellow-500 dark:bg-yellow-500"
        />
      </div>
      <small className="text-gray-500">{displayValue}</small>
    </>
  );
};
