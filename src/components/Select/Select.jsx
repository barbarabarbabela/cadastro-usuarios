import "./Select.css";

const Select = (props) => {
  const options = ["Cliente", "Corretor de Seguro"];
  return (
    <div className="Select">
      <label>{props.label}</label>
      <select name={props.name} onChange={props.onChange} value={props.value}>
        {options.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
