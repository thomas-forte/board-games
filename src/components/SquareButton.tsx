import { useNavigate } from "react-router";
import { CapitalizedText } from "./Capitalize";

export const SquareButton = ({
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
    <div className={`p-4 flex flex-col items-center ${className ?? ""}`}>
      <svg
        viewBox="0 0 88 88"
        className="cursor-pointer size-26 md:size-22"
        onClick={() => to && navigate(to)}
      >
        <g filter="url(#filter0_ii_163_3)">
          <rect width="88" height="88" rx="15" className="fill-background" />
          {imageUrl && (
            <image
              href={imageUrl}
              width="88"
              height="88"
              x="0"
              y="0"
              clip-path="url(#cut-filter0_ii_163_3-clip)"
            />
          )}
        </g>
        <defs>
          <clipPath id="cut-filter0_ii_163_3-clip">
            <rect width="88" height="88" rx="15" />
          </clipPath>
          <filter
            id="filter0_ii_163_3"
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
            <feOffset dx="-5" dy="-5" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_163_3"
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
              in2="effect1_innerShadow_163_3"
              result="effect2_innerShadow_163_3"
            />
          </filter>
        </defs>
      </svg>
      <div
        onClick={() => to && navigate(to)}
        className="uppercase mt-5 text-sm font-lato font-normal text-center cursor-pointer"
      >
        <CapitalizedText text={text} />
      </div>
    </div>
  );
};
