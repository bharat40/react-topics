const ConditionalAND = () => {
  let x = 5;
  let y = 10;
  if (x > 0 && y > 0) {
    return <span>Both are greater than 0</span>;
  } else {
    return <></>;
  }
};

// && one false => whole condition false
export default ConditionalAND;
