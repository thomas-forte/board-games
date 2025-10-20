import { CapitalizedText } from "./Capitalize";

export const PageHeading = ({ title }: { title: string }) => (
  <h1 className="text-[2.5rem] md:text-[4rem] font-semibold font-oswald text-primary uppercase text-center mt-8">
    <CapitalizedText text={title} />
  </h1>
);
