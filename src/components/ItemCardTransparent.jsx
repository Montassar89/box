import React from 'react';

const ItemCardTransparent = ({ title }) => (
  <div className="md:bg-transparent bg-white md:border-0 border w-full flex flex-col lg:flex-row items-center p-2 rounded-xl">
    <div className="flex-grow p-3 lg:text-left text-center">
      <div className="text-sm text-gray-500 ">In-Person Access</div>
      <div className="font-semibold text-gray-700 mb-4">{title}</div>
      <div className="text-sm text-gray-500">Full control of your</div>
      <div className="text-sm text-gray-500">belongings at Boxful Stores</div>
    </div>
    <div className="relative flex items-center mr-8">
      <img
        src="https://miro.medium.com/max/1365/1*wcrv3-eUOx84Xf5XnVi27w.png"
        alt="My profile"
        className="ml-4 w-32 rounded-xl"
      />
    </div>
  </div>
);

export default ItemCardTransparent;
