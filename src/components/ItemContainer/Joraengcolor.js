import React from 'react';

//object-fit: cover;
const JoraengColor = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 159.14 155.38"
      width="50%"
      height="85px"
      // objectFit="cover"
    >
      <g>
        <g>
          <path
            fill={color}
            d="M42.09,10.6c36.22-23.31,82.36-3.47,97.26,14.47,12.33,14.83,39.53,71.52-3.9,108.6-34,29-81.32,27.5-109.44,4C-4.52,112.11-18.16,49.4,42.09,10.6Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default JoraengColor;

//<JoraengColor color={}> 요렇게 사용하면 됩니다
