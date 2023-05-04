import React, { useRef, useEffect } from "react";
import style from "./Main.module.css";
import Bank from "../../../../assets/bank.svg";

const Main = () => {
  return (
    <section className={(style["layout-padding"], style["script-section"])}>
      <div className={style["heading-container"]}>
        <h1>Explore the scripts!</h1>
      </div>
      <div className={style["script-container"]}>
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

export default Main;
