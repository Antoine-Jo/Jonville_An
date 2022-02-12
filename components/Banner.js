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
      {/* <>
        <h1 className="mx-[2rem] my-0 text-[2rem]">
          Antoine <span className="text-[#c8c8ca]">Jonville</span>
        </h1>
      </> */}
      {/* <nav className="flex h-[5rem] items-center">
        <Link href="#">
          <a className="text-[#63F5AA] mx-4 hover:text-[#fff]">
            {"< Services >"}
          </a>
        </Link>
        <Link href="#about">
          <a className="mx-4 hover:text-[#63f5aa]">About</a>
        </Link>
        <Link href="#portfolio">
          <a className="mx-4 hover:text-[#63f5aa]">PortFolio</a>
        </Link>
        <Link href="#contact">
          <a className="mx-4 hover:text-[#63f5aa]">Contact</a>
        </Link>
      </nav> */}

      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <h1 className="mx-[2rem] my-0 text-[2rem] navbar__logo">
          Antoine <span className="text-[#c8c8ca]">Jonville</span>
        </h1>
        <ul className="navbar__links">
          <Link href="#" className="navbar__link">
            <a
              className="navbar__item slideInDown-1 m-4 text-[1.5rem]"
              onClick={handleShowMenu}
            >
              Accueil
            </a>
          </Link>
          <Link href="#portfolio" className="navbar__link">
            <a
              className="navbar__item  slideInDown-2 m-4 text-[1.5rem]"
              onClick={handleShowMenu}
            >
              Portfolio
            </a>
          </Link>
          <Link href="#about" className="navbar__link">
            <a
              className="navbar__item slideInDown-3 m-4 text-[1.5rem]"
              onClick={handleShowMenu}
            >
              À propos
            </a>
          </Link>
          <Link href="#contact" className="navbar__link">
            <a
              className="navbar__item slideInDown-4 m-4 text-[1.5rem]"
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
