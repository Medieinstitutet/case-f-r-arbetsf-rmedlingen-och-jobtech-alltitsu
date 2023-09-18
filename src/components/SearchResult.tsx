import React from 'react';
import { JobCard } from './JobCard'; 
import { IJobSearchResponse } from '../models/IJobSearchResponse';

interface SearchResultProps {
  jobSearchResponse: IJobSearchResponse; 
}

const SearchResult: React.FC<SearchResultProps> = ({ jobSearchResponse }) => {
  if (!Array.isArray(jobSearchResponse.hits)) {
    return <div>Inga jobb annonserades under denna period</div>;
  }

  return (
    <div>
      {jobSearchResponse.hits.map((hit) => (
        <JobCard key={hit.id} title={hit.occupation.label} text={hit.description.text} employer={hit.employer.name} />
      ))}
    </div>
  );
};

export default SearchResult;
