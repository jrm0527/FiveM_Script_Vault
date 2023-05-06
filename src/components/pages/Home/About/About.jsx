import React, { useRef, useEffect } from "react";
import styles from "./About.module.css";
import Bank from "../../../../assets/bank.svg";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles["heading-container"]}>
        <h2>About</h2>
      </div>
      <div className={styles["test-container"]}></div>
    </section>
  );
};

export default About;
