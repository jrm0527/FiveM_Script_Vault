import React, { useRef, useEffect } from "react";
import styles from "./Main.module.css";
import Bank from "../../../../assets/bank.svg";
import ScriptBox from "../../Scripts/ScriptBox/ScriptBox.jsx";

const Main = ({ scripts }) => {
  return (
    <section className={(styles["layout-padding"], styles["script-section"])}>
      <div className={styles["heading-container"]}>
        <h1>Explore the scripts!</h1>
      </div>
      <div className={styles["script-container"]}>
        <div className={styles.box}>
          <div className={styles["img-box"]}>
            <img src={Bank} alt="Bank SVG" />
          </div>
          <div className={styles["detail-box"]}>
            <h3>{scripts[0].name}</h3>
            <p>{scripts[0].description}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles["img-box"]}>
            <img src={Bank} alt="Bank SVG" />
          </div>
          <div className={styles["detail-box"]}>
            <h3>{scripts[1].name}</h3>
            <p>{scripts[1].description}</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles["img-box"]}>
            <img src={Bank} alt="Bank SVG" />
          </div>
          <div className={styles["detail-box"]}>
            <h3>{scripts[2].name}</h3>
            <p>{scripts[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
