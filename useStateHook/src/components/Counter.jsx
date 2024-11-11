import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>count: {count}</h3>
      <button
        className="px-2 py-1 bg-indigo-400 text-white active:bg-indigo-300"
        onClick={increaseCount}
      >
        increase
      </button>
    </div>
  );
};

export default Counter;
