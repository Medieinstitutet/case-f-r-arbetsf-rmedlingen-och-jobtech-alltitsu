import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleAd } from '../services/jobSearch';
import { ISingleAd } from '../models/ISingleAd';

export const Ad = () => {
  const { id } = useParams();
  const [ad, setAd] = useState<ISingleAd>({
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
  });

  useEffect(() => {
    const getAd = async () => {
      if (id !== undefined) {
        const result = await getSingleAd(id);
        console.log(result);
        setAd(result);
      }
    };

    if (ad.id === '') {
      getAd();
    }
  });

  return (
    <>
      <article>
        <img src={ad.logo_url} alt="" />
        <h4>{ad.employer.name}</h4>
        <p>Org. nr: {ad.employer.organization_number}</p>
      </article>
      <section>
        <p>Publicerad: {new Date(ad.publication_date).toLocaleString()}</p>
        <p>Deadline: {new Date(ad.application_deadline).toLocaleString()}</p>
        <h4>{ad.headline}</h4>
        <p>{ad.description.text}</p>
      </section>
    </>
  );
};
