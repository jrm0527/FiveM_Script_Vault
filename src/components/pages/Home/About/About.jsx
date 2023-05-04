import React, { useRef, useEffect } from "react";
import style from "./About.module.css";
import Bank from "../../../../assets/bank.svg";

const About = () => {
  return (
    <section id="about" className={style.about}>
      <div className={style["heading-container"]}>
        <h2>About</h2>
      </div>
      <div className={style["test-container"]}>
        <div className={style.box}>
          <div className={style["img-box"]}>
            <img src={Bank} alt="Bank SVG" />
          </div>
          <div className={style["detail-box"]}>
            <h3>QB-BankRobbery</h3>
            <p>
              Want to add progression to your crims? This bank robbery script
              forces crims to follow a progression chain in order to have a
              chance to rob the ultimate bank!
            </p>
          </div>
        </div>
        <div className={style.box}>
          <div className={style["img-box"]}>
            <img src={Bank} alt="Bank SVG" />
          </div>
          <div className={style["detail-box"]}>
            <h3>QB-BankRobbery</h3>
            <p>
              Want to add progression to your crims? This bank robbery script
              forces crims to follow a progression chain in order to have a
              chance to rob the ultimate bank!
            </p>
          </div>
        </div>
        <div className={style.box}>
          <div className={style["img-box"]}>
            <img src={Bank} alt="Bank SVG" />
          </div>
          <div className={style["detail-box"]}>
            <h3>QB-BankRobbery</h3>
            <p>
              Want to add progression to your crims? This bank robbery script
              forces crims to follow a progression chain in order to have a
              chance to rob the ultimate bank!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
