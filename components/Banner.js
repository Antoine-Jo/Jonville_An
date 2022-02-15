import Link from "next/link";
import { useState } from "react";
// import styles from "../styles/Banner.module.css";

export default function Banner() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleShowMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <ul className="navbar__links">
          <Link href="/" className="navbar__link">
            <a
              className="navbar__item slideInDown-1 mr-4 text-[1.5rem] hover:text-[#64F4AC]"
              onClick={handleShowMenu}
            >
              Accueil
            </a>
          </Link>
          <Link href="#portfolio" className="navbar__link">
            <a
              className="navbar__item  slideInDown-2 mr-4 text-[1.5rem] hover:text-[#64F4AC]"
              onClick={handleShowMenu}
            >
              Portfolio
            </a>
          </Link>
          <Link href="#about" className="navbar__link">
            <a
              className="navbar__item slideInDown-3 mr-4 text-[1.5rem] hover:text-[#64F4AC]"
              onClick={handleShowMenu}
            >
              À propos
            </a>
          </Link>
          <Link href="#contact" className="navbar__link">
            <a
              className="navbar__item slideInDown-4 mr-4 text-[1.5rem] hover:text-[#64F4AC]"
              onClick={handleShowMenu}
            >
              Contact
            </a>
          </Link>
        </ul>
        <button
          aria-label="Menu"
          className="navbar__burger"
          onClick={handleShowLinks}
        >
          <span className="burger-bar"></span>
        </button>
      </nav>
    </header>
  );
}
