import React, { useEffect, useState } from "react";
import { ArrowIcon } from "../../Assets/ContactBlock/ArrowIcon";
import { LineIcon } from "../../Assets/ContactBlock/LineIcon";
import Button, { ButtonTypes } from "../Button";
import Input from "../Input";
import { InputTypes } from "../Input/Input";
import Multiselect from "multiselect-react-dropdown";

import styles from "./ContactBlock.module.css";

const ContactBlock = () => {
  const keyAreas = [
    { name: "Platform Development", id: 1 },
    { name: "Software Development", id: 2 },
    { name: "Mobile App Development", id: 3 },
    { name: "FinTech Development", id: 4 },
    { name: "AR/VR", id: 5 },
    { name: "AI - Artificial Intelligence", id: 6 },
    { name: "Blockchain Development", id: 7 },
  ];

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
            type={ButtonTypes.BigSecondary}
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
            <Multiselect
              options={keyAreas}
              displayValue="name"
              showCheckbox={true}
              placeholder="Key Areas"
              customArrow={<ArrowIcon />}
              className={styles.keyAreas}
              style={{
                searchBox: {
                  "border": "none",
                  "border-bottom": "none",
                  "border-radius": "0px",
                  "color": "rgba(252, 252, 252, 0.64)",
                  "padding": "1px 2px 12px 16px",
                },
                inputField: {
                  "font-size": "20px",
                  "font-family": "Karla",
                  "line-height": "28px",
                  "color": "rgba(252, 252, 252, 0.64)",
                  "width": "660px"
                },
                chips: {
                  "background": "transparent",
                },
                multiselectContainer: {
                  "color": "#1D1E2C",
                  "font-size": "16px",
                  "font-family": "Karla",
                  "line-height": "20px",
                  "height": "100%",
                  
                },
                optionContainer: {
                  "border-radius": "10px",
                  "max-height": "100%",
                  "background": "#F4F4F4",
                }
              }}
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
