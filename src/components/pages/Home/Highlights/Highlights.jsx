import React, { useRef, useEffect } from "react";
import style from "./Highlights.module.css";

const Highlights = () => {
  return (
    <section id="highlights" className={style.highlights}>
      <div className={style["heading-container"]}>
        <h2>About the scripts</h2>
      </div>
    </section>
  );
};

export default Highlights;
