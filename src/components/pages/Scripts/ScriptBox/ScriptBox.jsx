import React from "react";
import styles from "./ScriptBox.module.css";
import Bank from "../../../../assets/bank.svg";

const ScriptBox = ({ script }) => {
  return (
    <div className={styles.box}>
      <div className={styles["img-box"]}>
        <img src={Bank} alt="Bank SVG" />
      </div>
      <div className={styles["detail-box"]}>
        <h3>{script.name}</h3>
        <p>{script.description}</p>
      </div>
    </div>
  );
};

export default ScriptBox;
