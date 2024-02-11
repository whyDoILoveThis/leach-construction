import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nav h-20 bg-black-79 fixed flex items-center justify-between p-4">
      <p className="logo">
        <Link to={"/"}>🛠 Leach</Link>
      </p>
      <ul className="flex gap-10">
        <li>
          <Link to={"/"} className="link">
            Home
          </Link>
        </li>

        <li>
          <Link to={"/services"} className="link">
            Services
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="link">
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="link">
            Contact Info
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
