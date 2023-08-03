import React from "react";
import { ArrowReturn } from "../../Assets/CompanyPage/ArrowReturn";
import { BudgetIcon } from "../../Assets/CompanyCard/BudgetIcon";
import { ClockIcon } from "../../Assets/CompanyCard/ClockIcon";
import { FlagIcon } from "../../Assets/CompanyCard/FlagIcon";
import { LocationIcon } from "../../Assets/CompanyCard/LocationIcon";
import { PeoplesIcon } from "../../Assets/CompanyCard/PeoplesIcon";
import Button, { ButtonTypes } from "../../Components/Button";

import styles from "./CompanyPage.module.css";
import { ArrowIcon } from "../../Assets/ContactBlock/ArrowIcon";
import { ArrowWhite } from "../../Assets/CompanyPage/ArrowWhite";

const MOCK_CARD = {
  id: 1,
  companyName: "Artkai.ai",
  companyDescription:
    "Artkai is a Customer-centric digital product innovation. We help entrepreneurs, innovators, industry disruptors and established businesses shape and launch digital products using a human-centered and research-based approach (certified by NN/g)",
  budget: 8000,
  teamSize: 100,
  foundationDate: 2015,
  averageHourlyRate: "40-75",
  location: "Kyiv, Ukraine",
  fullCompanyDescription:
    "Kos and Art used to work in several digital agencies since 2009. Around 2015 they decided to launch their own company that would combine the knowledge of the digital world, design, and desires to be really customer-centric both with client service and the projects.With the support of our third partner Dmitry, who used to be a partner in a well-known law firm, they founded Artkai. The team started as a UX-focused design boutique.",
  softwareStack: [
    {name: "CI/CD - Github"},
    {name: "AWS"},
    {name: "Angular"},
    {name: "Node.js"},
    {name: "PostgreSQL"},
    {name: "Swagger"},
    {name: "Koa 2"},
    {name: "Redis"},
    {name: "vue.js"},
    {name: ".NET"},
    {name: "Kubernetes"},
    {name: "Chai"},
    {name: "Docker"},
    {name: "MySQL"},
    {name: "MongoDB"},
    {name: "React Native"},
    {name: "MS Azure services"},
  ],
};

const CompanyPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerButton}>
        <Button
          className={styles.button}
          title={
            <div className={styles.buttonName}>
              <ArrowReturn /> Return
            </div>
          }
          type={ButtonTypes.SmallSecondary}
          onClick={() => {}}
        />
      </div>

      <div className={styles.containerCompanyInfo}>
        <div className={styles.companyInfo}>
          <div className={styles.companyName}>{MOCK_CARD.companyName}</div>
          <div className={styles.companyDescription}>
            {MOCK_CARD.companyDescription}
          </div>
          <div className={styles.title}>The story behind</div>
          <div className={styles.companyDescription}>
            {MOCK_CARD.fullCompanyDescription}
          </div>
          <div className={styles.link}>Read more</div>
        </div>

        <div className={styles.companyCard}>
          <div className={styles.containerAnswers}>
            <div className={styles.answers}>
              <div className={styles.answer}>
                <BudgetIcon /> <div>{MOCK_CARD.budget}</div>
              </div>
              <div className={styles.answer}>
                <PeoplesIcon /> <div>{MOCK_CARD.teamSize}</div>
              </div>
              <div className={styles.answer}>
                <FlagIcon /> <div>{MOCK_CARD.foundationDate}</div>
              </div>
            </div>
            <div className={styles.answers}>
              <div className={styles.answer}>
                <ClockIcon /> <div>{MOCK_CARD.averageHourlyRate}</div>
              </div>
              <div className={styles.answer}>
                <LocationIcon /> <div>{MOCK_CARD.location}</div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.reviewer}>The Reviewer</div>
            <div className={styles.contactsBlock}>
              <div className={styles.personBlock}>
                <div className={styles.avatar}></div>
                <div className={styles.person}>
                  <div className={styles.title}>Program Manager</div>
                  <div>Patrick Renteria</div>
                </div>
              </div>
              <Button
                className={styles.button}
                title={"Contact"}
                type={ButtonTypes.SmallPrimary}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerSpecializes}>
        <div className={styles.titleSpecializes}>
          Areas in which the company specializes
        </div>
        <div className={styles.areas}>
          <span className={styles.areaBlue}>
            Areas <ArrowWhite />
          </span>
          {MOCK_CARD.softwareStack.map( ( {name}) => {
            return (
              <span className={styles.area}> {name} </span>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
