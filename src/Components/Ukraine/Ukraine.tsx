import React from "react";
import { UkraineIcon } from "../../Assets/Header/UkraineIcon";
import styles from './Ukraine.module.css';

const Ukraine = () => {
   return (
      <div className={styles.container}>
         <div>We support <span className={styles.ukraine}>Ukraine</span></div><UkraineIcon />
      </div>
   );
};

export default Ukraine;