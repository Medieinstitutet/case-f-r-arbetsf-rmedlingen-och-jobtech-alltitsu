import { get } from './baseService';
import { IJobSearchResponse } from '../models/IJobSearchResponse';
import { ISingleAd } from '../models/ISingleAd';

export const getHistoricalJobs = async (
  fromDate: string,
  toDate: string,
  employer: string,
  offset: number,
): Promise<IJobSearchResponse> => {
  try {
    const BASEURL = `https://historical.api.jobtechdev.se/search`;
    const queryParams = `?employer=${employer}&offset=${offset}&limit=10&request-timeout=300&historical-from=${fromDate}&historical-to=${toDate}`;
    const apiUrl = `${BASEURL}${queryParams}`;

    const jobsResponse = await get<IJobSearchResponse>(apiUrl);

    console.log(jobsResponse);

    return jobsResponse;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const getSingleAd = async (id: string): Promise<ISingleAd> => {
  try {
    const response = await get<ISingleAd>(`https://historical.api.jobtechdev.se/ad/${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};
