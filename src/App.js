import './App.css';
import MakeStylesExample from './components/StylesExamples/MakeStylesExample';
import WithStylesExample from './components/StylesExamples/WithStylesExample';
import CreateStyleExample from './components/StylesExamples/CreateStylesExample';
function App() {
  return (
    <div className="App">
      <div>
        <h2>Make styles</h2>
        <MakeStylesExample/>
        <h2>With styles</h2>
        <WithStylesExample/>
        <h2>Create styles</h2>
        <CreateStyleExample/>
      </div>


    </div>
  );
}

export default App;
