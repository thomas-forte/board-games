import { useNavigate } from "react-router";
import { CapitalizedText } from "./Capitalize";

export const CircleButton = ({
  className,
  text,
  to,
  imageUrl,
}: {
  className?: string;
  text: string;
  to?: string;
  imageUrl?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className={`p-4 flex flex-col items-center ${className}`}>
      <svg
        width="88"
        height="88"
        viewBox="0 0 88 88"
        className="cursor-pointer hover:scale-105 transition-all duration-300"
        onClick={() => to && navigate(to)}
      >
        <g filter="url(#filter0_ii_46_851)">
          <circle cx="44" cy="44" r="44" className="fill-background" />
        </g>
        {imageUrl && (
          <image href={imageUrl} width="50" height="50" x="19" y="19" />
        )}
        <defs>
          <filter
            id="filter0_ii_46_851"
            x="-5"
            y="-5"
            width="98"
            height="98"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="5" dy="5" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.65098 0 0 0 0 0.65098 0 0 0 0 0.65098 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_46_851"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-5" dy="-5" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_46_851"
              result="effect2_innerShadow_46_851"
            />
          </filter>
        </defs>
      </svg>
      <span
        onClick={() => to && navigate(to)}
        className="uppercase mt-2 text-sm font-lato font-normal text-center cursor-pointer"
      >
        <CapitalizedText text={text} />
      </span>
    </div>
  );
};
