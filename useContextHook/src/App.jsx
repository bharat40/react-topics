import { createContext, useState } from "react";
import { useContext } from "react";

const themeContext = createContext("light");
const userContext = createContext(null);
const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      <userContext.Provider value={{ isLoggedIn: true }}>
        <div>
          <p>para from app component</p>
          <GrandParent data="data from props drilling" />
        </div>
      </userContext.Provider>
    </themeContext.Provider>
  );
};
const GrandParent = ({ data }) => {
  return <Parent data={data} />;
};
const Parent = ({ data }) => {
  return <Child data={data} />;
};
const Child = ({ data }) => {
  const { theme, changeTheme } = useContext(themeContext);
  const { isLoggedIn } = useContext(userContext);
  return (
    <div className="p-4">
      <p>{data}</p>
      <p>Value from context: {theme}</p>
      <button
        className="text-blue-700 border border-blue-700 p-2 rounded-md hover:bg-blue-700 hover:text-white  active:bg-blue-800 duration-300"
        onClick={changeTheme}
      >
        Change Theme
      </button>
      <p className="font-semibold text-red-600">
        {isLoggedIn ? "user is logged in" : "user is not logged in"}
      </p>
    </div>
  );
};
export default App;
