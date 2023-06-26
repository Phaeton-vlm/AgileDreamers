import React, { useEffect, useState } from "react";
import { ArrowIcon } from "../../Assets/ContactBlock/ArrowIcon";
import { LineIcon } from "../../Assets/ContactBlock/LineIcon";
import Button, { ButtonTypes } from "../Button";
import Input from "../Input";
import { InputTypes } from "../Input/Input";

import styles from "./ContactBlock.module.css";

const ContactBlock = () => {

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.title}>
          Ready to set up a call to dive deep into details of your project
        </div>

        <div className={styles.containerButton}>
          <Button
            className={styles.button}
            title={
              <div className={styles.buttonTitle}>
                Successful experience in building Mobile and Web applications{" "}
                <ArrowIcon />
              </div>
            }
            type={ButtonTypes.Secondary}
            onClick={() => {}}
          />
          <div className={styles.advantages}>Data Science and AI</div>
          <div className={styles.advantages}>Classical Dating</div>
          <div className={styles.advantages}>
            E-wallet/exchange and Payments
          </div>
          <div className={styles.advantages}>Logistics and Supply Chain</div>
          <div className={styles.advantages}>
            Project Management Platform Development
          </div>
          <div className={styles.advantages}>
            Marketing tracking and content management
          </div>
          <div className={styles.advantages}>A lot more</div>
        </div>

        <div className={styles.containerContact}>
          <div className={styles.containerForm}>
            <Input
              value={""}
              onChange={() => {}}
              placeholder={"Name"}
              type={InputTypes.InputType}
            />
            <Input
              value={""}
              onChange={() => {}}
              placeholder={"Email"}
              type={InputTypes.InputType}
            />
            <Input
              value={""}
              onChange={() => {}}
              placeholder={"Phone"}
              type={InputTypes.InputType}
            />
      
            <Input
              value={""}
              onChange={() => {}}
              placeholder={
                "You can write additional information that may be helpful to us"
              }
              type={InputTypes.InputType}
            />
          </div>

          <div className={styles.containerDescription}>
            <div className={styles.containerBigText}>
              <div className={styles.bigText}>Contact</div>
              <div className={styles.containerWithLine}>
                <LineIcon />
                <span className={styles.bigText}>Us</span>
              </div>
            </div>
            <div className={styles.containerSmallText}>
              <div className={styles.smallText}>contact@agiledreamers.com</div>
              <div className={styles.smallText}>@AgileDreamers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
