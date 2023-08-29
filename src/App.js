import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav_Bar/Nav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import AllVideoLists from "./Pages/AllVideoLists";
import VideoProvider from "./Context/NewVideo";
import Footer from "./Components/Footer/Footer";
import Register from "./Pages/Forms/Register";
import Contacts from "./Pages/Contacts";
import ApiProvider, { useApi } from "./Context/ApiContext";
import UserDataContext from "./Context/UserContext";
import Signup from "./Pages/Forms/Form/Signup";
import { LogIn } from "react-feather";
import Login from "./Pages/Forms/Form/Login";
import Checkout from "./Components/Payment/Checkout";
function App() {
  return (
    <div className="App bg-slate-100">
      <VideoProvider>
        <ApiProvider>
          <UserDataContext>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/videos/:routeParam" element={<AllVideoLists />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </UserDataContext>
        </ApiProvider>
      </VideoProvider>
    </div>
  );
}

export default App;
