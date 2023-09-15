import React, { useState, FormEvent } from 'react';
import "./SearchForm.scss"
import "../colorvariables.scss"

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
        <div className="formField">
          <label htmlFor="fromDate">Från:</label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={handleFromDateChange}
          />
        </div>
        <div className="formField">
          <label htmlFor="toDate">Till:</label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={handleToDateChange}
          />
        </div>
        <div className="formField">
          <label htmlFor="company">Företag:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={handleCompanyChange}
          />
        </div>
        <div className='searchButtonDiv'>
          <button className='searchButton' type="submit">Sök</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;