import React, { useEffect, useState, useContext } from "react";
import Product from "../components/Product";
import { Cart } from "../Context";

const CartPage = () => {
  const [total, setTotal] = useState();
  const { cart, setCart } = useContext(Cart);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      <span className="font-bold">MyCart</span>
      <br />
      <span className="font-semibold">Total : ${total}</span>
      <div className="flex flex-wrap gap-4 justify-evenly my-4">
        {cart.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default CartPage;
