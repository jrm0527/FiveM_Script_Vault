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
            <div className={styles["dialog__content"]}>
              <h2 className={styles["dialog__title"]}>{title}</h2>
              <p className={styles["dialog__description"]}>{statement}</p>
            </div>

            <hr />

            <div className={styles["dialog__footer"]}>
              <button onClick={cancel} className={styles["dialog__cancel"]}>
                {cancelButton}
              </button>
              <button onClick={confirm} className={styles["dialog__confirm"]}>
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
            <div className={styles["dialog__content"]}>
              <h2 className={styles["dialog__title"]}>{title}</h2>
              <p className={styles["dialog__description"]}>{statement}</p>
            </div>

            <hr />

            <div className={styles["dialog__footer"]}>
              <button onClick={confirm} className={styles["dialog__confirm"]}>
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
