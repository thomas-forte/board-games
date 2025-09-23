import { useNavigate } from "react-router";

export const CircleButton = ({
  className,
  key,
  text,
  to,
}: {
  className?: string;
  key?: string;
  text: string;
  to?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div
      key={key}
      className={`p-4 flex flex-col items-center circle-button ${className}`}
    >
      <button
        className="rounded-full size-22 cursor-pointer hover:outline-1 hover:-outline-offset-1 hover:outline-gray-300"
        onClick={() => to && navigate(to)}
      ></button>
      <span className="text-sm font-lato font-normal text-center">{text}</span>
    </div>
  );
};
