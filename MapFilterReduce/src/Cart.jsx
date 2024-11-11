import { useState } from "react";
import products from "../utilities/products";
import AddButton from "./AddButton";
const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div>
      <h4 className="text-center text-3xl">Products list</h4>
      <div className="bg-gray-100">
        {products.map((product) => {
          return (
            <div
              className="flex gap-7 items-center justify-center m-5"
              key={product.id}
            >
              <div className="flex gap-4">
                <h4 className="font-semibold">{product.name}</h4>
                <h5>Price: ${product.price}</h5>
                <h5>Category: {product.category}</h5>
              </div>
              <AddButton
                price={product.price}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            </div>
          );
        })}
        <h2 className="text-center font-bold">Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
