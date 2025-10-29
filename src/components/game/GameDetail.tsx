import { CapitalizedText } from "../Capitalize";

export const GameDetail = ({
  Icon,
  value,
  label,
}: {
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  value: string;
  label: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Icon className="size-8 text-primary" />
      <div className="flex flex-col items-center w-26">
        <div className="text-[.875rem] leading-[.875rem] md:text-[1.25rem] md:leading-[1.25rem] font-lato text-primary-neutral uppercase text-center">
          {value}
        </div>
        <div className="text-[0.75rem] font-lato text-primary-neutral uppercase text-center">
          <CapitalizedText text={label} />
        </div>
      </div>
    </div>
  );
};
