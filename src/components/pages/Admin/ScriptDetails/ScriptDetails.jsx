import React from "react";
import styles from "./ScriptDetails.module.css";

const ScriptDetails = ({ currentScript, scripts }) => {
  return (
    <div className={styles.container}>
      <table className={styles["table-scripts"]}>
        <tbody className={styles["text-center"]}>
          <tr>
            <td>
              <label className={styles["script-labels"]} htmlFor="scriptName">
                Script Name:
              </label>
            </td>
            <td>
              <input
                type="text"
                className={styles["input-text"]}
                id="scriptName"
                value={scripts[0] ? scripts[currentScript].name : ""}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label
                className={styles["script-labels"]}
                htmlFor="download_link"
              >
                Download Link:
              </label>
            </td>
            <td>
              <input
                type="text"
                className={styles["input-text"]}
                id="download_link"
                value={scripts[0] ? scripts[currentScript].download_link : ""}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className={styles["script-labels"]} htmlFor="description">
                Description:
              </label>
            </td>
            <td>
              <input
                type="text"
                className={styles["input-text"]}
                id="description"
                value={scripts[0] ? scripts[currentScript].description : ""}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScriptDetails;
