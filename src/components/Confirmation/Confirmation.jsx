import React, { useState, useEffect } from "react";
import styles from "./Confirmation.module.css";

const Confirmation = ({
  show,
  title,
  statement,
  confirm,
  confirmButton,
  cancel,
  cancelButton,
  confirmationButtons,
}) => {
  if (!show) return <></>;

  if (confirmationButtons) {
    return (
      <>
        <div className={styles.overlay}>
          <div className={styles.dialog}>
            <div className={styles["dialog_content"]}>
              <h2 className={styles["dialog_title"]}>{title}</h2>
              <p className={styles["dialog_description"]}>{statement}</p>
            </div>

            <hr />

            <div className={styles["dialog_footer"]}>
              <button onClick={cancel} className={styles["dialog_cancel"]}>
                {cancelButton}
              </button>
              <button onClick={confirm} className={styles["dialog_confirm"]}>
                {confirmButton}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.overlay}>
          <div className={styles.dialog}>
            <div className={styles["dialog_content"]}>
              <h2 className={styles["dialog_title"]}>{title}</h2>
              <p className={styles["dialog_description"]}>{statement}</p>
            </div>

            <hr />

            <div className={styles["dialog_footer"]}>
              <button onClick={confirm} className={styles["dialog_confirm"]}>
                {confirmButton}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Confirmation;
