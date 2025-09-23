import { CircleButton } from "./CircleButton";

export const Card = ({
  className,
  text,
  to,
}: {
  className?: string;
  text: string;
  to?: string;
}) => {
  return (
    <div className={`flex flex-col items-center rounded-lg card ${className}`}>
      <CircleButton text={text} to={to} />
    </div>
  );
};
