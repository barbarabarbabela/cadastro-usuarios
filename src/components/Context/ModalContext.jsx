import { createContext, useState } from "react";
import Modal from "../Modal/Modal";

export const ModalContext = createContext(null);

export const ModalProvider = (props) => {
  const [modalContent, setModalContent] = useState(null);
  const closeModal = () => {
    setModalContent(null);
  };
  const handleModal = (content) => {
    setModalContent(content);
  };

  return (
    <ModalContext.Provider value={{ handleModal }}>
      {props.children}
      {!!modalContent ? (
        <Modal {...modalContent} closeModal={closeModal} />
      ) : null}
    </ModalContext.Provider>
  );
};
