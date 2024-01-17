import "./Modal.css";
import { useEffect, useReducer } from "react";
import InputField from "../InputField/InputField";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";

const Modal = (props) => {
  const formReducer = (state, action) => {
    if (action.type === "START_FORM") {
      return action.user;
    }
    if (action.type === "UPDATE_INPUT") {
      return { ...state, [action.name]: action.value };
    }
    return state;
  };

  const [state, dispatch] = useReducer(formReducer, {
    id: uuidv4(),
    category: "Cliente",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (props.isEdit) {
      dispatch({ type: "START_FORM", user: { ...props.user } });
    }
  }, [props.isEdit]);

  const handleChange = (event) => {
    dispatch({
      type: "UPDATE_INPUT",
      name: event.target.name,
      value: event.target.value,
    });
  };

  const sendForm = () => {
    const usersInLocalStorage = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = props.isEdit
      ? usersInLocalStorage.map((user) => (user.id === state.id ? state : user))
      : [...usersInLocalStorage, state];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const editUser = (userProps) => {
    const usersInLocalStorage = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = usersInLocalStorage.findIndex(
      (user) => user.id === userProps.id
    );

    if (userIndex !== -1) {
      const updatedUsers = [...usersInLocalStorage];
      updatedUsers[userIndex] = { ...userProps, ...state };

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  return (
    <div className="Modal">
      <div className="modalContainer">
        <form>
          <h1>{props.isEdit ? "Atualizar Usuário" : "Adicionar Usuário"}</h1>
          <div className="input">
            <Select
              name="category"
              label="Categoria: "
              onChange={handleChange}
              value={state.category}
            />
            <InputField
              value={state.name}
              name="name"
              label="Nome: "
              required={false}
              placeholder="Nome"
              type="text"
              onChange={handleChange}
            />
            <InputField
              value={state.email}
              name="email"
              label="E-mail: "
              required={false}
              placeholder="E-mail"
              type="text"
              onChange={handleChange}
            />
          </div>

          <div className="Button">
            <Button
              onClick={props.isEdit ? () => editUser(props.user) : sendForm}
              name={props.isEdit ? "Atualizar Usuário" : "Adicionar Usuário"}
            />
            <Button name="Cancelar" onClick={props.closeModal} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
