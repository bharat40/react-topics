const DisplayData = (props) => {
  return (
    <div>
      <h1 className="font-2xl font-semibold">first name:{props.firstName}</h1>
      <h1 className="font-2xl font-semibold">last name:{props.lastName}</h1>
      <h1 className="font-2xl font-semibold">mail id:{props.mailid}</h1>
    </div>
  );
};

export default DisplayData;
