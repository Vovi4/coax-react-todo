import React, { useContext } from "react";

import { inputHandle, addTodo, TodoContext } from "../Context/Context";

import "../../assets/input-todo.css";


const InputTodo = () => {

	const { state, dispatch } = useContext(TodoContext);

	const handleInput = e => {
		const itemText = e.target.value;
		const currentItem = {
			text: itemText, 
			id: Date.now(),
			clicked: false
		}
		dispatch(inputHandle(currentItem))
	}

	const addItem = e => {
		e.preventDefault()
		const newItem = state.currentItem
		if (newItem.text !== "") {
			const items = [...state.items, newItem]
			dispatch(addTodo(items))
			console.log(`Todo ${newItem.text} was added`)
		}
	}

	return (
		<div className="form-wrp">
			<form onSubmit={addItem} className="form">
				<input
					type="text"
					className="input"
					placeholder="Write your taask here"
					value={state.currentItem.text}
					onChange={handleInput}
				/>
				<button className="add-btn"
					type="submit">Add</button>
			</form>
		</div>
	)
}

export default InputTodo;