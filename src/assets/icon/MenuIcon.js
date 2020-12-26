import React from 'react';

const MenuIcon = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 41">
      <g>
        <g>
          <path
            fill={color}
            d="M35.5,9H4.5A4.51,4.51,0,0,1,0,4.5H0A4.51,4.51,0,0,1,4.5,0h31A4.51,4.51,0,0,1,40,4.5h0A4.51,4.51,0,0,1,35.5,9Z"
          />
          <path
            fill={color}
            d="M25.5,25H4.5A4.51,4.51,0,0,1,0,20.5H0A4.51,4.51,0,0,1,4.5,16h21A4.51,4.51,0,0,1,30,20.5h0A4.51,4.51,0,0,1,25.5,25Z"
          />
          <path
            fill={color}
            d="M40.4,41H4.6A4.56,4.56,0,0,1,0,36.5H0A4.56,4.56,0,0,1,4.6,32H40.4A4.56,4.56,0,0,1,45,36.5h0A4.56,4.56,0,0,1,40.4,41Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default MenuIcon;
