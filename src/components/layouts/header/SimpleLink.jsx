import React from 'react';

const SimpleLink = ({ text }) => (
  <a className="cursor-pointer">
    <li className="text-gray-800 pt-10">
      <div className="flex items-center">
        <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-grid"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x={4} y={4} width={6} height={6} rx={1} />
            <rect x={14} y={4} width={6} height={6} rx={1} />
            <rect x={4} y={14} width={6} height={6} rx={1} />
            <rect x={14} y={14} width={6} height={6} rx={1} />
          </svg>
        </div>
        <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
          {text}
        </p>
      </div>
    </li>
  </a>
);

export default SimpleLink;
