import { useState } from "react";

const TwoWayDataBinding = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col">
      <span>Input Box: {value}</span>
      <input
        className="max-w-max bg-gray-200"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default TwoWayDataBinding;
