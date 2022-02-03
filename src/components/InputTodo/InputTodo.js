import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../../redux/actions/postActions";

import "../../assets/input-todo.css";


const InputTodo = () => {

	const [currentItem, setCurent] = useState("")

	const dispatch = useDispatch();
	const state = useSelector(state => state.todos)

	const handleInput = e => {
		const newItem = {
			title: e.target.value,
			id: Date.now(),
			completed: false
		}
		setCurent(newItem)
	}

	const addItem = e => {
		e.preventDefault()
		if (!currentItem.title.trim()) {
			return console.log("Todo input field is empty")
		}
		dispatch(addTodo(currentItem))
		console.log(`Todo ${currentItem.title} was added`)
		localStorage.setItem("Todo-item", JSON.stringify([...state.items, currentItem]));
		setCurent({ title: "" })
	}

	return (
		<div className="form-wrp">
			<form onSubmit={addItem} className="form">
				<input
					name="title"
					type="text"
					className="input"
					placeholder="Write your taask here"
					value={currentItem.title}
					onChange={handleInput}
				/>
				<button className="add-btn"
					type="submit">Add</button>
			</form>
		</div>
	)
}

export default InputTodo;