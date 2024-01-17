import "./InputField.css";

const InputField = (props) => {
  return (
    <div className="InputField">
      <label>{props.label}</label>
      <input
        name={props.name}
        required={props.required}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default InputField;
