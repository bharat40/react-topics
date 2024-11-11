import { useState } from "react";
import DisplayData from "./DisplayData";
const Form = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <span>First name: </span>
        <input
          type="text"
          className="bg-gray-100 max-w-max"
          placeholder="enter first name"
          name="firstName"
          onChange={handleInputChange}
        />
        <span>Last name: </span>
        <input
          type="text"
          className="bg-gray-100 max-w-max"
          placeholder="enter last name"
          name="lastName"
          onChange={handleInputChange}
        />
        <span>E-mail: </span>
        <input
          type="email"
          className="bg-gray-100 max-w-max"
          placeholder="abcd@gmail.com"
          name="email"
          onChange={handleInputChange}
        />
        <button type="submit">submit</button>
      </form>
      {submitted && (
        <DisplayData
          firstName={userData.firstName}
          lastName={userData.lastName}
          mailid={userData.email}
        />
      )}
    </div>
  );
};

export default Form;
