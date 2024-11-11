import ChildComponent from "./ChildComponent";
const ParentComponentProp = ({ name, rollNo }) => {
  return (
    <>
      <ChildComponent name={name} rollNo={rollNo} />
    </>
  );
};

export default ParentComponentProp;
