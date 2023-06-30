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

        <Marquee className={styles.containerIcon}>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <PyTorch />
            </span>
            <span className={styles.iconName}>PyTorch</span>
          </div>

          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <MongoDB />
            </span>
            <span className={styles.iconName}>MongoDB</span>
          </div>

          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <Miro />
            </span>{" "}
            <span className={styles.iconName}>Miro</span>
          </div>

          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <Jira />
            </span>{" "}
            <span className={styles.iconName}>Jira</span>
          </div>

          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <GitHub />
            </span>
            <span className={styles.iconName}>GitHub</span>
          </div>

          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <Canvas />
            </span>
            <span className={styles.iconName}>Canvas</span>
          </div>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <Figma />
            </span>
            <span className={styles.iconName}>Figma</span>
          </div>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <Python />
            </span>
            <span className={styles.iconName}>Python</span>
          </div>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <ReactJS />
            </span>
            <span className={styles.iconName}>React JS</span>
          </div>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <Kotlin />
            </span>
            <span className={styles.iconName}>Kotlin</span>
          </div>
          <div className={styles.iconContainer}>
            <span className={styles.icon}>
              <NodeJS />
            </span>
            <span className={styles.iconName}>Node.js</span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ToolsWeUse;
