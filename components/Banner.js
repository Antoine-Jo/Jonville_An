import Link from "next/link";
import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
    <header className={styles.banner_container}>
      <div>
        <h1>
          Antoine <span>Jonville</span>
        </h1>
      </div>
      <nav>
        <Link href="#about">
          <a>About</a>
        </Link>
        <Link href="#portfolio">
          <a>PortFolio</a>
        </Link>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
}
