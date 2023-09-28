import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleAd } from '../services/jobSearch';
import { ISingleAd } from '../models/ISingleAd';
import { AdWrapper, DetailsWrapper } from './styled/Wrappers';
import { TypographyVariation } from '@digi/arbetsformedlingen';
import { DigiTypography } from '@digi/arbetsformedlingen-react';
import '../styles/Ad.scss';

export const Ad = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ad, setAd] = useState<ISingleAd>({
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
  });

  useEffect(() => {
    const getAd = async () => {
      if (id !== undefined) {
        const result = await getSingleAd(id);
        if (result.id === '') {
          navigate('/error');
        }
        setAd(result);
      }
    };

    if (ad.id === '') {
      getAd();
    }
  });

  return (
    <AdWrapper>
      <DetailsWrapper>
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <img src={ad.logo_url} alt="" />
          <h4>{ad.employer.name}</h4>
          <p>Org. nr: {ad.employer.organization_number}</p>
        </DigiTypography>
      </DetailsWrapper>
      <DetailsWrapper>
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <h4>Detaljer</h4>
          <p>Ort: {ad.workplace_address.municipality}</p>
          <p>Villkor: {ad.description.conditions}</p>
          <p>Lönvillkor: {ad.salary_description}</p>
          <p>Erfarenhet krävs: {ad.experience_required ? 'Ja' : 'Nej'}</p>
          <p>Körkort krävs: {ad.driving_license_required ? 'Ja' : 'Nej'}</p>
        </DigiTypography>
      </DetailsWrapper>
      <DigiTypography afVariation={TypographyVariation.LARGE}>
        <section className="singleAdText">
          <span>Publicerad: {new Date(ad.publication_date).toLocaleString()}</span>
          <span>Deadline: {new Date(ad.application_deadline).toLocaleString()}</span>
          <h4>{ad.headline}</h4>
          <p>{ad.description.text}</p>
        </section>
      </DigiTypography>
    </AdWrapper>
  );
};
