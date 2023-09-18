import {
  FormInputVariation,
  FormInputType,
  FormInputValidation,
  FormTextareaValidation,
  FormTextareaVariation,
} from '@digi/arbetsformedlingen';
import { DigiButton, DigiFormInput, DigiFormTextarea } from '@digi/arbetsformedlingen-react';
import { ContactWrapper } from './styled/Wrappers';
import { useState } from 'react';
import { ButtonSize, ButtonVariation } from '@digi/arbetsformedlingen';
import {
  DigiFormInputCustomEvent,
  DigiFormTextareaCustomEvent,
} from '@digi/arbetsformedlingen/dist/types/components';

export const ContactForm = () => {
  interface IContactForm {
    username: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<IContactForm>({
    username: '',
    email: '',
    message: '',
  });

  const handleInput = (
    e: DigiFormInputCustomEvent<string> | DigiFormTextareaCustomEvent<string>,
  ) => {
    e.preventDefault();
    const name = e.target.afName;

    setFormData({ ...formData, [name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (
      /^[a-zA-Z]+$/.test(formData.username) &&
      /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(formData.email) &&
      formData.message.trim() !== ''
    ) {
      console.log('formuläret skickades' + JSON.stringify(formData));
    } else {
      alert('Fyll i alla fält');
      return;
    }

    setFormData({
      username: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactWrapper>
      <form>
        <DigiFormInput
          afLabel="Namn:"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.TEXT}
          afValidation={FormInputValidation.NEUTRAL}
          afName="username"
          afValue={formData.username}
          onAfOnInput={handleInput}
        ></DigiFormInput>
        <DigiFormInput
          afLabel="Email:"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.EMAIL}
          afValidation={FormInputValidation.NEUTRAL}
          afName="email"
          afValue={formData.email}
          onAfOnInput={handleInput}
        ></DigiFormInput>
        <DigiFormTextarea
          afLabel="Meddelande:"
          afVariation={FormTextareaVariation.MEDIUM}
          afValidation={FormTextareaValidation.NEUTRAL}
          afName="message"
          afValue={formData.message}
          onAfOnInput={handleInput}
        ></DigiFormTextarea>
        <DigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          className="alltitsuStyling"
          onAfOnClick={handleSubmit}
        >
          Skicka
        </DigiButton>
      </form>
    </ContactWrapper>
  );
};
