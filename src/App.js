import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo/InputTodo";
import TodoItems from "./components/TodoItems/TodoItems";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [],
      currentItem: ""
    }
  }

  statusHandler = ({ id, clicked }) => {
    const { items } = this.state;

    const updatedItem = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          clicked: !clicked
        }
      }
      return item;
    })
    this.setState({ items: updatedItem })
  }

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({
      items: filteredItems
    })
    console.log("Todos was removed")
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = {
      text: itemText, id: Date.now(),
      clicked: false
    }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {
          text: "", id: ""
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
          statusHandler={this.statusHandler}
        />
        <InputTodo
          entries={this.state.items}
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
      </div>
    );
  }
}

export default App;
