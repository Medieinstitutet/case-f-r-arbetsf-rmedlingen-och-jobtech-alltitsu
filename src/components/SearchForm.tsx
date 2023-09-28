import { useContext } from 'react';
import '../styles/SearchForm.scss';
import '../styles/colorvariables.scss';

import { DigiButton, DigiFormInput } from '@digi/arbetsformedlingen-react';
import {
  FormInputVariation,
  FormInputType,
  FormInputValidation,
  ButtonSize,
  ButtonVariation,
} from '@digi/arbetsformedlingen';
import { SetCompanyContext, SetFromDateContext, SetToDateContext } from '../context/SearchContext';

interface ISearchFormProps {
  handleSubmit: (e: Event) => Promise<void>;
  toDate: string;
  fromDate: string;
}

export function SearchForm({ handleSubmit, toDate, fromDate }: ISearchFormProps) {
  const setToDate = useContext(SetToDateContext);
  const setFromDate = useContext(SetFromDateContext);
  const setCompany = useContext(SetCompanyContext);

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <div className="laptopView">
          <div className="formField">
            <DigiFormInput
              afValue={fromDate}
              afLabel="Från:"
              afVariation={FormInputVariation.MEDIUM}
              afType={FormInputType.DATE}
              afValidation={FormInputValidation.NEUTRAL}
              onAfOnInput={setFromDate}
            ></DigiFormInput>
          </div>
          <div className="formField">
            <DigiFormInput
              afValue={toDate}
              afLabel="Till:"
              afVariation={FormInputVariation.MEDIUM}
              afType={FormInputType.DATE}
              afValidation={FormInputValidation.NEUTRAL}
              onAfOnInput={setToDate}
            ></DigiFormInput>
          </div>
        </div>
        <div className="formField" id="thirdInput">
          <DigiFormInput
            afLabel="Arbetsgivare:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnInput={setCompany}
          ></DigiFormInput>
        </div>
        <div className="searchButtonDiv">
          <DigiButton
            afSize={ButtonSize.LARGE}
            afVariation={ButtonVariation.PRIMARY}
            afFullWidth={false}
            onAfOnClick={handleSubmit}
          >
            Sök
          </DigiButton>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
