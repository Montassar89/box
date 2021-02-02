const CardOneModal = () => (
  <div className="w-full flex flex-col justify-between bg-yellow-main px-2 py-4 mb-2">
    <div className="flex justify-between items-center mb-2">
      <p className="font-extrabold text-black">Stores Locations</p>
      <div className="text-bold text-center text-base text-black h-8 px-2 mx-1 leading-8 text-uppercase bg-yellow-main-btn">
        Storage Unit
      </div>
    </div>
    <div className="mb-2">
      <p className="italic">Physical access to your own belongings</p>
    </div>
    <div className="flex justify-between items-center mb-2">
      <div className="px-2 h-8 border-2 border-current font-semibold text-black flex justify-center items-center">
        See Stores
      </div>
      <p className="text-black mx-1">10 Locations</p>
    </div>
  </div>
);

export default CardOneModal;
