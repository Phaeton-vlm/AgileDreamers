export type CompanyCardType = {
  id: number;
  companyName: string;
  companyDescription: string;
  fullCompanyDescription: string;
  budget: number;
  teamSize: number;
  foundationDate: number;
  averageHourlyRate: string;
  location: string;
  softwareStack: Array<string>;
};

export type CompanyCardListType = Array<CompanyCardType>;