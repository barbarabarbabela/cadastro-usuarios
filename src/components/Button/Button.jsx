import "./Button.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="Button">
      {props.name}
    </button>
  );
};

export default Button;
