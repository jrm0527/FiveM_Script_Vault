import React from "react";
import styles from "./Highlights.module.css";

const Highlights = () => {
  return (
    <section className={styles.highlights}>
      <div className={styles["script-box"]}>
        <div className={styles["heading-container"]}>
          <h2>About the scripts</h2>
        </div>
        <ul className={styles.bullets}>
          <li>All Scripts Compatible with QB-CORE</li>
          <li>Free to download</li>
          <li>Free to edit</li>
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
