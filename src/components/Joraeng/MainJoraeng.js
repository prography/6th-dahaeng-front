import React from 'react';

const MainJoraeng = ({ age, color }) => {
  if (age === 0) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206 261.5">
          <g>
            <g>
              <path fill="#f9f9f7"
                    d="M166.87,148.58a24.15,24.15,0,0,1,.8,8.5c-.57,6.69-2.29,14.34-10,21.34-5.91,5.4-15.43,5.79-19.72,5.29-4.82-.55-12.39-3.73-18.81-8.78-6.62-5.21-11.73-14.85-11-23.6s6.26-15.81,12.17-20.61a22.63,22.63,0,0,1,7.25-3.83,21.91,21.91,0,0,1,13.86-15.84,58.53,58.53,0,0,0-37.75-14c-.07.52-.14,1-.24,1.58-1.39,7.88-8.69,14-12.4,16.23-4.15,2.49-12.09,4.6-20.26,4.51a30,30,0,0,1-11.9-2.78C48,128.36,40.73,143.48,37.12,155.91c5.1.42,9.68,2.26,12.18,4.35C52.56,163,59.5,172.14,58.19,182A24,24,0,0,1,64,188.24c3.62,5.64,6.93,12.76,5.12,23-1.39,7.88-8.69,14-12.4,16.22a35.21,35.21,0,0,1-12,3.88,48.15,48.15,0,0,0,18.43,16.72c17.89,9.21,29.35,11.67,40.87,11.47,2,0,4-.13,5.93-.29-5.61-1.94-10.89-5.51-14-10.28-4.79-7.35-4.7-16.35-2.93-23.75s8.07-14.43,16.47-18,15.29-3.1,20.11-1.68c7.58,2.24,13.36,5.92,17,11.64s6.93,12.75,5.12,23c0,.3-.13.59-.2.88,20.52-21.56,26.44-62.76,15.35-92.56A.94.94,0,0,0,166.87,148.58Z"/>
              <path fill={color}
                    d="M166.87,148.58c-.21-.76-.45-1.51-.73-2.26-.44-1.08-.91-2.15-1.39-3.2l0-.06c-6.28-13.43-14.05-24.24-23.31-32a21.91,21.91,0,0,0-13.86,15.84,22.63,22.63,0,0,0-7.25,3.83c-5.91,4.8-11.48,11.87-12.17,20.61s4.42,18.39,11,23.6c6.42,5,14,8.23,18.81,8.78,4.29.5,13.81.11,19.72-5.29,7.68-7,9.4-14.65,10-21.34A24.15,24.15,0,0,0,166.87,148.58Z"/>
              <path fill={color}
                    d="M58.19,182c1.31-9.88-5.63-19-8.89-21.76-2.5-2.09-7.08-3.93-12.18-4.35-.57,2-1.06,3.87-1.45,5.68a111.25,111.25,0,0,0-2.09,14.58,116.9,116.9,0,0,0,.68,25.25c1.48,10.52,4.69,21,10.52,29.91a35.21,35.21,0,0,0,12-3.88c3.71-2.22,11-8.34,12.4-16.22,1.81-10.23-1.5-17.35-5.12-23A24,24,0,0,0,58.19,182Z"/>
              <path fill={color}
                    d="M129.67,205.54c-4.82-1.42-11.71-1.88-20.11,1.68s-14.71,10.57-16.47,18S91.23,241.6,96,249c3.1,4.77,8.38,8.34,14,10.28,13.76-1.09,26.1-5.25,36.23-13.23a52.25,52.25,0,0,0,5.38-5c.07-.29.15-.58.2-.88,1.81-10.23-1.5-17.34-5.12-23S137.25,207.78,129.67,205.54Z"/>
              <path fill={color}
                    d="M103.42,98.61c.1-.54.17-1.06.24-1.58a71.8,71.8,0,0,0-10.23.58c-14.07,1.77-25.57,9.23-34.57,19a30,30,0,0,0,11.9,2.78c8.17.09,16.11-2,20.26-4.51C94.73,112.61,102,106.49,103.42,98.61Z"/>
              <path fill={color}
                    d="M93.6,145.12a11.48,11.48,0,0,0-6.78-4.63,11.64,11.64,0,0,0-8,.67,11,11,0,0,0-6.56,7.15c-.7,2.95-.74,6.53,1.17,9.46a11.72,11.72,0,0,0,9.21,4.76,16.92,16.92,0,0,0,8.06-1.8c1.48-.89,4.38-3.32,4.94-6.46A12,12,0,0,0,93.6,145.12Z"/>
              <rect width="206" height="261.5" fill="none"/>
            </g>
          </g>
        </svg>
    );
  } else if (age === 1) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206 261.5">
          <g>
            <g>
              <path fill={color}
                    d="M77,110.44c39.77-16.55,81.68,11.13,93.18,31.42,9.51,16.77,26.27,77.38-23,106.2-38.62,22.58-84.9,12.7-108.42-15.42C13.22,202.11,10.87,138,77,110.44Z"/>
              <path style={{
                fill: 'none',
                stroke: '#212121',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '3px',
              }}
                    d="M98,157.5c-2.5,8.59-20,11.08-26,2"/>
              <ellipse cx="77.15" cy="150.12" rx="2.98" ry="4.17"/>
              <ellipse cx="91.46" cy="150.12" rx="2.98" ry="4.17"/>
              <rect fill="none" width="206" height="261.5"/>
            </g>
          </g>
        </svg>
    );
  } else if (age === 2) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.92 261.77">
          <g>
            <g>
              <path fill={color}
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
    );
  }
};

export default MainJoraeng;