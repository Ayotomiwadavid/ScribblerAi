import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pricing from "../src/Pages/Pricing";
import Notfound from "./Pages/Notfound";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./Pages/Chat";
import ProfilePage from "./Components/Profile";
import { UserProvider } from "./Components/Controller";

function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Pricing />} />
          <Route path="/userAuth/registration" element={<Register />} />
          <Route path="/userAuth/login" element={<Login />} />
          <Route path="/Userchatbot" element={<Chat />} />
          <Route path="/user-Profile" element={<ProfilePage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
