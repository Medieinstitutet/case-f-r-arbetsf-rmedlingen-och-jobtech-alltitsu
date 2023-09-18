import { get } from "./baseService";
import { IJobSearch } from "../models/IJobSearch";

export const getHistoricalJobs = async (fromDate: string, toDate: string, employer: string): Promise<IJobSearch[]> => {
    try {
      const BASEURL = `https://historical.api.jobtechdev.se/search`;
      const queryParams = `?employer=${employer}&offset=0&limit=10&request-timeout=300&fromDate=${fromDate}&toDate=${toDate}`;
      const apiUrl = `${BASEURL}${queryParams}`;
  
      const jobsResponse = await get<IJobSearch[]>(apiUrl);
  
      console.log(jobsResponse);
  
      return jobsResponse;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error; 
    }
  };