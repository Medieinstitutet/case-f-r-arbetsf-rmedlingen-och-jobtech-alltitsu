export interface IJobSearchResponse {
    total: number;
    hits: [
      id: number,
      description:{
        text: string,
      },
      employer: {
        name: string,
      }

    ]
   
  }
