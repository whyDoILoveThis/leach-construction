import { useState } from "react";
import { Link } from "react-router-dom";
import PopModal from "./PopModal";
import PopForm from "./PopForm";
import Logo from "../assets/logo.png";
import facebook from "../assets/social/facebook.png";
import twitterx from "../assets/social/twitterx.png";
import chevron from "../assets/icons/chevron.png";

const Footer = () => {
  const [showServicesLinks, setShowServicesLinks] = useState(false);
  const [showAboutLinks, setShowAboutLinks] = useState(false);
  const [showContactLinks, setShowContactLinks] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [companyModal, setCompanyModal] = useState(false);
  const [ownerModal, setOwnerModal] = useState(false);
  const [promiseModal, setPromiseModal] = useState(false);

  const toggleServicesLinks = () => setShowServicesLinks(!showServicesLinks);
  const toggleAboutLinks = () => setShowAboutLinks(!showAboutLinks);
  const toggleContactLinks = () => setShowContactLinks(!showContactLinks);

  const serviceLinks = [
    {
      title: "All Services",
      link: "/services",
    },
    {
      title: "Bathrooms",
      link: "/bathrooms",
    },
    {
      title: "Floors",
      link: "/floors",
    },
    {
      title: "Porches",
      link: "/porches",
    },
    {
      title: "Entire Remodels",
      link: "/remodels",
    },
    {
      title: "Roofing",
      link: "/roofing",
    },
    {
      title: "Additions",
      link: "/additions",
    },
  ];

  return (
    <div className="footer w-full bg-black-79">
      <div className="ml-8 mb-10">
        <Link to={"/"}>
          {" "}
          <img className="w-56 pt-4" src={Logo} alt="Leach" />{" "}
        </Link>
      </div>
      <div className="flex xxs:flex-col xs:flex-row xs:justify-evenly">
        <div className="flex flex-col ">
          <h3 className="footer-section-title xxs:hidden xs:inline">
            <Link className="link" to={"/services"}>
              Services
            </Link>
          </h3>
          <h3
            className="footer-section-title xxs:flex xxs:p-8 xxs:py-6 xxs:rounded-3xl xxs:justify-between xxs:bg-white-transparent xxs:m-8 xs:hidden"
            onClick={toggleServicesLinks}
          >
            <p>Services</p>

            <img
              draggable={false}
              className={`w-14 h-14 chevron ${
                showServicesLinks && "rotate-chevron"
              }`}
              src={chevron}
              alt=""
            />
          </h3>
          <ul
            className={`footer-section-list xxs:inline xxs:ml-14 xs:hidden ${
              showServicesLinks ? "fade-in" : "fade-out"
            }`}
          >
            {serviceLinks.map((service, index) => (
              <li key={index} className="link">
                <Link to={service.link}>{service.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="footer-section-list xxs:hidden xs:inline">
            {serviceLinks.map((service, index) => (
              <li key={index} className="link">
                <Link to={service.link}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="footer-section-title xxs:hidden xs:inline">
            <Link className="link" to={"/about"}>
              About
            </Link>
          </h3>
          <h3
            className="footer-section-title xxs:flex xxs:p-8 xxs:py-6 xxs:rounded-3xl xxs:justify-between xxs:bg-white-transparent xxs:m-8 xs:hidden"
            onClick={toggleAboutLinks}
          >
            <p>About</p>
            <img
              draggable={false}
              className={`w-14 h-14 chevron ${
                showAboutLinks && "rotate-chevron"
              }`}
              src={chevron}
              alt=""
            />
          </h3>
          <ul
            className={`footer-section-list xxs:inline xxs:ml-14 xs:hidden ${
              showAboutLinks ? "fade-in" : "fade-out"
            }`}
          >
            <li className="link">
              <Link to={"/about"}>About Page</Link>
            </li>
            <li className="link">
              <p
                onClick={() => {
                  showAboutLinks && setCompanyModal(true);
                }}
              >
                The Company
              </p>
              {companyModal && (
                <PopModal
                  visibility={true}
                  close={() => setCompanyModal(false)}
                  color=""
                  title="About Our Company"
                  lgText=""
                  smText={`At Leach Construction, we take pride in being your trusted partner for all your 
                    construction and handyman needs. With years of experience serving our local community,
                    we've built a reputation for excellence, reliability, and exceptional craftsmanship. 
                    Our dedicated team of professionals is committed to exceeding your expectations, 
                    whether it's transforming your home with custom showers, installing roofs to protect
                    your family, or tackling any renovation project with skill and precision. We
                    prioritize customer satisfaction above all else, ensuring that every job, big or 
                    small, is completed to the highest standards. When you choose Leach Construction, 
                    you're choosing quality, integrity, and a partner you can trust. Contact us today 
                    to experience the difference firsthand!`}
                />
              )}
            </li>
            <li className="link">
              <p
                onClick={() => {
                  showAboutLinks && setOwnerModal(true);
                }}
              >
                The Owner
              </p>
              {ownerModal && (
                <PopModal
                  visibility={true}
                  close={() => setOwnerModal(false)}
                  color=""
                  title="About The Owner"
                  lgText=""
                  smText={`👋 Hello! I'm Michael Leach, the proud owner and driving force behind Leach
                    Construction. With a passion for construction and a commitment to excellence, I
                    founded this company with the vision of providing unparalleled service and 
                    craftsmanship to our community. With 30 years of experience in the industry, I 
                    bring a wealth of knowledge and expertise to every project we undertake. From
                    humble beginnings to becoming a trusted name in the local construction scene,
                    my dedication to quality and customer satisfaction remains unwavering. I believe
                    in the transformative power of home improvement and take great pride in helping
                    our clients bring their visions to life. When you choose Leach Construction,
                    you're not just getting a construction service – you're getting a partner who
                    is personally invested in the success of your project. Thank you for considering
                    us for your next endeavor!`}
                />
              )}
            </li>
            <li className="link">
              <p
                onClick={() => {
                  showAboutLinks && setPromiseModal(true);
                }}
              >
                Our Promise
              </p>
              {promiseModal && (
                <PopModal
                  visibility={true}
                  close={() => setPromiseModal(false)}
                  color=""
                  title="Our Promise to You"
                  lgText=""
                  smText={`At Leach Construction, we stand by our commitment to excellence and customer 
                    satisfaction. Our promise to you is simple: to deliver exceptional service, quality 
                    workmanship, and a stress-free experience from start to finish. We understand that
                    entrusting your home to us is a significant decision, and we take that responsibility 
                    seriously. From the initial consultation to the final walkthrough, we'll communicate 
                    openly, listen attentively, and go above and beyond to ensure your complete 
                    satisfaction. Whether it's a small repair or a large-scale renovation, we promise
                    to treat your project with the same care and attention to detail as if it were our
                    own. With Leach Construction, you can rest assured that your home is in capable
                    hands. Experience the difference of working with a team that puts your needs first.
                    Contact us today and let's bring your vision to life together!`}
                />
              )}
            </li>
          </ul>
          <ul className="footer-section-list xxs:hidden xs:inline">
            <li className="link">
              <p onClick={() => setCompanyModal(true)}>The Company</p>
              {companyModal && (
                <PopModal
                  visibility={true}
                  close={() => setCompanyModal(false)}
                  color=""
                  title="About Our Company"
                  lgText=""
                  smText={`At Leach Construction, we take pride in being your trusted partner for all your 
                    construction and handyman needs. With years of experience serving our local community,
                    we've built a reputation for excellence, reliability, and exceptional craftsmanship. 
                    Our dedicated team of professionals is committed to exceeding your expectations, 
                    whether it's transforming your home with custom showers, installing roofs to protect
                    your family, or tackling any renovation project with skill and precision. We
                    prioritize customer satisfaction above all else, ensuring that every job, big or 
                    small, is completed to the highest standards. When you choose Leach Construction, 
                    you're choosing quality, integrity, and a partner you can trust. Contact us today 
                    to experience the difference firsthand!`}
                />
              )}
            </li>
            <li className="link">
              <p onClick={() => setOwnerModal(true)}>The Owner</p>
              {ownerModal && (
                <PopModal
                  visibility={true}
                  close={() => setOwnerModal(false)}
                  color=""
                  title="About The Owner"
                  lgText=""
                  smText={`👋 Hello! I'm Michael Leach, the proud owner and driving force behind Leach
                    Construction. With a passion for construction and a commitment to excellence, I
                    founded this company with the vision of providing unparalleled service and 
                    craftsmanship to our community. With 30 years of experience in the industry, I 
                    bring a wealth of knowledge and expertise to every project we undertake. From
                    humble beginnings to becoming a trusted name in the local construction scene,
                    my dedication to quality and customer satisfaction remains unwavering. I believe
                    in the transformative power of home improvement and take great pride in helping
                    our clients bring their visions to life. When you choose Leach Construction,
                    you're not just getting a construction service – you're getting a partner who
                    is personally invested in the success of your project. Thank you for considering
                    us for your next endeavor!`}
                />
              )}
            </li>
            <li className="link">
              <p onClick={() => setPromiseModal(true)}>Our Promise</p>
              {promiseModal && (
                <PopModal
                  visibility={true}
                  close={() => setPromiseModal(false)}
                  color=""
                  title="Our Promise to You"
                  lgText=""
                  smText={`At Leach Construction, we stand by our commitment to excellence and customer 
                    satisfaction. Our promise to you is simple: to deliver exceptional service, quality 
                    workmanship, and a stress-free experience from start to finish. We understand that
                    entrusting your home to us is a significant decision, and we take that responsibility 
                    seriously. From the initial consultation to the final walkthrough, we'll communicate 
                    openly, listen attentively, and go above and beyond to ensure your complete 
                    satisfaction. Whether it's a small repair or a large-scale renovation, we promise
                    to treat your project with the same care and attention to detail as if it were our
                    own. With Leach Construction, you can rest assured that your home is in capable
                    hands. Experience the difference of working with a team that puts your needs first.
                    Contact us today and let's bring your vision to life together!`}
                />
              )}
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="footer-section-title xxs:hidden xs:inline">
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
          </h3>
          <h3
            className="footer-section-title xxs:flex xxs:p-8 xxs:py-6 xxs:rounded-3xl xxs:justify-between xxs:bg-white-transparent xxs:m-8 xs:hidden"
            onClick={toggleContactLinks}
          >
            <p>Contact</p>
            <img
              draggable={false}
              className={`w-14 h-14 chevron ${
                showContactLinks && "rotate-chevron"
              }`}
              src={chevron}
              alt=""
            />
          </h3>

          <ul
            className={`footer-section-list xxs:inline xxs:ml-14 xs:hidden ${
              showContactLinks ? "fade-in" : "fade-out"
            }`}
          >
            <li className="link">
              <Link to={"/contact"}>Contact Page</Link>
            </li>
            <li className="link">
              <p onClick={() => setShowQuoteForm(true)}>Get a Quote</p>
              {showQuoteForm && (
                <PopForm
                  openForm={showQuoteForm}
                  setOpenForm={setShowQuoteForm}
                  showCustomerService={false}
                  showContactForm={false}
                  showQuoteForm={true}
                />
              )}
            </li>
            <li className="link">
              <p onClick={() => setShowRequestForm(true)}>
                Customer <br /> Service Request
              </p>
              {showRequestForm && (
                <PopForm
                  openForm={showRequestForm}
                  setOpenForm={setShowRequestForm}
                  showCustomerService={true}
                  showContactForm={false}
                  showQuoteForm={false}
                />
              )}
            </li>
          </ul>

          <ul className="footer-section-list xxs:hidden xs:inline">
            <li className="link">
              <p onClick={() => setShowQuoteForm(true)}>Get a Quote</p>
              {showQuoteForm && (
                <PopForm
                  openForm={showQuoteForm}
                  setOpenForm={setShowQuoteForm}
                  showCustomerService={false}
                  showContactForm={false}
                  showQuoteForm={true}
                />
              )}
            </li>
            <li className="link">
              <p onClick={() => setShowRequestForm(true)}>
                Customer <br /> Service Request
              </p>
              {showRequestForm && (
                <PopForm
                  openForm={showRequestForm}
                  setOpenForm={setShowRequestForm}
                  showCustomerService={true}
                  showContactForm={false}
                  showQuoteForm={false}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-12 ml-12 mt-6">
        <Link>
          <img className="w-16 " src={facebook} alt="facebook" />
        </Link>
        <Link>
          <img className="w-12" src={twitterx} alt="twitter" />
        </Link>
      </div>
      <div className="copyright w-full flex justify-center mt-6">
        <p>©2024 Site Made By - Ian Thai Smith</p>
      </div>
    </div>
  );
};

export default Footer;
