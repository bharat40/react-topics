import { useEffect, useState } from "react";
import useCustomEffect from "../Hooks/useCustomEffect";
const Counter = () => {
  const [count, setCount] = useState(0);
  useCustomEffect(() => {
    console.log("Effect Triggered!", count);
    // cleanup function below
    // return () => {
    //   console.log("Cleanup invoked"); // invoked when the value in dependeny array changes or the component get unmounted
    // };
  }, [count]);
  console.log("rerendered");

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };
  return (
    <div className="p-4 flex flex-col items-center gap-5">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={increament}
          className="p-1  bg-gray-300 font-mono font-semibold active:bg-gray-200"
        >
          increase
        </button>
        <button
          onClick={decreament}
          className="p-1 bg-gray-300 font-mono font-semibold active:bg-gray-200"
        >
          decrease
        </button>
      </div>
    </div>
  );
};
export default Counter;
