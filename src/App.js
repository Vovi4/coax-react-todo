import InputTodo from "./components/InputTodo/InputTodo";
import TodoItems from "./components/TodoItems/TodoItems";

import "./assets/app.css";


const App = () => {

  return (
      <div className="app">
        <TodoItems />
        <InputTodo />
      </div>
  );
}

export default App;
