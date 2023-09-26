export interface IJobSearchResponse {
  total: {
    value: number;
  };
  hits: IJobAdSearchResult[];
}

interface IJobAdSearchResult {
  id: string;
  description: {
    text: string;
  };
  employer: {
    name: string;
  };
  occupation: {
    label: string;
  };
  publication_date: string;
  application_deadline: string;
  workplace_address: {
    municipality: string;
  }
}
