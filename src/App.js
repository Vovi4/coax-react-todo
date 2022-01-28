// import React, { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo/InputTodo";
import TodoItems from "./components/TodoItems/TodoItems";
import {TodoProvider} from "./components/Context/Context";

const App = () => {

  // const [state, setState] = useState({
  //   items: [],
  //   currentItem: ""
  // })
  

  // const statusHandler = ({ id, clicked }) => {

  //   const updatedItem = state.items.map(item => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         clicked: !clicked
  //       }
  //     }
  //     return item;
  //   })    
  //   setState(previousState => {
  //     return {
  //       ...previousState,
  //       items: updatedItem
  //     }
  //   });
  // }

  // const deleteItem = id => {
  //   const filteredItems = state.items.filter(item => {
  //     return item.id !== id
  //   })
  //   setState(previousState => {
  //     return {
  //       ...previousState,
  //       items: filteredItems
  //     }
  //   })
  //   console.log("Todos was removed")
  // }

  // const handleInput = e => {
  //   const itemText = e.target.value
  //   const currentItem = {
  //     text: itemText, id: Date.now(),
  //     clicked: false
  //   }
  //   setState(previousState => {
  //     return {
  //       ...previousState,
  //       currentItem
  //     }
  //   })
  // }  

  // const addItem = e => {
  //   e.preventDefault()
  //   const newItem = state.currentItem
  //   if (newItem.text !== "") {
  //     const items = [...state.items, newItem]
  //     setState(previousState => {
  //       return {
  //         ...previousState,
  //         items: items,
  //         currentItem: {
  //           text: "", id: ""
  //         }
  //       }
  //     })
  //     console.log(`Todo ${newItem.text} was added`)
  //   }
  // }

  return (
    <TodoProvider>
      <div className="App">
      <TodoItems
        // state={state}
        // setState={setState}
          // todos={state.items}
          // deleteItem={deleteItem}
          // statusHandler={statusHandler}
      />
      <InputTodo
        // state={state}
        // setState={setState}
          // addItem={addItem}
          // handleInput={handleInput}
          // currentItem={state.currentItem}
      />
    </div>
    </TodoProvider>
    
  );
}

export default App;
