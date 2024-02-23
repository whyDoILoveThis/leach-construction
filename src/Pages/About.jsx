import NavBar from "../components/NavBar.jsx";

import Footer from "../components/Footer.jsx";
import DropDown from "../components/DropDown.jsx";
import chevron from "../assets/icons/chevron.png";
import PropTypes from "prop-types";
import { useEffect } from "react";

const About = ({ dropped, setDropped }) => {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
  }, []);

  setDropped(dropped);

  const AboutSections = [
    {
      head: "The Company",
      body: `At Leach Construction, we take pride in being your trusted partner for all your construction and handyman needs. With years of experience serving our local community, we've built a reputation for excellence, reliability, and exceptional craftsmanship. Our dedicated team of professionals is committed to exceeding your expectations, whether it's transforming your home with custom showers, installing roofs to protect your family, or tackling any renovation project with skill and precision. We prioritize customer satisfaction above all else, ensuring that every job, big or small, is completed to the highest standards. When you choose Leach Construction, you're choosing quality, integrity, and a partner you can trust. Contact us today to experience the difference firsthand!`,
    },
    {
      head: "The Owner",
      body: `Hello! 👋 I'm Michael Leach, the proud owner and driving force behind Leach Construction. 💪 With a passion for construction and a commitment to excellence, I founded this company with the vision of providing unparalleled service and craftsmanship to our community. With 30 years of experience in the industry, I bring a wealth of knowledge and expertise to every project we undertake. From humble beginnings to becoming a trusted name in the local construction scene, my dedication to quality and customer satisfaction remains unwavering. I believe in the transformative power of home improvement and take great pride in helping our clients bring their visions to life. When you choose Leach Construction, you're not just getting a construction service – you're getting a partner who is personally invested in the success of your project. Thank you for considering us for your next endeavor!`,
    },
    {
      head: "Our Promise",
      body: `At Leach Construction, we stand by our commitment to excellence and customer satisfaction. Our promise to you is simple: to deliver exceptional service, quality workmanship, and a stress-free experience from start to finish. We understand that entrusting your home to us is a significant decision, and we take that responsibility seriously. From the initial consultation to the final walkthrough, we'll communicate openly, listen attentively, and go above and beyond to ensure your complete satisfaction. Whether it's a small repair or a large-scale renovation, we promise to treat your project with the same care and attention to detail as if it were our own. With Leach Construction, you can rest assured that your home is in capable hands. Experience the difference of working with a team that puts your needs first. Contact us today and let's bring your vision to life together!`,
    },
  ];
  return (
    <div className="w-full ">
      <NavBar />
      <div className="pt-40 flex flex-col items-center">
        <h2 className="section-title mb-20">👋 About Us</h2>

        {AboutSections.map((section, index) => (
          <DropDown
            key={index}
            showContent={dropped}
            heading={section.head}
            icon={chevron}
            text={section.body}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;

About.propTypes = {
  dropped: PropTypes.bool.isRequired,
  setDropped: PropTypes.func.isRequired,
};
