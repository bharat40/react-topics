import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponentState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
};

export default ParentComponentState;
