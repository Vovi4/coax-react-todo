import React, { useState } from "react";
import "./current-date.css";

const CurentDate = () => {
    
        const date = new Date();
        const current = (date.getMonth() + 1) + " " + date.getDate() + " " + date.getFullYear();
        
        const [currentDate, setCurrentData] = useState(current);
        
        return (
            <div className="curent-data">
                {currentDate}
            </div>
        );
}

export default CurentDate;