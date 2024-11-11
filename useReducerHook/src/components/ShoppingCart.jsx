import { useReducer } from "react";
const products = [
  {
    id: 1,
    name: "Keyboard",
  },
  {
    id: 2,
    name: "Mouse",
  },
  {
    id: 3,
    name: "Headphones",
  },
];
const ShoppingCart = () => {
  const initialState = {
    cart: [],
  };
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "REMOVE_ITEM":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id} className="text-white font-semibold text-xl">
            {item.name}{" "}
            <button
              className="m-1 p-1 bg-red-500 active:bg-red-600 duration-200 rounded text-white font-semibold"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
            >
              Remove Product
            </button>
          </li>
        ))}
      </ul>
      {products.map((prod) => (
        <button
          className="m-2 p-2 bg-green-500 active:bg-green-600 duration-200 rounded text-white font-semibold"
          key={prod.id}
          onClick={() => dispatch({ type: "ADD_ITEM", payload: prod })}
        >
          {prod.name}
        </button>
      ))}
      <button
        className="m-2 p-2 bg-red-500 active:bg-red-600 duration-200 rounded text-white font-semibold"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear Cart
      </button>
    </div>
  );
};
export default ShoppingCart;
