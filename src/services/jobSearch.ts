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
    return {
      id: '',
      external_id: '',
      original_id: '',
      webpage_url: {},
      logo_url: '',
      headline: '',
      application_deadline: '',
      number_of_vacancies: 0,
      description: {
        text: '',
        text_formatted: '',
        company_information: '',
        needs: '',
        requirements: '',
        conditions: '',
      },
      employment_type: {
        concept_id: '',
        label: '',
        legacy_ams_taxonomy_id: '',
      },
      salary_type: {
        concept_id: '',
        label: '',
        legacy_ams_taxonomy_id: '',
      },
      salary_description: '',
      duration: {
        concept_id: '',
        label: '',
        legacy_ams_taxonomy_id: '',
      },
      working_hours_type: {
        concept_id: '',
        label: '',
        legacy_ams_taxonomy_id: '',
      },
      employer: {
        phone_number: '',
        email: '',
        url: '',
        organization_number: '',
        name: '',
        workplace: '',
      },
      application_details: {
        information: '',
        reference: '',
        email: '',
        via_af: false,
        url: '',
        other: '',
      },
      experience_required: true,
      access_to_own_car: true,
      driving_license_required: true,
      driving_license: [
        {
          concept_id: '',
          label: '',
          legacy_ams_taxonomy_id: '',
        },
      ],
      occupation: {
        concept_id: '',
        label: '',
        legacy_ams_taxonomy_id: '',
      },
      occupation_group: {
        concept_id: '',
        label: '',
        legacy_ams_taxonomy_id: '',
      },
      occupation_field: {
        concept_id: '',
        label: '',
        legacy_ams_taxonomy_id: '',
      },
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
      must_have: {
        skills: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
        languages: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
        work_experiences: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
        education: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
        education_level: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
      },
      nice_to_have: {
        skills: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
        languages: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
        work_experiences: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
        education: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
        education_level: [
          {
            concept_id: '',
            label: '',
            legacy_ams_taxonomy_id: '',
            weight: 0,
          },
        ],
      },
      application_contacts: {
        name: '',
        description: '',
        email: '',
        telephone: '',
        contact_type: '',
      },
      publication_date: '',
      last_publication_date: '',
      removed: true,
      removed_date: '',
      source_type: '',
      timestamp: 0,
    };
  }
};
