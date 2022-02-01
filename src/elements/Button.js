import "../assets/elements/button.css";

const Button = (props) => {
  return (
    <div className="btn-wrp">
      <button onClick={props.onClick} className="fetch-btn">Todos from server</button>
    </div>
  )
}

export default Button;