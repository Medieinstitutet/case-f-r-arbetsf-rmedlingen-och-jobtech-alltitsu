import {
  FormInputVariation,
  FormInputType,
  FormInputValidation,
  FormTextareaValidation,
  FormTextareaVariation,
} from '@digi/arbetsformedlingen';
import { DigiFormInput, DigiFormTextarea } from '@digi/arbetsformedlingen-react';
import { ContactWrapper } from './styled/Wrappers';

export const ContactForm = () => {
  return (
    <ContactWrapper>
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
    </ContactWrapper>
  );
};
