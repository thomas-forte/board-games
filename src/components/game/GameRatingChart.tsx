const getRotation = (rating: number) => {
  return -130 + ((50 - -130) * (rating - 1)) / (10 - 1);
};

export const GameRatingChart = ({ rating }: { rating: number }) => (
  <div className="my-4">
    <svg
      width="173"
      height="95"
      viewBox="0 0 173 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 86.5C0 38.7273 38.7273 0 86.5 0C134.273 0 173 38.7273 173 86.5C173 134.273 134.273 173 86.5 173C38.7273 173 0 134.273 0 86.5ZM158.65 86.5C158.65 46.6526 126.347 14.3502 86.5 14.3502C46.6526 14.3502 14.3502 46.653 14.3502 86.5C14.3502 126.347 46.6526 158.65 86.5 158.65C126.347 158.65 158.65 126.347 158.65 86.5Z"
        className="fill-background"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.8924 153.291C-5.10333 123.241 -10.734 68.8886 19.3167 31.8924C49.367 -5.10333 103.719 -10.734 140.715 19.3167C143.782 21.8075 144.249 26.3198 141.759 29.3865C139.267 32.4532 134.755 32.9209 131.688 30.4297C100.83 5.36456 55.4948 10.061 30.4297 40.9194C5.36456 71.7779 10.061 117.113 40.9194 142.178C43.9861 144.669 44.4534 149.181 41.9626 152.248C39.4714 155.315 34.9595 155.782 31.8924 153.291Z"
        transform={`rotate(${getRotation(rating)} 86.5 86.5)`}
        className="fill-medium-accent"
      />
      <path
        d="M172.605 86.3039H0.00280762V172.608H172.605V86.3039Z"
        className="fill-background"
      />
      <path
        d="M7.16143 93.4626C11.115 93.4626 14.32 90.2575 14.32 86.3039C14.32 82.3503 11.115 79.1453 7.16143 79.1453C3.20783 79.1453 0.00280762 82.3503 0.00280762 86.3039C0.00280762 90.2575 3.20783 93.4626 7.16143 93.4626Z"
        className="fill-medium-accent"
      />
      <g filter="url(#filter0_ii_62_22)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 86.8C0 38.8616 38.7273 0 86.5 0C134.273 0 173 38.8616 173 86.8C173 90.7736 169.785 94 165.825 94C161.865 94 158.65 90.7736 158.65 86.8C158.65 46.8144 126.347 14.4 86.5 14.4C46.6526 14.4 14.3502 46.8144 14.3502 86.8C14.3502 90.774 11.135 94 7.17512 94C3.21525 94 0 90.774 0 86.8Z"
          className="fill-background"
          fillOpacity="0.01"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_62_22"
          x="-3"
          y="-3"
          width="179"
          height="100"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          <feOffset dx="3" dy="3" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.65098 0 0 0 0 0.65098 0 0 0 0 0.65098 0 0 0 0.33 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_62_22"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-3" dy="-3" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.33 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_62_22"
            result="effect2_innerShadow_62_22"
          />
        </filter>
      </defs>
    </svg>
    <div className="relative top-[-50%] flex flex-col items-center gap-1">
      <div className="text-center text-[1.5rem] leading-[1.5rem]">
        {rating.toFixed(2)}
        <span className="text-[1rem] leading-[1rem]">/10</span>
      </div>
      <div className="text-center uppercase text-[.625rem]">Avg. Rating</div>
    </div>
  </div>
);
