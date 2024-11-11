import { Link } from "react-router-dom";
import { useTheme } from "../themeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="flex gap-4">
        <Link
          to="/"
          className="hover:bg-gray-200 p-3 active:bg-gray-300 duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:bg-gray-200 p-3 active:bg-gray-300 duration-200"
        >
          About
        </Link>
        <Link
          to="/blog"
          className="hover:bg-gray-200 p-3 active:bg-gray-300 duration-200"
        >
          Blog
        </Link>
        <button
          className="text-blue-700 border border-blue-700 p-2 rounded-md hover:bg-blue-700 hover:text-white  active:bg-blue-800 duration-300"
          onClick={toggleTheme}
        >
          Change Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
