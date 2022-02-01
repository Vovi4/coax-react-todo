import { useDispatch, useSelector } from "react-redux";

import CurentDate from "../Date/CurrentDate";
// import Button from "../../elements/Button";
// import Loader from "../../elements/Loader";

import { statusChange, deleteTodo } from "../../redux/actions/postActions";
import { postFetch } from "../../redux/actions/fetchAction";

import "../../assets/todo-items.css";

import trash from "../../assets/icons/trash.svg";
import check from "../../assets/icons/check.svg";
import times from "../../assets/icons/times.svg";

const TodoItems = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.todos);
  const fetchedTodos = useSelector(state => state.todos.fetchedItems);
  // const loading = useSelector(state => state.app.loading);
  
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

  const fetchHandler = () => {
    dispatch(postFetch())
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
    <>
      <CurentDate />
      <div className="btn-wrp">
        <button onClick={fetchHandler} className="fetch-btn">Todos from server</button>
      </div>
      <ul>{fetchItems}</ul>
      <ul>{listItems}</ul>
    </>
  )
}

export default TodoItems;