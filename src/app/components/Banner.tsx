"use client";
import Link from "next/link";
import { useState } from "react";

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
                    <li className="navbar__link">
                        <Link href="/" className="navbar__item slideInDown-1 mr-4 text-[1.5rem] hover:text-[#64F4AC]" onClick={handleShowMenu}>
                            Accueil
                        </Link>
                    </li>
                    <li className="navbar__link">
                        <Link href="#portfolio" className="navbar__item slideInDown-2 mr-4 text-[1.5rem] hover:text-[#64F4AC]" onClick={handleShowMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="navbar__link">
                        <Link href="#about" className="navbar__item slideInDown-3 mr-4 text-[1.5rem] hover:text-[#64F4AC]" onClick={handleShowMenu}>
                            À propos
                        </Link>
                    </li>
                    <li className="navbar__link">
                        <Link href="#contact" className="navbar__item slideInDown-4 mr-4 text-[1.5rem] hover:text-[#64F4AC]" onClick={handleShowMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <button aria-label="Menu" className="navbar__burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>
            </nav>
        </header>
    );
}
