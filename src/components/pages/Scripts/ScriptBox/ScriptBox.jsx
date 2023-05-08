import React, { useState } from "react";
import styles from "./ScriptBox.module.css";
import Bank from "../../../../assets/bank.svg";
import ScriptInfo from "../../../ScriptInfo/ScriptInfo";

const ScriptBox = ({ script }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <ScriptInfo
        script={script}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <div onClick={() => setShowContent(true)} className={styles.box}>
        <div className={styles["img-box"]}>
          <img
            src={`src/assets/${script.image}.svg`}
            alt={`${script.image} SVG`}
          />
        </div>
        <div className={styles["detail-box"]}>
          <h3>{script.name}</h3>
          <p>{script.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default ScriptBox;
