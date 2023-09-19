export interface IJobSearchResponse {
  total: {
    NumberOfHits: INumberOfHits;
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
    }
  }
  
  interface INumberOfHits {
    value: number;
  }
  

  