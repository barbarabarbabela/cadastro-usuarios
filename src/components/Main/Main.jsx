import "./Main.css";
import Header from "../Header/Header";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { ModalContext } from "../Context/ModalContext";

const Main = () => {
  const { handleModal } = useContext(ModalContext);

  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    const storageUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(storageUsers);
  }, []);
  return (
    <div className="Main">
      <Header />
      <div className="button">
        <Button
          name="Adicionar Usuário"
          onClick={() => handleModal({ isEdit: false })}
        />
      </div>
      <div className="users">
        {users
          ? users.map((user) => (
              <Card
                setUsers={setUsers}
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                category={user.category}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Main;
