import React from "react";
import { Ionic } from "../../Assets/ToolsWeUse/Ionic";

import styles from "./ToolsWeUse.module.css";

const ToolsWeUse = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.title}>Tools we use</div>
        <div className={styles.dark}><Ionic /> </div>
      </div>
    </div>
  );
};

export default ToolsWeUse;
