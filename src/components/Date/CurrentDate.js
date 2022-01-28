import React, { useState } from "react";

import "../../assets/current-date.css";

const CurentDate = () => {

  const date = new Date();
  const current = date.toLocaleString('en-us',{year: 'numeric', month: 'short', day: 'numeric', weekday: 'short'});

  const [currentDate, setCurrentData] = useState(current);

  return (
    <div className="curent-data">
      {currentDate}
    </div>
  );
}

export default CurentDate;