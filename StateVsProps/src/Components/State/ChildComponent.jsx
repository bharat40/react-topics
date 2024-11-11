const ChildComponent = ({ count, setCount }) => {
  const increaseCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button
        onClick={increaseCounter}
        className="px-2 py-1 bg-gray-300 active:bg-gray-400"
      >
        increase
      </button>
    </div>
  );
};

export default ChildComponent;
