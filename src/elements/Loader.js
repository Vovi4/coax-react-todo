import spinner from "../assets/icons/spinner.svg";

import "../assets/elements/loader.css";

const Loader = () => {
  return (
    <div className="spinner-wrp">
      <img 
      className="spinner"
      src={spinner} alt="spinner"></img>
    </div>
  )
}

export default Loader;