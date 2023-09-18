import { get } from "./baseService";
import { IJobSearchResponse } from "../models/IJobSearchResponse";

export const getHistoricalJobs = async (fromDate: string, toDate: string, employer: string): Promise<IJobSearchResponse[]> => {
    try {
      const BASEURL = `https://historical.api.jobtechdev.se/search`;
      const queryParams = `?employer=${employer}&offset=0&limit=10&request-timeout=300&historical-from=${fromDate}&historical-to=${toDate}`;
      const apiUrl = `${BASEURL}${queryParams}`;
  
      const jobsResponse = await get<IJobSearchResponse[]>(apiUrl);
  
      console.log(jobsResponse);
  
      return jobsResponse;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error; 
    }
  };