const CardThreeModal = () => {
  const items = [
    {
      title: 'Fulfillment',
      action: 'Business',
      description:
        'BusiOne-stop 3PL service catered to e-commerce operationsness',
    },
    {
      title: 'Records Management',
      action: 'Business',
      description: 'Secure, low-cost and convenient records upkeep solution',
    },
    {
      title: 'Local Moving',
      action: 'OTHER',
      description: null,
    },
    {
      title: 'International Moving',
      action: 'OTHER',
      description: null,
    },
  ];
  return (
    <div className="py-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-col justify-between bg-grey-main px-2 pt-2"
        >
          <div className="flex justify-between items-center mb-2">
            <p className="font-extrabold main-color">{item.title}</p>
            <div className="text-bold text-center text-base text-black h-8 px-2 mx-1 leading-8 text-uppercase bg-grey-main-btn">
              {item.action}
            </div>
          </div>
          <div className={`mb-2 ${index !== (items.length - 1) && 'pb-4 border-b-2 border-gray-300'}`}>
            <p className="italic">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardThreeModal;
