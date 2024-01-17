import Main from "../components/Main/Main";
import "./App.css";
import { UserProvider } from "../components/Context/UserContext";
import { ModalProvider } from "../components/Context/ModalContext";

function App() {
  return (
    <UserProvider>
      <ModalProvider>
        <div className="App">
          <Main />
        </div>
      </ModalProvider>
    </UserProvider>
  );
}

export default App;
