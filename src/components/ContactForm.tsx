import {
  FormInputVariation,
  FormInputType,
  FormInputValidation,
  FormTextareaValidation,
  FormTextareaVariation,
} from '@digi/arbetsformedlingen';
import { DigiFormInput, DigiFormTextarea } from '@digi/arbetsformedlingen-react';
import { ContactWrapper } from './styled/Wrappers';
import { FormEvent } from 'react';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('formuläret skickades');
};

export const ContactForm = () => {
  return (
    <ContactWrapper>
      <form onSubmit={handleSubmit}>
        <DigiFormInput
          afLabel="Namn:"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.TEXT}
          afValidation={FormInputValidation.NEUTRAL}
        ></DigiFormInput>
        <DigiFormInput
          afLabel="Email:"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.EMAIL}
          afValidation={FormInputValidation.NEUTRAL}
        ></DigiFormInput>
        <DigiFormTextarea
          afLabel="Etikett"
          afVariation={FormTextareaVariation.MEDIUM}
          afValidation={FormTextareaValidation.NEUTRAL}
        ></DigiFormTextarea>
        <button>Skicka</button>
      </form>
    </ContactWrapper>
  );
};
