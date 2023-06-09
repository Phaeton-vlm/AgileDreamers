export type CompanyCardType = {
  id: number;
  companyName: string;
  companyDescription: string;
  budget: number;
  teamSize: number;
  foundationDate: number;
  averageHourlyRate: string;
  location: string;
};

export type CompanyCardListType = Array<CompanyCardType>;