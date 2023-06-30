import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./CompanyCard.module.css";
import { CompanyCardType } from "../../Constants/@types";
import { BudgetIcon } from "../../Assets/CompanyCard/BudgetIcon";
import { PeoplesIcon } from "../../Assets/CompanyCard/PeoplesIcon";
import { FlagIcon } from "../../Assets/CompanyCard/FlagIcon";
import { ClockIcon } from "../../Assets/CompanyCard/ClockIcon";
import { LocationIcon } from "../../Assets/CompanyCard/LocationIcon";

import Button, { ButtonTypes } from "../Button";
import { PathNames } from "../../Pages/Router/Router";

type CompanyCardProps = {
  card: CompanyCardType;
};

const CompanyCard: FC<CompanyCardProps> = ({ card }) => {
  const {
    id,
    companyName,
    companyDescription,
    fullCompanyDescription,
    budget,
    teamSize,
    foundationDate,
    averageHourlyRate,
    location,
  } = card;

  const navigate = useNavigate();
  const onMoreClick = () => {
    navigate(PathNames.CompanyPage)};

  return (
        
    <div className={styles.card}>
      <div className={styles.title}>{companyName}</div>

      <div className={styles.text}>{companyDescription}</div>

      <div className={styles.containerAnswers}>
        <div className={styles.answers}>
          <div className={styles.answer}>
            <BudgetIcon /> <div>{budget}</div>
          </div>
          <div className={styles.answer}>
            <PeoplesIcon /> <div>{teamSize}</div>
          </div>
          <div className={styles.answer}>
            <FlagIcon /> <div>{foundationDate}</div>
          </div>
        </div>
        <div className={styles.answers}>
          <div className={styles.answer}>
            <ClockIcon /> <div>{averageHourlyRate}</div>
          </div>
          <div className={styles.answer}>
            <LocationIcon /> <div>{location}</div>
          </div>
        </div>
      </div>

      <div className={styles.containerButtons}>
        <Button
          className={styles.button}
          title={"Visit Website"}
          type={ButtonTypes.CardPrimary}
          onClick={() => {}}
        />
        <Button
          className={styles.button}
          title={"Chat"}
          type={ButtonTypes.CardSecondary}
          onClick={() => {}}
        />

          <Button
            className={styles.button}
            title={"More about"}
            type={ButtonTypes.CardSecondary}
            onClick={onMoreClick}
          />
 
      </div>
    </div>
  );
};

export default CompanyCard;
