import React from 'react';

const animatedOpenButton = ({ children, handlClick }) => (
  <div
    className="text-base text-gray-800 ml-3 text-primary-text font-extrabold mx-2"
    onClick={handlClick}
  >
    {children}
  </div>
);

export default animatedOpenButton;
