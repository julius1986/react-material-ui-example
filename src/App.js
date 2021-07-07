import "./App.css";
import MakeStylesExample from "./components/StylesExamples/MakeStylesExample";
import WithStylesExample from "./components/StylesExamples/WithStylesExample";
import CreateStyleExample from "./components/StylesExamples/CreateStylesExample";
import ClassComponentExample from "./components/StylesExamples/ClassComponentExample";
function App() {
  return (
    <div className="App">
      <div>
        <h2>Make styles</h2>
        <MakeStylesExample />
        <h2>With styles</h2>
        <WithStylesExample />
        <h2>Create styles</h2>
        <CreateStyleExample />
        <h2>Class component</h2>
        <ClassComponentExample />
      </div>
    </div>
  );
}

export default App;
