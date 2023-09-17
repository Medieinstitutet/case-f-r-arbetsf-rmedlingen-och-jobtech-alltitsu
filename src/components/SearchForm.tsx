import React, { useState, FormEvent } from 'react';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import "./SearchForm.scss"
import "../colorvariables.scss"
import "./Alltitsu.scss";

import { DigiButton, DigiFormInput } from '@digi/arbetsformedlingen-react';
import { FormInputVariation, FormInputType, FormInputValidation, ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import { DigiFormInputCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

export function SearchForm() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [company, setCompany] = useState('');

  const handleFromDateChange = (e: DigiFormInputCustomEvent<Date>) => {
    setFromDate(e.target.value.toString());
  };

  const handleToDateChange = (e: DigiFormInputCustomEvent<Date>) => {
    setToDate(e.target.value.toString());
  };

  const handleCompanyChange = (e: DigiFormInputCustomEvent<string>) => {
    setCompany(e.target.value.toString());
    console.log("Setting company to", e.target.value.toString());
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);
    console.log('Company:', company);
  };
  return (
    <div className='searchForm'>
      <form>
        <div className="formField">
         <DigiFormInput
            afLabel="Från:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.DATE}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnInput={handleFromDateChange}	
          >
          </DigiFormInput>
        </div>
        <div className="formField">
        <DigiFormInput
            afLabel="Till:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.DATE}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnInput={handleToDateChange}				
          >
          </DigiFormInput>
        </div>
        <div className="formField">
        <DigiFormInput
            afLabel="Företag:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}		
            onAfOnInput={handleCompanyChange}		
          >
          </DigiFormInput>
        </div>
        <div className='searchButtonDiv'>
        <DigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          className="alltitsuStyling" >
          onAfOnClick={handleSubmit}>
          Sök
        </DigiButton>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;