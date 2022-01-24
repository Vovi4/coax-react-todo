import React from 'react';
import './todo-items.css';
import trash from "../../Img/trash.svg";
import check from "../../Img/check.svg";
import times from "../../Img/times.svg";
import CurentDate from '../Date/CurrentDate';

class TodoItems extends React.Component {

    // state = { clicked: true };

    // statusHandler = () => {
    //     this.setState(state => ({ clicked: !state.clicked }));
    // }

    createTasks = item => {
        return (
            <div className="content-wrp">
                <div className="todo-wrp" >
                    <button className="status-btn" onClick={this.statusHandler}>
                        {/* <img src={this.state.clicked ? check : times} alt='trash-box'></img> */}
                    </button>
                    <li key={item.key}>{item.text}</li>
                    <button className="trash-btn" onClick={() => this.props.deleteItem(item.key)}>
                        <img src={trash} alt='trash-box'></img>
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