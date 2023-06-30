import React from "react";
import CompanyCardList from "../../Components/CompanyCardList";
import SearchLine from "../../Components/SearchLine";

import styles from "./ProvidersPage.module.css";

const MOCK_CARD = {
   id: 1,
   companyName: "Capix",
   companyDescription:
     "Fintech professional with decades of experience in the capital and financial markets",
   budget: 10000,
   teamSize: 5,
   foundationDate: 1991,
   averageHourlyRate: "150",
   location: "Melbourne",
 };
 
 const MOCK_CARD_LIST = [MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD];

const ProvidersPage = () => {

  return (
      <div className={styles.container}>
        <SearchLine />
        <CompanyCardList cardsList={MOCK_CARD_LIST} />
      </div>
  );
};

export default ProvidersPage;
