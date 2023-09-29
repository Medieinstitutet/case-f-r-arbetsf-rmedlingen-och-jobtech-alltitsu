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
    console.log('hej');

    const jobsResponse = await get<IJobSearchResponse>(apiUrl);

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
    return {
      id: '',
      external_id: '',
      original_id: '',
      webpage_url: {},
      logo_url: '',
      headline: '',
      application_deadline: '',

      description: {
        text: '',
        text_formatted: '',
        company_information: '',
        needs: '',
        requirements: '',
        conditions: '',
      },

      salary_description: '',

      employer: {
        phone_number: '',
        email: '',
        url: '',
        organization_number: '',
        name: '',
        workplace: '',
      },

      experience_required: true,

      driving_license_required: true,

      workplace_address: {
        municipality: '',
        municipality_code: '',
        municipality_concept_id: '',
        region: '',
        region_code: '',
        region_concept_id: '',
        country: '',
        country_code: '',
        country_concept_id: '',
        street_address: '',
        postcode: '',
        city: '',
        coordinates: [0],
      },

      publication_date: '',
      last_publication_date: '',
    };
  }
};
