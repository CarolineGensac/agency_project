import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Works from "./pages/Works/works";
import Navbar from "./components/Navbar";
import Platon from "./pages/Platon/platon.jsx";
import Sedal from "./pages/Sedal/sedal.jsx";
import Solane from "./pages/Solane/solane.jsx";
import "./styles/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<Sedal />} />
          <Route path="/works/:id" element={<Solane />} />
          <Route path="/works/:id" element={<Platon />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
