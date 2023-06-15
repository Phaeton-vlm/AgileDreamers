import React from "react";

import { Line } from "../../Assets/Headline/Line";
import { Puzzle } from "../../Assets/Headline/PuzzlePicture";
import Button, { ButtonTypes } from "../Button";

import Ukraine from "../Ukraine";

import styles from "./Headline.module.css";

const Headline = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.ukraine}>
          <Ukraine />
        </div>

        <div className={styles.containerTop}>
          <div className={styles.text}>
            <div className={styles.title}>
              Efficient digital{" "}
              <span className={styles.titleViolet}>solutions</span> with Agile
              Dreamers
            </div>
            <div className={styles.subTitle}>
              Agile Dreamer Platform is a set of unique focused SaaS services
              and dedicated software development teams that are combined to
              build your new digital system in the most efficient way possible
              having a solid business sense of go-to-market-strategies and agile
              approach.
            </div>
          </div>
          <div className={styles.image}>
            <Puzzle />
          </div>
        </div>

        <div className={styles.containerBottom}>
          <div className={styles.buttons}>
          <Button
            className={styles.buttonSignIn}
            title={"Service Providers"}
            type={ButtonTypes.Primary}
            onClick={() => {}}
          />
          <Button
            className={styles.buttonSignUp}
            title={"Become a Provider"}
            type={ButtonTypes.Secondary}
            onClick={() => {}}
          />
                    <Button
            className={styles.buttonSignUp}
            title={"Become a Freelance Developer"}
            type={ButtonTypes.Secondary}
            onClick={() => {}}
          />
          </div>
          <div>
            <Line />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
