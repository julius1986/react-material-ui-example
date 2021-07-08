import "./App.css";
import MakeStylesExample from "./components/StylesExamples/MakeStylesExample";
import WithStylesExample from "./components/StylesExamples/WithStylesExample";
import CreateStyleExample from "./components/StylesExamples/CreateStylesExample";
import ClassComponentExample from "./components/StylesExamples/WithStylesExample/ClassComponentExample";
import FunctionalComponentExample from "./components/StylesExamples/WithStylesExample/FunctionalComponentExample";
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
        <h2>Class component, withStyles</h2>
        <ClassComponentExample />
        <h2>Functional component, withStyles</h2>
        <FunctionalComponentExample />
      </div>
    </div>
  );
}

export default App;
