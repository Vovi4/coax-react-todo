import InputTodo from "./components/InputTodo/InputTodo";
import TodoItems from "./components/TodoItems/TodoItems";

import { TodoProvider } from "./components/Context/Context";

import "./assets/app.css";


const App = () => {

  return (
    <TodoProvider>
      <div className="app">
        <TodoItems />
        <InputTodo />
      </div>
    </TodoProvider>

  );
}

export default App;
