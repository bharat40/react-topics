import { useReducer } from "react";
import ShoppingCart from "./components/ShoppingCart";
const App = () => {
  const countReducer = (state, action) => {
    // it takes a bunch of data and returns a single data
    // it has a switch case which checks what type of action has been triggered
    // we are creating a counter so, for a counter we have two casee
    // first one is INCREMENT
    // second one is DECREMENT
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state, // take whatever inside our state
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state, // take whatever inside our state
          count: state.count - 1,
        };
      default:
        return state;
    }
  };
  const initialCount = {
    count: 0,
  };
  const [state, dispatch] = useReducer(countReducer, initialCount); // it takes two values first is reducer func and second is initial state and gives us actual state
  return (
    // <div className="p-5 h-screen w-full">
    //   <p>Count: {state.count}</p>
    //   <div className="flex flex-col items-start gap-3 my-3">
    //     <button
    //       className="p-2 bg-indigo-400 active:bg-indigo-500 duration-200 rounded text-white font-semibold"
    //       onClick={() => dispatch({ type: "INCREMENT" })}
    //     >
    //       INCREMENT
    //     </button>
    //     <button
    //       className="p-2 bg-indigo-400 active:bg-indigo-500 duration-200 rounded text-white font-semibold"
    //       onClick={() => dispatch({ type: "DECREMENT" })}
    //     >
    //       DECREMENT
    //     </button>
    //   </div>
    // </div>
    <div className="p-4 bg-gray-900 h-screen">
      <ShoppingCart />
    </div>
  );
};
export default App;
