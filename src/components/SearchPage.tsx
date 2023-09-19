import { IJobSearchResponse } from "../models/IJobSearchResponse";
import { SearchForm } from "./SearchForm";
import SearchResult from "./SearchResult";

export const SearchPage = () => {
  const jobSearchResponse: IJobSearchResponse = {
    total: {NumberOfHits: { value:0}},
    hits:[],
  };
  return <div>
    <SearchForm></SearchForm>
    <SearchResult jobSearchResponse={jobSearchResponse}></SearchResult>
  </div>;
};
