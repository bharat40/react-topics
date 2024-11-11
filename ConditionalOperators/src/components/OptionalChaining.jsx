const OptionalChaining = () => {
  let user = {
    name: "John",
    // address: {
    //   city: "New York",
    // },
  };
  return (
    <div>
      <p>{user?.address?.city}</p>
    </div>
  );
};

export default OptionalChaining;
