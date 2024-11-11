const NullishCoalescing = () => {
  let userInput = null;
  let defaultValue = "Hello, default value";
  return <p>{userInput ?? defaultValue}</p>;
};

export default NullishCoalescing;

// returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
