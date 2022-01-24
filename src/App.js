import React from 'react';
import './App.css';
import InputTodo from './components/InputTodo/InputTodo';
import TodoItems from './components/TodoItems/TodoItems';
// import CurentDate from './components/Date/CurrentDate';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        // clicked: true
      },
    }
  }

  // statusHandler = () => {
  //   this.setState(state => ({ clicked: !state.clicked }));
  // }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Math.floor(Math.random() * 100) }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  render() {
    return (
      <div className="App">
        <TodoItems 
          entries={this.state.items} 
          deleteItem={this.deleteItem} 
          // statusHandler={this.statusHandler}
        />
        <InputTodo
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
