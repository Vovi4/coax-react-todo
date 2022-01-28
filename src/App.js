import "./App.css";
import InputTodo from "./components/InputTodo/InputTodo";
import TodoItems from "./components/TodoItems/TodoItems";
import {TodoProvider} from "./components/Context/Context";

const App = () => {

  return (
    <TodoProvider>
      <div className="App">
      <TodoItems />
      <InputTodo />
    </div>
    </TodoProvider>
    
  );
}

export default App;
