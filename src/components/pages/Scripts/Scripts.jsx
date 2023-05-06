import React from "react";
import ScriptBox from "./ScriptBox/ScriptBox.jsx";
import styles from "./Scripts.module.css";

const Scripts = ({ scripts }) => {
  console.log(scripts);
  return (
    <div className={styles["script-box"]}>
      {scripts.map((script) => (
        <ScriptBox key={script.id} script={script} />
      ))}
    </div>
  );
};

export default Scripts;
