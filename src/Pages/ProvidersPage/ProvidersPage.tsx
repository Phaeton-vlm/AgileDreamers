import React from "react";
import CompanyCardList from "../../Components/CompanyCardList";
import SearchLine from "../../Components/SearchLine";

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
  softwareStack: [],
  fullCompanyDescription:
    "Kos and Art used to work in several digital agencies since 2009. Around 2015 they decided to launch their own company that would combine the knowledge of the digital world, design, and desires to be really customer-centric both with client service and the projects.With the support of our third partner Dmitry, who used to be a partner in a well-known law firm, they founded Artkai. The team started as a UX-focused design boutique.",
};

const MOCK_CARD_LIST = [MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD];

const ProvidersPage = () => {
  return (
    <div>
      <SearchLine />
      <CompanyCardList cardsList={MOCK_CARD_LIST} />
    </div>
  );
};

export default ProvidersPage;
