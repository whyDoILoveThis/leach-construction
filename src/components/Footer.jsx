import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer w-full bg-black-79">
      <div className="ml-8 mb-10">
        <p className="logo">
          <Link to={"/"}>🛠 Leach</Link>
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <h3 className="footer-section-title">
            <Link className="link" to={"/services"}>
              Services
            </Link>
          </h3>
          <ul className="footer-section-list">
            <li>
              <Link className="link" to={"/showers"}>
                Showers
              </Link>
            </li>
            <li className="link">
              <Link to={"/floors"}>Floors</Link>
            </li>
            <li className="link">
              <Link to={"porches"}>Porches</Link>
            </li>
            <li className="link">
              <Link to={"remodels"}>Entire Remodels</Link>
            </li>
            <li className="link">
              <Link to={"roofing"}>Roofing</Link>
            </li>
            <li className="link">
              <Link to={"additions"}>Additions</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="footer-section-title">
            <Link className="link" to={"/about"}>
              About
            </Link>
          </h3>
          <ul className="footer-section-list">
            <li className="link">
              <Link to={"/about"}>The Company</Link>
            </li>
            <li className="link">
              <Link to={"/about"}>The Owner</Link>
            </li>
            <li className="link">
              <Link to={"/about"}>Our Promise</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="footer-section-title">Contact</h3>
          <ul className="footer-section-list">
            <li>Get a Quote</li>
            <li>Location</li>
            <li>
              Customer <br /> Service Request
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright w-full flex justify-center mt-20">
        <p>©2024 Site Made By - Ian Thai Smith</p>
      </div>
    </div>
  );
};

export default Footer;
