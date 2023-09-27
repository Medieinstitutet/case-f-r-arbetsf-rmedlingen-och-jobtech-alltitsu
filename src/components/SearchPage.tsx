import { DigiNavigationPagination } from '@digi/arbetsformedlingen-react';
import { IJobSearchResponse } from '../models/IJobSearchResponse';
import { SearchForm } from './SearchForm';
import SearchResult from './SearchResult';
import { useState } from 'react';
import { SetCompanyContext, SetFromDateContext, SetToDateContext } from '../context/SearchContext';
import {
  DigiFormInputCustomEvent,
  DigiNavigationPaginationCustomEvent,
} from '@digi/arbetsformedlingen/dist/types/components';
import { getHistoricalJobs } from '../services/jobSearch';
import '../styles/SearchPage.scss';
import '../styles/Alltitsu.scss';

export const SearchPage = () => {
  const [fromDate, setFromDate] = useState('2016-01-01');
  const [toDate, setToDate] = useState(new Date().toLocaleDateString());
  const [company, setCompany] = useState('');

  const [showPagination, setshowPagination] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResults, setSearchResults] = useState<IJobSearchResponse>({
    total: {
      value: 0,
    },
    hits: [],
  });

  const fetchDataAndUpdateResults = async (offset: number) => {
    console.log(offset);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const getHistoricalData = await getHistoricalJobs(fromDate, toDate, company, offset);

    setSearchResults(getHistoricalData);

    if (getHistoricalData.total.value > 10) {
      setshowPagination(true);
    } else {
      setshowPagination(false);
    }
  };

  console.log('resultat i listan' + searchResults.hits.length);
  console.log('test' + searchResults.total.value);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    await fetchDataAndUpdateResults(0);
    setSearchPerformed(true);
  };

  const handleShowMore = async (e: DigiNavigationPaginationCustomEvent<number>) => {
    e.preventDefault();
    const firstoffset = e.detail * 10;
    const offset = firstoffset - 10;
    console.log(offset);

    await fetchDataAndUpdateResults(offset);
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
            <SearchResult
              jobSearchResponse={searchResults}
              searchPerformed={searchPerformed}
            ></SearchResult>
            {showPagination && (
              <DigiNavigationPagination
                afTotalPages={Math.round(searchResults.total.value / 10)}
                onAfOnPageChange={(e) => {
                  handleShowMore(e);
                }}
                afId="paginationStyling"
              ></DigiNavigationPagination>
            )}
          </SetCompanyContext.Provider>
        </SetToDateContext.Provider>
      </SetFromDateContext.Provider>
    </div>
  );
};
