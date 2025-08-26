import type { ReactNode } from "react";

export const DataList = ({ children }: { children: ReactNode }) => (
  <dl className="divide-y divide-gray-100 dark:divide-white/5">{children}</dl>
);
