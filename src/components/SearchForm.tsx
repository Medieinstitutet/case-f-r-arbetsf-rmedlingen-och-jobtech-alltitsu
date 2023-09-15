import React, { useState, FormEvent } from 'react';
import "./SearchForm.scss"
import "../colorvariables.scss"
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';

export function SearchForm() {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [company, setCompany] = useState('');

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);
    console.log('Company:', company);
  };
  return (
    <div className='searchForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fromDate">Från:</label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={handleFromDateChange}
          />
        </div>
        <div>
          <label htmlFor="toDate">Till:</label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={handleToDateChange}
          />
        </div>
        <div>
          <label htmlFor="company">Företag:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={handleCompanyChange}
          />
        </div>
        <div>
        <DigiButton	
        afSize={ButtonSize.MEDIUM}	
        afVariation={ButtonVariation.PRIMARY}	
        afFullWidth={false}>Sök</DigiButton>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;