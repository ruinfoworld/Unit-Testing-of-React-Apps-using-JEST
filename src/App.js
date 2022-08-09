import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/counter";
import Todos from "./components/Axios/todos";

function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div>
        <Todos />
      </div>
    </>
  );
}

export default App;
