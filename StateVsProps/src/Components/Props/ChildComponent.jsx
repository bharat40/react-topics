const ChildComponent = ({ name, rollNo }) => {
  return (
    <>
      <h1>Receiving data from App</h1>
      <h1>{name}</h1>
      <h2>{rollNo}</h2>
    </>
  );
};

export default ChildComponent;
