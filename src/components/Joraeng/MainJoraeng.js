import React from 'react';
import styled from 'styled-components';

const MainJoraeng = ({ color }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.92 261.77">
        <title>Main Joraenge</title>
        <g>
          <g>
            <path className="joraeng-body" fill={color}
                  d="M200.39,138a82.33,82.33,0,0,0-13-26.15c13.88-31.08.07-67.75-7.94-79.87-12.85-19.46-56.55-44.22-95.1-25C42.92,27.61,31.07,61.57,35.3,90.77a77.1,77.1,0,0,0-18.4,21.14c-13,22.55-22.1,51.94-13.58,80.7S40,245.87,67.48,254.37c26.68,8.25,54.75,9.11,70.79,5,14.31-3.68,44.2-16.59,56.47-41.07C210.64,186.53,206.74,160,200.39,138Z"/>
            <path style={{
                fill: 'none',
                stroke: '#212121',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '3px',
              }}
                  d="M103.45,55c-3.37,8.29-21,9-26.06-.68"/>
            <ellipse cx="83.48" cy="45.47" rx="4.17" ry="2.98" transform="translate(29.64 123.81) rotate(-84.08)"/>
            <ellipse cx="97.71" cy="46.94" rx="4.17" ry="2.98" transform="translate(40.94 139.29) rotate(-84.08)"/>
          </g>
        </g>
      </svg>
    </>
  );
};

export default MainJoraeng;
