import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="text-base text-gray-300 flex gap-2 justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-gray-800 px-2 py-1 rounded"
            : "text-white px-2 py-1"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) =>
          isActive
            ? "bg-white rounded text-black px-2 py-1"
            : "text-white px-2 py-1"
        }
      >
        Posts
      </NavLink>
    </div>
  );
}

export default Header;
