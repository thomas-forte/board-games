import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div className={`grid grid-cols-1 search-bar ${className}`}>
      <input
        type="text"
        className="col-start-1 row-start-1 block w-full rounded-full py-1.5 pr-10 pl-3 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6"
      />
      <MagnifyingGlassIcon
        aria-hidden="true"
        className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end sm:size-4 text-primary-neutral"
      />
    </div>
  );
};
