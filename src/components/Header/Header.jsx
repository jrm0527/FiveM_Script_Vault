import React from "react";
import styles from "./Header.module.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.parent}>
            <Link className={styles.link} to="/scripts">
              Scripts
            </Link>
          </li>
          <li className={styles.parent}>
            <Link className={styles.link} to="/admin">
              Admin
            </Link>
          </li>
          {/* <li className={styles.parent}>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
