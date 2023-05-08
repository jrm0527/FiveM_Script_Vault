import React from "react";
import styles from "./Main.module.css";
import ScriptBox from "../../Scripts/ScriptBox/ScriptBox.jsx";

const Main = ({ scripts }) => {
  const size = 3;
  const displayScripts = scripts.slice(0, size);
  return (
    <section className={(styles["layout-padding"], styles["script-section"])}>
      <div className={styles["heading-container"]}>
        <h1>Explore the top downloaded scripts!</h1>
      </div>
      <div className={styles["script-container"]}>
        {displayScripts.map((script) => (
          <ScriptBox key={script.id} script={script} />
        ))}
      </div>
    </section>
  );
};

export default Main;
