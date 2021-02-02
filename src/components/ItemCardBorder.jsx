import React from 'react';

const ItemCardBorder = ({ btnLabel }) => (
  <div className="bg-transparent w-full flex flex-col md:flex-row items-center justify-between p-2 h-32 mb-8 border shadow-sm">
    <div className="relative flex-grow items-center w-full md:w-auto">
      <div className="flex items-center m-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="green"
          className="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </svg>
        <p className="ml-2 text-sm text-black">1-month min storage period</p>
      </div>
      <div className="flex items-center m-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="green"
          className="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </svg>
        <p className="ml-2 text-sm text-black">No deposit required</p>
      </div>
      <div className="flex items-center m-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="green"
          className="bi bi-check2"
          viewBox="0 0 16 16"
        >
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </svg>
        <p className="ml-2 text-sm text-black">Best price guarantee</p>
      </div>
    </div>
    <a
      href="https://www.google.com/"
      className="w-full md:w-36 flex items-center justify-center px-5 py-3
															border border-transparent uppercase text-base font-medium
															rounded-full text-white bg-yellow-500 hover:bg-yellow-600 h-10 mx-4"
    >
      {btnLabel}
    </a>
  </div>
);

export default ItemCardBorder;
