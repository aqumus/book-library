import * as React from 'react';

export function Search(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="20px"
      height="20px"
    >
      <circle
        cx={14}
        cy={14}
        fill="none"
        r={9}
        stroke="#ffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="#ffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M27 27l-6.634-6.634"
      />
    </svg>
  );
}
