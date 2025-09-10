export const CircleButton = ({
  className,
  key,
  text,
}: {
  className?: string;
  key: string;
  text: string;
}) => {
  return (
    <div
      key={key}
      className={`flex flex-col items-center circle-button ${className}`}
    >
      <button className="rounded-full size-22 cursor-pointer hover:outline-1 hover:-outline-offset-1 hover:outline-gray-300"></button>
      <span className="text-sm font-lato font-normal">{text}</span>
    </div>
  );
};
