import React, { useState, useEffect } from "react";
import styles from "./ScriptInfo.module.css";
// import Bank from "../../assets/bank.svg";

const ScriptInfo = ({ script, showContent, setShowContent }) => {
  if (!showContent) return <></>;

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.script}>
          <h2 className={styles["script_title"]}>
            {script.name.toUpperCase()}
          </h2>
          <div className={styles["img-box"]}>
            <img
              src={`src/assets/${script.image}.svg`}
              alt={`${script.image} SVG`}
            />
          </div>
          <div className={styles["script_content"]}>
            <p className={styles["script_description"]}>{script.description}</p>
          </div>
          <div className={styles["script_footer"]}>
            <hr />
            <button
              onClick={() => {
                setShowContent(false);
              }}
              className={styles["script_cancel"]}
            >
              CLOSE
            </button>
            <button
              onClick={() => window.open(`${script.download_link}`, "_blank")}
              className={styles["script_download"]}
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScriptInfo;
