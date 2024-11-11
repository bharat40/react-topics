import { useEffect, useRef } from "react";
const InputRef = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <input ref={inputRef} className=" m-4 text-center" />
    </div>
  );
};

export default InputRef;
