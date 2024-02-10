import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import HomeServices from "../components/HomeServices.jsx";
import HomeReviews from "../components/HomeReviews.jsx";
import HomeSendEmail from "../components/HomeSendEmail.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
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
