import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { IJobSearchResponse } from '../models/IJobSearchResponse';
import { SearchForm } from './SearchForm';
import SearchResult from './SearchResult';
import { useState } from 'react';
import {
  CompanyContext,
  FromDateContext,
  SetCompanyContext,
  SetFromDateContext,
  SetToDateContext,
  ToDateContext,
} from '../context/SearchContext';
import { DigiFormInputCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { getHistoricalJobs } from '../services/jobSearch';

export const SearchPage = () => {
  const [fromDate, setFromDate] = useState('2016-01-01');
  const [toDate, setToDate] = useState('2022-01-01');
  const [company, setCompany] = useState('');
  const [offset, setOffset] = useState(0);
  const [searchResults, setSearchResults] = useState<IJobSearchResponse>({
    total: {
      value: 0,
    },
    hits: [],
  });

  const handleFromDateChange = (e: DigiFormInputCustomEvent<Date>) => {
    setFromDate(e.target.value.toString());
  };

  const handleToDateChange = (e: DigiFormInputCustomEvent<Date>) => {
    setToDate(e.target.value.toString());
  };

  const handleCompanyChange = (e: DigiFormInputCustomEvent<string>) => {
    setCompany(e.target.value.toString());
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    console.log('HEJ!!!');

    const getHistoricalData = await getHistoricalJobs(fromDate, toDate, company, offset);
    console.log(getHistoricalData);
    setSearchResults(getHistoricalData);
  };

  return (
    <div>
      <SetFromDateContext.Provider value={handleFromDateChange}>
        <SetToDateContext.Provider value={handleToDateChange}>
          <SetCompanyContext.Provider value={handleCompanyChange}>
            <SearchForm handleSubmit={handleSubmit} />
            <SearchResult jobSearchResponse={searchResults}></SearchResult>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.PRIMARY}
              afFullWidth={false}
              className="alltitsuStyling"
              onAfOnClick={(e: Event) => {
                setOffset(offset + 10);
                handleSubmit(e);
              }}
            >
              Visa nästa tio träffar
            </DigiButton>
          </SetCompanyContext.Provider>
        </SetToDateContext.Provider>
      </SetFromDateContext.Provider>
    </div>
  );
};
