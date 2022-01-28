import React, { useEffect, useContext } from "react";
import "./todo-items.css";
import trash from "../../Img/trash.svg";
import check from "../../Img/check.svg";
import times from "../../Img/times.svg";
import CurentDate from "../Date/CurrentDate";
import { TodoContext, statusChange, deleteTodo } from "../Context/Context";



// const TodoItems = ({ state, setState }) => {
const TodoItems = () => {

    const { state, dispatch } = useContext(TodoContext);

    useEffect(() => {
        localStorage.setItem("Todo-item", JSON.stringify(state.items));
    });


    const statusHandler = ({ id, clicked }) => {
        const updatedItem = state.items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    clicked: !clicked
                }
            }
            return item;
        })
        dispatch(statusChange(updatedItem))
    }
    // const statusHandler = ({ id, clicked }) => {

    //     const updatedItem = state.items.map(item => {
    //         if (item.id === id) {
    //             return {
    //                 ...item,
    //                 clicked: !clicked
    //             }
    //         }
    //         return item;
    //     })
    //     setState(previousState => {
    //         return {
    //             ...previousState,
    //             items: updatedItem
    //         }
    //     });
    // }

    const deleteItem = id => {
        const filteredItems = state.items.filter(item => {
            return item.id !== id
        })
        dispatch(deleteTodo(filteredItems))
        console.log("Todos was removed")
    }
    // const deleteItem = id => {
    //     const filteredItems = state.items.filter(item => {
    //         return item.id !== id
    //     })
    //     setState(previousState => {
    //         return {
    //             ...previousState,
    //             items: filteredItems
    //         }
    //     })
    //     console.log("Todos was removed")
    // }

    const createTasks = item => {
        return (
            <div className="content-wrp" key={item.id}>
                <div className="todo-wrp" >
                    <button className="status-btn" onClick={() => statusHandler({ id: item.id, clicked: item.clicked })}>
                        <img src={item.clicked ? check : times} alt="trash-box"></img>
                    </button>
                    <li key={item.id}>{item.text}</li>
                    <button className="trash-btn" onClick={() => deleteItem(item.id)}>
                        <img src={trash} alt="trash-box"></img>
                    </button>
                </div>
            </div>
        )
    }
    const listItems = state.items.map(createTasks)

    return (
        <>
            <CurentDate />
            <ul>{listItems}</ul>
        </>
    )
}

export default TodoItems;