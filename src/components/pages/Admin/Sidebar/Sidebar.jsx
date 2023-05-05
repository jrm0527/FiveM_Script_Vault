import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ currentScript, setCurrentScript }) => {
  const nextScript = () => {
    setCurrentScript(currentScript + 1);
  };
  const previousScript = () => {
    setCurrentScript(currentScript - 1);
  };

  return (
    <div className="sidebar">
      <button className={styles["menu-buttons"]}>Add Script</button>
      <br />
      <br />
      <button className={styles["menu-buttons"]}>Update Script</button>
      <br />
      <br />
      <button className={styles["menu-buttons"]}>Delete Script</button>
      <br />
      <br />
      <button onClick={nextScript} className={styles["menu-buttons"]}>
        Next Script
      </button>
      <br />
      <br />
      <button onClick={previousScript} className={styles["menu-buttons"]}>
        Previous Script
      </button>
      <br />
      <br />
      <button className={styles["menu-buttons"]}>Clear Script</button>
    </div>
  );
};

export default Sidebar;
