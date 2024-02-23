import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import HomeServices from "../components/HomeServices.jsx";
import HomeReviews from "../components/HomeReviews.jsx";
import HomeSendEmail from "../components/HomeSendEmail.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);
  return (
    <div className="w-full ">
      <NavBar />
      <Hero />
      <HomeServices />
      <HomeReviews />
      <HomeSendEmail />
      <Footer />
    </div>
  );
};

export default Home;
