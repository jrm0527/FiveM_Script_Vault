import React, { useState, useEffect } from "react";
import styles from "./ScriptDetails.module.css";
import Confirmation from "../../../Confirmation/Confirmation.jsx";

const ScriptDetails = ({
  currentScript,
  scripts,
  setCurrentScript,
  setScriptUpdate,
  scriptUpdate,
}) => {
  const [scriptName, setScriptName] = useState("");
  const [scriptDownload, setScriptDownload] = useState("");
  const [scriptDescription, setScriptDescription] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const [showUpdated, setShowUpdated] = useState(false);

  useEffect(() => {
    setScriptName(scripts[currentScript].name);
    setScriptDownload(scripts[currentScript].download_link);
    setScriptDescription(scripts[currentScript].description);
  }, [currentScript]);

  const nextScript = () => {
    if (currentScript >= scripts.length - 1) return;
    setCurrentScript(currentScript + 1);
  };
  const previousScript = () => {
    if (currentScript === 0) return;
    setCurrentScript(currentScript - 1);
  };

  const addScript = async () => {
    if (scriptName === "" || scriptDownload === "" || scriptDescription === "")
      return;
    const newScript = {
      name: scriptName,
      download_link: scriptDownload,
      description: scriptDescription,
    };

    try {
      await fetch(`http://localhost:8000/api/scripts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(newScript),
      });
      setShowAdded(true);
      setScriptUpdate(scriptUpdate + 1);
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateScript = async () => {
    const updatedScript = {
      name: scriptName,
      download_link: scriptDownload,
      description: scriptDescription,
    };

    try {
      await fetch(
        `http://localhost:8000/api/scripts/${scripts[currentScript].id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(updatedScript),
        }
      );
      setShowUpdated(true);
      setScriptUpdate(scriptUpdate + 1);
    } catch (error) {
      console.log("error", error);
    }
  };

  const confirmDelete = async () => {
    setShowDeleteConfirm(false);

    try {
      await fetch(
        `http://localhost:8000/api/scripts/${scripts[currentScript].id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setShowDeleted(true);
      setScriptUpdate(scriptUpdate + 1);
    } catch (error) {
      console.log("error", error);
    }
  };

  const clearScript = () => {
    setScriptName("");
    setScriptDownload("");
    setScriptDescription("");
  };

  return (
    <div className={styles["admin-box"]}>
      <div className={styles.sidebar}>
        <button onClick={addScript} className={styles["menu-buttons"]}>
          Add Script
        </button>
        <Confirmation
          show={showAdded}
          title={`${scriptName.toUpperCase()}`}
          statement={`${scriptName} has been added!`}
          confirm={() => setShowAdded(false)}
          confirmButton={"CLOSE"}
          confirmationButtons={false}
        />
        <button onClick={updateScript} className={styles["menu-buttons"]}>
          Update Script
        </button>
        <Confirmation
          show={showUpdated}
          title={`${scriptName.toUpperCase()}`}
          statement={`${scriptName} has been updated!`}
          confirm={() => setShowUpdated(false)}
          confirmButton={"CLOSE"}
          confirmationButtons={false}
        />
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className={styles["menu-buttons"]}
        >
          Delete Script
        </button>
        <Confirmation
          show={showDeleteConfirm}
          title={"DELETE SCRIPT"}
          statement={`Are you sure you want to delete ${scriptName}?`}
          confirm={confirmDelete}
          confirmButton={"DELETE"}
          cancel={() => setShowDeleteConfirm(false)}
          cancelButton={"CANCEL"}
          confirmationButtons={true}
        />
        <Confirmation
          show={showDeleted}
          title={`${scriptName.toUpperCase()}`}
          statement={`${scriptName} has been deleted`}
          confirm={() => {
            setShowDeleted(false);
            if (currentScript > 0) previousScript();
            else nextScript();
          }}
          confirmButton={"CLOSE"}
          confirmationButtons={false}
        />
        <button onClick={nextScript} className={styles["menu-buttons"]}>
          Next Script
        </button>
        <button onClick={previousScript} className={styles["menu-buttons"]}>
          Previous Script
        </button>
        <button onClick={clearScript} className={styles["menu-buttons"]}>
          Clear Script
        </button>
      </div>
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
                onChange={(e) => setScriptName(e.target.value)}
                value={scriptName}
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
                onChange={(e) => setScriptDownload(e.target.value)}
                value={scriptDownload}
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
              <textarea
                rows="5"
                cols="60"
                className={styles["input-description"]}
                id="description"
                onChange={(e) => setScriptDescription(e.target.value)}
                value={scriptDescription}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScriptDetails;
