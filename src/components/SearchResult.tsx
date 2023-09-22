import React from 'react';
import { JobCard } from './JobCard';
import { IJobSearchResponse } from '../models/IJobSearchResponse';
import "../styles/SearchResult.scss";

interface SearchResultProps {
  jobSearchResponse: IJobSearchResponse;
}

const SearchResult: React.FC<SearchResultProps> = ({ jobSearchResponse }) => {
  if (jobSearchResponse.hits.length === 0) {
    return <div className='noResponse'>Inga jobb annonserades under denna period</div>;
  } else {

  return (
    <div>
      {jobSearchResponse.hits.map((hit) => (
        <JobCard
          key={hit.id}
          id={hit.id}
          title={hit.occupation.label}
          text={hit.description.text}
          employer={hit.employer.name}
        />
      ))}
    </div>
  );
}
};

export default SearchResult;
