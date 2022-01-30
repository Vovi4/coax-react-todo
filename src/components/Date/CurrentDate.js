import "../../assets/current-date.css";

const CurentDate = () => {

  const date = new Date();
  const current = date.toLocaleString('en-us',{year: 'numeric', month: 'short', day: 'numeric', weekday: 'short'});

  return (
    <div className="curent-data">
      {current}
    </div>
  );
}

export default CurentDate;