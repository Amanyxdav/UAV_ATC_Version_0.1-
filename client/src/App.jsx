import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// import LiveData from "./pages/LiveData";
function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-[#111213]">
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} className="absolute" />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {
            // <Route path="/live-data" element={<LiveData />} />
          }
        </Routes>
      </div>
    </div>
  );
}

export default App;
