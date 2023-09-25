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
  const[searchPerformed, setSearchPerformed] = useState(false);
  const [searchResults, setSearchResults] = useState<IJobSearchResponse>({
    total: {
      value: 0,
    },
    hits: [],
  });

  const fetchDataAndUpdateResults = async (newOffset: number) => {
    const getHistoricalData = await getHistoricalJobs(fromDate, toDate, company, newOffset);
    const updatedResults =
      newOffset === 0
        ? getHistoricalData
        : {
            total: { value: searchResults.total.value },
            hits: [...searchResults.hits, ...getHistoricalData.hits],
          };

    setSearchResults(updatedResults);

    if (getHistoricalData.hits.length > 0) {
      setShowMoreButton(true);
    } else {
      setShowMoreButton(false);
    }
  };

  console.log('resultat i listan' + searchResults.hits.length);
  console.log('test' + searchResults.total.value);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    await fetchDataAndUpdateResults(0);
    setSearchPerformed(true)
  };

  const handleShowMore = async (e: Event) => {
    e.preventDefault();
    const newOffset = offset + 10;
    setOffset(newOffset);
    await fetchDataAndUpdateResults(newOffset);
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
            <SearchForm handleSubmit={handleSubmit} toDate={toDate} fromDate={fromDate} />
            <SearchResult jobSearchResponse={searchResults} searchPerformed={searchPerformed}></SearchResult>
            {showMoreButton && (
              <DigiButton
                afSize={ButtonSize.MEDIUM}
                afVariation={ButtonVariation.PRIMARY}
                afFullWidth={false}
                className="alltitsuStyling"
                onAfOnClick={(e: Event) => {
                  handleShowMore(e);
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
