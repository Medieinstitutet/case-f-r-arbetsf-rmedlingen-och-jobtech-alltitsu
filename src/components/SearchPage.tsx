import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { IJobSearchResponse } from '../models/IJobSearchResponse';
import { SearchForm } from './SearchForm';
import SearchResult from './SearchResult';
import { useState } from 'react';
import { SetCompanyContext, SetFromDateContext, SetToDateContext } from '../context/SearchContext';
import { DigiFormInputCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { getHistoricalJobs } from '../services/jobSearch';

export const SearchPage = () => {
  const [fromDate, setFromDate] = useState('2016-01-01');
  const [toDate, setToDate] = useState(new Date().toLocaleDateString());
  const [company, setCompany] = useState('');
  const [offset, setOffset] = useState(0);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [searchResults, setSearchResults] = useState<IJobSearchResponse>({
    total: {
      value: 0,
    },
    hits: [],
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const getHistoricalData = await getHistoricalJobs(fromDate, toDate, company, offset);
    console.log(fromDate, toDate, company, offset);
    console.log(getHistoricalData);
    setSearchResults(getHistoricalData);
    if (getHistoricalData.hits.length > 0) {
      setShowMoreButton(true);
    } else {
      setShowMoreButton(false);
    }
  };

  return (
    <div>
      <SetFromDateContext.Provider
        value={(e: DigiFormInputCustomEvent<Date>) => setFromDate(e.target.value.toString())}
      >
        <SetToDateContext.Provider
          value={(e: DigiFormInputCustomEvent<Date>) => setToDate(e.target.value.toString())}
        >
          <SetCompanyContext.Provider
            value={(e: DigiFormInputCustomEvent<string>) => setCompany(e.target.value.toString())}
          >
            <SearchForm handleSubmit={handleSubmit} />
            <SearchResult jobSearchResponse={searchResults}></SearchResult>
            {showMoreButton && (
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
            )}
          </SetCompanyContext.Provider>
        </SetToDateContext.Provider>
      </SetFromDateContext.Provider>
    </div>
  );
};
