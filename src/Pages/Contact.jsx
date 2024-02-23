import NavBar from "../components/NavBar.jsx";
import ContactHeader from "../components/ContactHeader.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  return (
    <div className="w-full ">
      <NavBar />
      <ContactHeader />
      <Footer />
    </div>
  );
};

export default Contact;
