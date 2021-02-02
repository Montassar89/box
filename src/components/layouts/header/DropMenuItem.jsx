import React from 'react';

const DropMenuItem = () => {
  const itemsOne = ['Hong Kong', 'Taipei', 'Seoul'];
  return (
    <ul className="bg-white shadow rounded mt-2 py-1 w-32 left-0 mt-40 -ml-4 absolute ">
      {itemsOne.map((el, index) => (
        <li
          key={index}
          className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default DropMenuItem;
