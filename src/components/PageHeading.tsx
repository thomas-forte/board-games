import { CapitalizedText } from "./Capitalize";

export const PageHeading = ({ title }: { title: string }) => (
  <h1 className="text-[2.5rem] md:text-[4rem] md:leading-[4rem] font-semibold font-oswald text-primary uppercase text-center md:mt-8 mt-4">
    <CapitalizedText text={title} />
  </h1>
);
