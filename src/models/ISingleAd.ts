export interface ISingleAd {
  id: string;
  external_id: string;
  original_id: string;
  webpage_url: object;
  logo_url: string;
  headline: string;
  application_deadline: string;
  number_of_vacancies: number;
  description: {
    text: string;
    text_formatted: string;
    company_information: string;
    needs: string;
    requirements: string;
    conditions: string;
  };
  employment_type: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };
  salary_type: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };
  salary_description: string;
  duration: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };
  working_hours_type: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };
  employer: {
    phone_number: string;
    email: string;
    url: string;
    organization_number: string;
    name: string;
    workplace: string;
  };
  application_details: {
    information: string;
    reference: string;
    email: string;
    via_af: boolean;
    url: string;
    other: string;
  };
  experience_required: boolean;
  access_to_own_car: boolean;
  driving_license_required: boolean;
  driving_license: [
    {
      concept_id: string;
      label: string;
      legacy_ams_taxonomy_id: string;
    },
  ];
  occupation: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };
  occupation_group: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };
  occupation_field: {
    concept_id: string;
    label: string;
    legacy_ams_taxonomy_id: string;
  };
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
  must_have: {
    skills: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
    languages: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
    work_experiences: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
    education: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
    education_level: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
  };
  nice_to_have: {
    skills: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
    languages: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
    work_experiences: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
    education: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
    education_level: [
      {
        concept_id: string;
        label: string;
        legacy_ams_taxonomy_id: string;
        weight: number;
      },
    ];
  };
  application_contacts: {
    name: string;
    description: string;
    email: string;
    telephone: string;
    contact_type: string;
  };
  publication_date: string;
  last_publication_date: string;
  removed: boolean;
  removed_date: string;
  source_type: string;
  timestamp: number;
}
