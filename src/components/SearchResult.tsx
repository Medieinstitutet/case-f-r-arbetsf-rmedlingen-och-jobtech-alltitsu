import { JobCard } from './JobCard';
import { IJobSearchResponse } from '../models/IJobSearchResponse';
import "../styles/SearchResult.scss";

interface SearchResultProps {
  jobSearchResponse: IJobSearchResponse;
  searchPerformed: boolean;
}

const SearchResult: React.FC<SearchResultProps> = ({ jobSearchResponse, searchPerformed }) => {

  if (!searchPerformed) {
    return null;
  } else {
    
  return (
    <div className='jobCardResponse'>
      {jobSearchResponse.hits.map((hit) => (
        <JobCard
          key={hit.id}
          id={hit.id}
          title={hit.occupation.label}
          text={hit.description.text}
          employer={hit.employer.name}
        />
      ))}
      {jobSearchResponse.hits.length === 0 && (
        <div className='noResponse'>Inga jobb annonserades under denna period</div>
      )}
    </div>
  );
}
}


export default SearchResult;
