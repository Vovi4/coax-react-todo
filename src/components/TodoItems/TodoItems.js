import React from "react";
import "./todo-items.css";
import trash from "../../Img/trash.svg";
import check from "../../Img/check.svg";
import times from "../../Img/times.svg";
import CurentDate from "../Date/CurrentDate";

class TodoItems extends React.Component {   

    componentDidUpdate (prevProps) {        
        if (this.props.entries.length > prevProps.entries.length) {
            const addedElement = this.props.entries
            console.log(`New todo ${addedElement[addedElement.length-1].text} was added`)
            localStorage.setItem("Todo-item", JSON.stringify(this.props.entries))
        }
    }

    createTasks = item => {
        return (
            <div className="content-wrp" key = {item.id}>  
                <div className="todo-wrp" >
                    <button className="status-btn" onClick = {() => this.props.statusHandler({id: item.id, clicked: item.clicked })}>
                        <img src={item.clicked ? check : times} alt="trash-box"></img>
                    </button>
                    <li key={item.id}>{item.text}</li>
                    <button className="trash-btn" onClick={() => this.props.deleteItem(item.id)}>
                        <img src={trash} alt="trash-box"></img>
                    </button>
                </div>
            </div>
        )
    }

    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return (
            <>
                <CurentDate />
                <ul>{listItems}</ul>                
            </>            
        )
    }
}

export default TodoItems;