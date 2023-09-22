import { useContext } from 'react';
import '../styles/SearchForm.scss';
import '../styles/colorvariables.scss';
import '../styles/Alltitsu.scss';

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
}

export function SearchForm({ handleSubmit }: ISearchFormProps) {
  const setToDate = useContext(SetToDateContext);
  const setFromDate = useContext(SetFromDateContext);
  const setCompany = useContext(SetCompanyContext);

  return (
    <div className="searchForm">
      <form>
        <div className="formField">
          <DigiFormInput
            afValue={'2016-01-01'}
            afLabel="Från:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.DATE}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnInput={setFromDate}
          ></DigiFormInput>
        </div>
        <div className="formField">
          <DigiFormInput
            afValue={new Date().toLocaleDateString()}
            afLabel="Till:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.DATE}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnInput={setToDate}
          ></DigiFormInput>
        </div>
        <div className="formField">
          <DigiFormInput
            afLabel="Företag:"
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
            className="alltitsuStyling"
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
