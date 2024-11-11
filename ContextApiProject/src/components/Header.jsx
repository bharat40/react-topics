import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Cart } from "../Context";

const Header = () => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div className="font-bold flex justify-between px-1 py-4 bg-gray-200 shadow-md">
      <h1 className="text-xl">React Context API Tutorial</h1>
      <ul className="flex items-center">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-4 text-teal-500"
                : "px-3 py-4  hover:text-teal-500"
            }
          >
            Home Page
          </NavLink>
        </li>
        <li className=" ">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-4 text-teal-500"
                : "px-3 py-4  hover:text-teal-500"
            }
          >
            Cart Page {cart.length}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
