const CardTowModal = () => {
  const items = [
    {
      title: 'By-The-Item',
      description:
        'Door-to-door pickup & delivery, for smaller-sized handy items',
    },
    {
      title: 'By-Square-Feet',
      description: 'Great for storing furniture and all-sized items',
    },
  ];
  return (
    <div className="py-2">
      { items.map((item, index) => (
        <div key={index} className="w-full flex flex-col justify-between bg-green-main px-2">
          <div className="flex justify-between items-center my-2">
            <p className="font-extrabold text-black">{item.title}</p>
            <div className="text-bold text-center text-base text-black h-8 px-2 mx-1 leading-8 text-uppercase bg-green-sec">
              Door-to-Door
            </div>
          </div>
          <div className="mb-2">
            <p className="italic">{item.description}</p>
          </div>
          <div
            className={`flex justify-between items-center mb-2 ${index !== (items.length - 1) && 'pb-4 border-b-2 border-gray-300'}`}
          >
            <div className="px-2 bg-yellow-sec-btn h-8 font-semibold text-black flex justify-center items-center">
              See Plans
            </div>
            <div className="mx-1 px-2 bg-yellow-sec-btn h-8 font-semibold text-black flex justify-center items-center">
              QUICK CHECKOUT
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default CardTowModal;
