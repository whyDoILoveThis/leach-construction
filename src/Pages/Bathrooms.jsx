import { useEffect } from "react";
import NavBar from "../components/NavBar";
import ServiceHero from "../components/ServiceHero";
import Footer from "../components/Footer";
import ServicesHeader from "../components/ServicesHeader";
import ServicePicGrid from "../components/ServicePicGrid";
import bath1 from "../assets/bath/bath-1.jpg";
import bath2 from "../assets/bath/bath-2.jpg";
import bath3 from "../assets/bath/bath-3.jpg";
import bath4 from "../assets/bath/bath-4.jpg";

const Bathrooms = () => {
  const pics = [bath1, bath2, bath3, bath4];

  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  return (
    <div>
      <NavBar />
      <ServiceHero />
      <ServicesHeader
        title=""
        text={` Looking to transform your bathroom into a luxurious oasis? Look no
            further! From elegant tile designs to sleek glass enclosures, we'll
            bring your vision to life with precision and care. Whether you
            desire a spa-like retreat or a modern masterpiece, we have the
            skills and expertise to exceed your expectations. Contact us today
            to schedule a free consultation and let's turn your bathroom into a
            sanctuary!`}
      />
      <ServicePicGrid pics={pics} />
      <Footer />
    </div>
  );
};

export default Bathrooms;
