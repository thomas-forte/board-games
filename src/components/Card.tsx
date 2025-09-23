import type { ReactNode } from "react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`flex flex-col items-center rounded-lg card ${className}`}>
      {children}
    </div>
  );
};
