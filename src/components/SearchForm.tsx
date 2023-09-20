import { useContext } from 'react';
import './SearchForm.scss';
import '../colorvariables.scss';
import './Alltitsu.scss';

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
  const SetToDate = useContext(SetToDateContext);
  const SetFromDate = useContext(SetFromDateContext);
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
            onAfOnInput={SetFromDate}
          ></DigiFormInput>
        </div>
        <div className="formField">
          <DigiFormInput
            afValue={'2022-01-01'}
            afLabel="Till:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.DATE}
            afValidation={FormInputValidation.NEUTRAL}
            onAfOnInput={SetToDate}
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
            afSize={ButtonSize.MEDIUM}
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
