import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.navigationWrapper}>
        <div className={styles.logoWrapper}>
          <span className={styles.stylish}>FiveM</span>
          <span className={styles.logo}>Script Vault</span>
        </div>
        <ul className={styles.navigation}>
          <li className={styles.parent}>
            <a className={styles.link} href="#">
              Home
            </a>
          </li>
          <li className={styles.parent}>
            <a className={styles.link} href="#">
              Scripts
            </a>
          </li>
          <li className={styles.parent} id="clients">
            <a className={styles.link} href="#">
              Admin
            </a>
          </li>
          <li className={styles.parent} id="services">
            <a className={styles.link} href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
