import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import ServicesHeader from "../components/ServicesHeader.jsx";
import ServicesList from "../components/ServicesList.jsx";

const Services = () => {
  return (
    <div className="w-full">
      <NavBar />
      <ServicesHeader />
      <ServicesList />
      <Footer />
    </div>
  );
};

export default Services;
