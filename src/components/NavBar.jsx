import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

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
      <div className="nav  bg-black-79 fixed flex flex-col justify-center p-4 ">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img className="w-56 " src={Logo} />
          </Link>
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

        <ul
          className={`  overflow-hidden ${
            isMobileMenuOpen
              ? "open-mobile flex flex-col gap-8 font-bold py-10 pl-6"
              : "closed-mobile max-h-0 p-0"
          }  xs:hidden`}
        >
          <Link className="w-full" to={"/"}>
            <li>
              <Link
                to={"/"}
                className="m-link hover:bg-white-transparent rounded-xl hover:px-3"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
          </Link>
          <Link className="w-full" to={"/services"}>
            <li>
              <Link
                to={"/services"}
                className="m-link hover:bg-white-transparent rounded-xl hover:px-3"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
          </Link>
          <Link className="w-full" to={"/about"}>
            <li>
              <Link
                to={"/about"}
                className="m-link w-full hover:bg-white-transparent rounded-xl hover:px-3"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
          </Link>
          <Link className="w-full" to={"/contact"}>
            <li>
              <Link
                to={"/contact"}
                className="m-link hover:bg-white-transparent rounded-xl hover:px-3"
                onClick={toggleMobileMenu}
              >
                Contact Info
              </Link>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
