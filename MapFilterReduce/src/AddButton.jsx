const AddButton = ({ price, totalPrice, setTotalPrice }) => {
  const clickHandler = () => {
    setTotalPrice(price + totalPrice);
  };
  return (
    <div>
      <button
        className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md active:bg-indigo-600"
        onClick={clickHandler}
      >
        ADD
      </button>
    </div>
  );
};

export default AddButton;
