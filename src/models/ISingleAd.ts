export interface ISingleAd {
  id: string;
  external_id: string;
  original_id: string;
  webpage_url: object;
  logo_url: string;
  headline: string;
  application_deadline: string;

  description: {
    text: string;
    text_formatted: string;
    company_information: string;
    needs: string;
    requirements: string;
    conditions: string;
  };

  salary_description: string;

  employer: {
    phone_number: string;
    email: string;
    url: string;
    organization_number: string;
    name: string;
    workplace: string;
  };

  experience_required: boolean;

  driving_license_required: boolean;

  workplace_address: {
    municipality: string;
    municipality_code: string;
    municipality_concept_id: string;
    region: string;
    region_code: string;
    region_concept_id: string;
    country: string;
    country_code: string;
    country_concept_id: string;
    street_address: string;
    postcode: string;
    city: string;
    coordinates: [number];
  };

  publication_date: string;
  last_publication_date: string;
}
