const ConditionalOR = () => {
  let x = 0;
  let y = 10;
  if (x > 0 || y > 0) {
    return <span>Both are greater than 0</span>;
  } else {
    return <></>;
  }
};

// || one true => whole condition true
export default ConditionalOR;
