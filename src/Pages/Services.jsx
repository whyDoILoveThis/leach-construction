import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import ServicesHeader from "../components/ServicesHeader.jsx";
import ServicesList from "../components/ServicesList.jsx";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  return (
    <div className="w-full">
      <NavBar />
      <ServicesHeader
        title="Our Services"
        text="We offer many services including custom bathrooms, floor & tile installations, porch/deck builds, metal roofs, whole house remodels, additions, and raised foundation leveling. You name it, we can do it. There is no job too big or small. Contact us to get more information and to set up a free estimate."
      />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services;
