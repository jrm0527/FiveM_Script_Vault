import React, { useRef, useEffect } from "react";
import style from "./About.module.css";
import Bank from "../../../../assets/bank.svg";

const About = () => {
  return (
    <section id="about" className={style.about}>
      <div className={style["heading-container"]}>
        <h2>About</h2>
      </div>
      <div className={style["test-container"]}></div>
    </section>
  );
};

export default About;
