import React from "react";
import "./current-date.css";

class CurentDate extends React.Component {
    constructor() {
        super()

        let data = new Date(),
        current = (data.getMonth() + 1) + " " + data.getDate() + " " + data.getFullYear();

        this.state = {
            date: current
        }
    }

    render() {
        return (
            <div className="curent-data">
                {this.state.date}
            </div>
        );
    }
}

export default CurentDate;