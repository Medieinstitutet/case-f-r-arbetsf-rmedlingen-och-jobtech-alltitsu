export interface IJobSearchResponse {
    total: number;
    hits: [
      id: number,
      description:{
        title: string,
        text: string,
      },
      employer: {
        name: string,
      }

    ]
   
  }
