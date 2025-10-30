import type { ReactNode } from "react";
import { useNavigate } from "react-router";

export const Card = ({
  className,
  children,
  to,
}: {
  className?: string;
  children: ReactNode;
  to?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col items-center rounded-lg card ${className}`}
      onClick={() => to && navigate(to)}
    >
      {children}
    </div>
  );
};
