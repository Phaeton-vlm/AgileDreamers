import classnames from "classnames";
import React from "react";
import { BlueLine } from "../../Assets/Benefits/BlueLine";
import { BlueLines } from "../../Assets/Benefits/BlueLines";
import { WhiteLines } from "../../Assets/Benefits/WhiteLines";

import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.name}>Benefits</div>
        <div className={styles.containerBenefits}>
          <div
          className={classnames(
            styles.containerBenefit,
            styles.darkContainerBenefit
          )}
        >
          <div className={styles.title}>Scalable architecture</div>
          <div className={styles.subtitle}>
            Longrun CTO expertise to fulfil operational and strategic
            requirements
          </div>

          <div className={styles.blueLine}>
            <BlueLine />
          </div>
        </div>

        <div
          className={classnames(
            styles.containerBenefit,
            styles.blueContainerBenefit
          )}
        >
          <div className={styles.title}>ISO Documentation</div>
          <div className={styles.subtitle}>
            Transparent scope of work accompanied with UX/UI stories and full
            documentation
          </div>
          <div className={styles.whiteLines}>
            <WhiteLines />
          </div>
        </div>

        <div
          className={classnames(
            styles.containerBenefit,
            styles.whiteContainerBenefit
          )}
        >
          <div className={classnames(styles.title, styles.blueText)}>
            Experience driven
          </div>
          <div className={classnames(styles.subtitle, styles.blueText)}>
            We are matching you with the providers that have previous successful
            experience in your business filed
          </div>

          <div className={styles.blueLines}>
            <BlueLines />
          </div>
        </div>

        <div
          className={classnames(
            styles.containerBenefit,
            styles.darkContainerBenefit
          )}
        >
          <div className={styles.title}>Budget-based</div>
          <div className={styles.subtitle}>
            Agile approach and prioritisation technics allow us to fulfil your
            budget expectations
          </div>

          <div className={styles.blueLine}>
            <BlueLine />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
