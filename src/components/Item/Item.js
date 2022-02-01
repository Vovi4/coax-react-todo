import { useDispatch, useSelector } from "react-redux";

import { statusChange, deleteTodo } from "../../redux/actions/postActions";

import "../../assets/todo-items.css";

import trash from "../../assets/icons/trash.svg";
import check from "../../assets/icons/check.svg";
import times from "../../assets/icons/times.svg";


const Item = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.todos);
  const fetchedTodos = useSelector(state => state.todos.fetchedItems);

  const statusHandler = ({ id, completed }) => {
    const updatedItem = state.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !completed
        }
      }
      return item;
    })
    dispatch(statusChange(updatedItem))
  }

  const deleteItem = id => {
    const filteredItems = state.items.filter(item => {
      return item.id !== id
    })
    dispatch(deleteTodo(filteredItems))
    console.log("Todos was removed")
  }

  const createTasks = item => {
    return (
      <div className="content-wrp" key={item.id}>
        <div className="todo-wrp" >
          <button className="status-btn" onClick={() => statusHandler({ id: item.id, completed: item.completed })}>
            <img src={item.completed
              ? check
              : times}
              alt="trash-box"></img>
          </button>
          <li key={item.id}>{item.title}</li>
          <button className="trash-btn" onClick={() => deleteItem(item.id)}>
            <img src={trash} alt="trash-box"></img>
          </button>
        </div>
      </div>
    )
  }

  const listItems = state.items.map(createTasks);
  const fetchItems = fetchedTodos.map(createTasks);

  return (
    <div className="item-wrp">
      <ul>{fetchItems}</ul>
      <ul>{listItems}</ul>
    </div>
  )
}

export default Item;