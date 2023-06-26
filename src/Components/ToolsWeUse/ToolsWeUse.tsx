import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "../../Assets/ToolsWeUse/Canvas";
import { Figma } from "../../Assets/ToolsWeUse/Figma";
import { GitHub } from "../../Assets/ToolsWeUse/GitHub";
import { Jira } from "../../Assets/ToolsWeUse/Jira";
import { Kotlin } from "../../Assets/ToolsWeUse/Kotlin";
import { Miro } from "../../Assets/ToolsWeUse/Miro";
import { MongoDB } from "../../Assets/ToolsWeUse/MongoDB";
import { NodeJS } from "../../Assets/ToolsWeUse/NodeJS";
import { Python } from "../../Assets/ToolsWeUse/Python";
import { PyTorch } from "../../Assets/ToolsWeUse/PyTorch";
import { ReactJS } from "../../Assets/ToolsWeUse/ReactJS";
import { Carousel } from "@trendyol-js/react-carousel";
import Marquee from "react-fast-marquee";

import styles from "./ToolsWeUse.module.css";

const ToolsWeUse = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.title}>Tools we use</div>
        <div className={styles.containerIcon}>
          
          <Marquee>
            <div className={styles.icon}>
              <PyTorch />
              PyTorch
            </div>
            <div className={styles.icon}>
              <MongoDB />
              MongoDB
            </div>
            <div className={styles.icon}>
              <Miro /> Miro
            </div>
            <div className={styles.icon}>
              <Jira /> Jira
            </div>
            <div className={styles.icon}>
              <GitHub />
              GitHub
            </div>
            <div className={styles.icon}>
              <Canvas />
              Canvas
            </div>
            <div className={styles.icon}>
              <Figma />
              Figma
            </div>
            <div className={styles.icon}>
              <Python />
              Python
            </div>
            <div className={styles.icon}>
              <ReactJS />
              React JS
            </div>
            <div className={styles.icon}>
              <Kotlin />
              Kotlin
            </div>
            <div className={styles.icon}>
              <NodeJS />
              Node.js
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ToolsWeUse;
