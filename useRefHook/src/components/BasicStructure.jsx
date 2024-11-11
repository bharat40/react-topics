import { useRef, useState } from "react";

const BasicStructure = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  console.log("Re-render!");

  return (
    <div>
      <div className="m-3 p-4">
        <p>Current value in ref: {ref.current}</p>
        <button
          onClick={() => {
            ref.current += 1;
          }}
          className="p-1  bg-gray-300 font-mono font-semibold active:bg-gray-200"
        >
          increament ref
        </button>
      </div>
      <div className="m-3 p-4">
        <p>Current value in state: {count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="p-1  bg-gray-300 font-mono font-semibold active:bg-gray-200"
        >
          increament state
        </button>
      </div>
    </div>
  );
};

export default BasicStructure;
