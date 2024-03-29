import React, {Component} from "react";

class Tap extends Component {

  render () {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0"
          maskType="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H24V24H0V0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.25 7.5V11.24C8.03998 10.43 7.25 9.06 7.25 7.5C7.25 5.00999 9.26001 3 11.75 3C14.24 3 16.25 5.00999 16.25 7.5C16.25 9.06 15.46 10.43 14.25 11.24V7.5C14.25 6.12 13.13 5 11.75 5C10.37 5 9.25 6.12 9.25 7.5ZM14.55 13.61L19.09 15.87C19.62 16.09 20 16.63 20 17.25C20 17.31 19.99 17.38 19.98 17.45L19.23 22.72C19.12 23.45 18.54 24 17.79 24H11C10.59 24 10.21 23.83 9.94 23.56L5 18.62L5.78998 17.82C5.98999 17.62 6.27002 17.49 6.58002 17.49C6.64001 17.49 6.69116 17.4989 6.74231 17.5078C6.76782 17.5122 6.79333 17.5167 6.82001 17.52L10.25 18.24V7.5C10.25 6.67 10.92 6 11.75 6C12.58 6 13.25 6.67 13.25 7.5V13.5H14.01C14.2 13.5 14.38 13.54 14.55 13.61Z"
            fill="white"
          />
        </g>
      </svg>

    );
  }
}

export default Tap;