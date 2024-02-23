import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="nav h-20 bg-black-79 fixed flex items-center justify-between p-4 ">
        <p className="logo text-white text-xl font-bold">
          <Link to={"/"}>🛠 Leach</Link>
        </p>
        <div className="mobile-menu xs:hidden">
          <button
            className="hamburger-menu text-white text-2xl"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
        <ul className="xxs:hidden xs:flex gap-10 visible">
          <li>
            <Link to={"/"} className="link text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/services"} className="link text-white">
              Services
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="link text-white">
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="link text-white">
              Contact Info
            </Link>
          </li>
        </ul>
      </div>
      {isMobileMenuOpen && (
        <ul className="mobile-menu-items bg-black-79 xs:hidden">
          <li>
            <Link to={"/"} className="link" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/services"} className="link" onClick={toggleMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="link" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="link" onClick={toggleMobileMenu}>
              Contact Info
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
