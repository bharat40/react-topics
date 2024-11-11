const Card = (props) => {
  return (
    <div className="flex flex-col">
      <b>Card Title</b>
      {props.children}
    </div>
  );
};
export default Card;
