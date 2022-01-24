import React from "react";
import "./input-todo.css";


class InputTodo extends React.Component {
    // componentDidUpdate() {
    //     this.props.inputElement.current.focus()
    // }
    render() {
        return (
            <div className="form-wrp">
                <form onSubmit={this.props.addItem} className="form">
                    <input className="input"
                        placeholder="Write your taask here"
                        ref={this.props.inputElement}
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput}
                    />
                    <button className="add-btn"
                    type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}

export default InputTodo;