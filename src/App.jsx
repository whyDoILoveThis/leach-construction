import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="app-wrap">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </article>
  );
}

export default App;
