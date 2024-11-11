import ParentComponentProp from "./Components/Props/ParentComponentProp";
import ParentComponentState from "./Components/State/ParentComponentState";
import Card from "./Components/Card";
function App() {
  return (
    <div>
      <div>
        <h3>Explain State vs Props in functional Component</h3>
        <h3>Props</h3>
        <ParentComponentProp name="john" rollNo="20" />
        <h3>State</h3>
        <ParentComponentState />
      </div>
      <div>
        <h3>What is Children Prop?</h3>
        <div className="text-red-600">
          <Card>This is a card 1</Card>
          <Card>This is a card 2</Card>
        </div>
      </div>
    </div>
  );
}

export default App;
