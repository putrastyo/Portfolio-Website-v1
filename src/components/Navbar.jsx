import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo.png";
import CloseIcon from "../assets/icons/close.png";
import HamburgerMenuIcon from "../assets/icons/hamburger-menu.png";

function Navbar() {
  const location = useLocation();
  const CURRENT_PATH = location.pathname;
  const ClassLinkActive =
    "text-pink-500 font-semibold border-b-2 border-pink-500 pb-2";

  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <nav className="py-4 fixed left-0 right-0 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} width="50px" />
        {/* DESKTOP NAVBAR */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <Link
              to="/"
              className={CURRENT_PATH === "/" ? ClassLinkActive : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/my-works"
              className={CURRENT_PATH === "/my-works" ? ClassLinkActive : ""}
            >
              My Works
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={CURRENT_PATH === "/blog" ? ClassLinkActive : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={CURRENT_PATH === "/contact" ? ClassLinkActive : ""}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE > PAD NAVBAR */}
        <button
          onClick={handleNav}
          className={`lg:hidden ${openNav ? "hidden" : "block"}`}
        >
          <img src={HamburgerMenuIcon} width="30px" />
        </button>
        <div
          className={
            openNav
              ? "lg:hidden pt-12 fixed top-0 right-0 w-[60%] bg-white border border-l-2 h-full"
              : "fixed top-0 bottom-0 right-[-100%]"
          }
        >
          <button onClick={handleNav} className="absolute right-4 top-4">
            <img src={CloseIcon} width="30px" />
          </button>
          <ul className="flex flex-col space-y-8 items-center">
            <li>
              <Link
                to="/"
                className={CURRENT_PATH === "/" ? ClassLinkActive : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/my-works"
                className={CURRENT_PATH === "/my-works" ? ClassLinkActive : ""}
              >
                My Works
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={CURRENT_PATH === "/blog" ? ClassLinkActive : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={CURRENT_PATH === "/contact" ? ClassLinkActive : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
