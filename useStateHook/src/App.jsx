import Counter from "./components/Counter";
import TwoWayDataBinding from "./components/TwoWayDataBinding";
import Form from "./components/Form";
function App() {
  return (
    <div>
      <div>
        <span className="text-xl font-bold">
          # Explain useState with example
        </span>
        {/* For definition check README.md */}
        <Counter />
      </div>
      <div>
        <span className="text-xl font-bold">
          # What is Two Way Data Binding and how can you achieve it in React?
        </span>
        {/* check README.md */}
        <TwoWayDataBinding />
      </div>
      <div>
        <span className="text-xl font-bold">
          # Build a form containing first name, last name and email. Use only
          one state to manage all fields
        </span>
        <Form />
      </div>
    </div>
  );
}

export default App;
