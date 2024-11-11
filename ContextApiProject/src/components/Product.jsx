import React, { useContext } from "react";
import { Cart } from "../Context";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div
      key={product.id}
      className="p-2 border w-[250px] flex flex-col items-center border-gray-200 shadow-sm hover:shadow-md hover:scale-105 duration-200"
    >
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="h-[200px] w-[200px] rounded-sm object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-lg font-bold">{product.name}</span>
        <span className="font-light">${product.price}</span>
        <div className="w-full flex gap-5 justify-center">
          {cart.includes(product) ? (
            <button
              className="bg-red-400 text-white w-[100px] px-1 py-1 rounded-sm hover:shadow-md hover:bg-red-500"
              onClick={() => {
                setCart(cart.filter((c) => c.id !== product.id));
              }}
            >
              Remove
            </button>
          ) : (
            <button
              className="bg-green-400 w-[100px] text-white px-1 py-1 rounded-sm hover:shadow-md hover:bg-green-500"
              onClick={() => {
                setCart([...cart, product]);
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
