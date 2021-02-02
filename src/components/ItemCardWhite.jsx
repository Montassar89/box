import React from 'react';

const ItemCardWhite = ({ title }) => (
  <div className="bg-white w-full flex items-center p-2 rounded-xl shadow-sm border border-gray-100">
    <div className="relative flex items-center mr-8">
      <img
        src="https://blog.but.fr/wp-content/uploads/2020/03/01-fauteuil-jaune-enveloppant-dynamise-salon.jpg"
        alt="My profile"
        className="ml-4 w-24 h-24 rounded-xl"
      />
    </div>
    <div className="flex-grow p-3">
      <div className="font-semibold text-gray-700">By-Square-Feet</div>
      <div className="text-sm text-gray-500">
        Great for storing furniture and all sizes
      </div>
      <div className="text-sm text-black">
        from
        {' '}
        <span className="font-extrabold text-2xl">$349</span>
        {' '}
        /month
      </div>
      <div className="text-sm text-gray-500">Pay for the space you use</div>
    </div>
  </div>
);

export default ItemCardWhite;
