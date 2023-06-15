import React, { useState, useEffect } from "react";

import { Outlet, useParams } from "react-router-dom";
import Benefits from "../../Components/Benefits";
import CompanyCardList from "../../Components/CompanyCardList";
import Headline from "../../Components/Headline";
import SearchLine from "../../Components/SearchLine";

import styles from "./Home.module.css";

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

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Headline />
        <SearchLine />
        <CompanyCardList cardsList={MOCK_CARD_LIST} />
        <Benefits />
      </div>
    </>
  );
};

export default Home;
