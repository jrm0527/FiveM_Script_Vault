import React, { useState } from "react";
import ScriptDetails from "./ScriptDetails/ScriptDetails.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import styles from "./Admin.module.css";

const Admin = ({ adminProps }) => {
  return (
    <div className={styles["admin-box"]}>
      <Sidebar
        setCurrentScript={adminProps.setCurrentScript}
        currentScript={adminProps.currentScript}
      />
      <ScriptDetails
        currentScript={adminProps.currentScript}
        scripts={adminProps.scripts}
      />
    </div>
  );
};

export default Admin;
