import Button from "../Button/Button";
import { useContext } from "react";
import "./Card.css";
import { ModalContext } from "../Context/ModalContext";

const Card = (props) => {
  const { handleModal } = useContext(ModalContext);

  const deleteUser = (userId) => {
    const confirmDeletion = window.confirm(
      "Tem certeza que deseja excluir este usuário?"
    );
    if (confirmDeletion) {
      const users = JSON.parse(localStorage.getItem("users"));
      const newUsers = users.filter((user) => user.id !== userId);
      localStorage.setItem("users", JSON.stringify(newUsers));
      props.setUsers(newUsers);
    }
  };

  return (
    <div className="Users">
      <p className="category">{props.category}</p>
      <h2 className="name">{props.name}</h2>
      <p className="email">{props.email}</p>
      <div className="actions">
        <Button
          name="Editar"
          onClick={() =>
            handleModal({
              isEdit: true,
              user: {
                id: props.id,
                name: props.name,
                email: props.email,
                category: props.category,
              },
            })
          }
        />
        <Button name="Deletar" onClick={() => deleteUser(props.id)} />
      </div>
    </div>
  );
};

export default Card;
