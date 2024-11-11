import ConditionalAND from "./components/ConditionalAND";
import ConditionalOR from "./components/ConditionalOR";
import NullishCoalescing from "./components/NullishCoalescing";
import OptionalChaining from "./components/OptionalChaining";
function App() {
  return (
    <div>
      <div>
        <h3 className="font-bold text-xl">Difference between && vs ||</h3>
        <ConditionalOR />
        <br />
        <ConditionalAND />
      </div>
      <div>
        <h3 className="font-bold text-xl">Difference between .? vs ??</h3>
        <OptionalChaining />
        <NullishCoalescing />
      </div>
    </div>
  );
}

export default App;
