import type { ReactNode } from "react";

export const DataRow = ({
  labelNode,
  valueNode,
}: {
  labelNode: ReactNode;
  valueNode: ReactNode;
}) => (
  <div className="p-3 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">
      {labelNode}
    </dt>
    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
      {valueNode}
    </dd>
  </div>
);
