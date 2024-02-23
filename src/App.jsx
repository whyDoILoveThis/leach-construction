import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Bathrooms from "./Pages/Bathrooms";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const [dropped, setDropped] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowy = "scroll";
  }, []);

  return (
    <article className="app-wrap">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bathrooms" element={<Bathrooms />} />

          <Route
            path="/about"
            element={<About dropped={dropped} setDropped={setDropped} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </article>
  );
}

export default App;
