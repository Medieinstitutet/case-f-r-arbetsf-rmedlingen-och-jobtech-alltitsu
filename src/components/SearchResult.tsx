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
      <h2 className="totalHits">Totalt antal träffar: {jobSearchResponse.total.value} st</h2>
      {jobSearchResponse.hits.map((hit) => (
        <JobCard
          key={hit.id}
          id={hit.id}
          title={hit.occupation.label}
          publication_date={hit.publication_date}
          municipality={hit.workplace_address.municipality}
          application_deadline={hit.application_deadline}
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
