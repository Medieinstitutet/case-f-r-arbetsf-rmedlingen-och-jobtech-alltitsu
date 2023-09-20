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
}
