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
import AudienceForm from "./Pages/Forms/AudienceForm";
import Contacts from "./Pages/Contacts";
import ApiProvider, { useApi } from "./Context/ApiContext";
function App() {
  return (
    <div className="App bg-slate-100">
      <VideoProvider>
        <ApiProvider>
          <Nav />
          <Routes>
            <Route path="/Ethiopian_Idol" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos/:routeParam" element={<AllVideoLists />} />
            <Route path="/apply" element={<Register />} />
            <Route path="/login" element={<AudienceForm />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </ApiProvider>
      </VideoProvider>
    </div>
  );
}

export default App;
