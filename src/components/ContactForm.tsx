import './ContactForm.scss';
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
import submitForm from '../services/contactFormService';
import { IContactForm } from '../models/IContactForm';

export const ContactForm = () => {
  const [formData, setFormData] = useState<IContactForm>({
    username: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleInput = (
    e: DigiFormInputCustomEvent<string> | DigiFormTextareaCustomEvent<string>,
  ) => {
    e.preventDefault();
    const name = e.target.afName;

    setFormData({ ...formData, [name]: e.target.value });
    console.log(formData);
  };

  const validateForm = (field: string) => {
    console.log(error);

    if (field === 'username') {
      if (/^[a-zåäöA-ZÅÄÖ]+$/.test(formData.username)) {
        console.log(error);
        setError(false);
      } else {
        setError(true);
        console.log(error);
      }
    } else if (field === 'email') {
      if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        setEmailError(false);
      } else {
        setEmailError(true);
      }
    } else if (field === 'message') {
      if (formData.message === '') {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
    }
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    console.log('error' + error);
    console.log('message' + messageError);
    console.log('email' + emailError);

    if (!error && !emailError && !messageError) {
      await submitForm(formData);
      console.log('formulär skickat');
    } else {
      console.log('fel i formuläret');
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
        {!error ? (
          <DigiFormInput
            afLabel="Namn:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
            afName="username"
            afValue={formData.username}
            onAfOnInput={handleInput}
            onAfOnFocusout={() => validateForm('username')}
          ></DigiFormInput>
        ) : (
          <DigiFormInput
            afLabel="Namn:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.ERROR}
            afValidationText="Endast bokstäver"
            afValue={formData.username}
            afName="username"
            onAfOnInput={handleInput}
            onAfOnFocusout={() => validateForm('username')}
          ></DigiFormInput>
        )}
        {!emailError ? (
          <DigiFormInput
            afLabel="Email:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.EMAIL}
            afValidation={FormInputValidation.NEUTRAL}
            afName="email"
            afValue={formData.email}
            onAfOnInput={handleInput}
            onAfOnFocusout={() => validateForm('email')}
          ></DigiFormInput>
        ) : (
          <DigiFormInput
            afLabel="Email:"
            afVariation={FormInputVariation.MEDIUM}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.ERROR}
            afValidationText="Stämmer adressen?"
            afValue={formData.email}
            afName="email"
            onAfOnInput={handleInput}
            onAfOnFocusout={() => validateForm('email')}
          ></DigiFormInput>
        )}
        {!messageError ? (
          <DigiFormTextarea
            afLabel="Meddelande:"
            afVariation={FormTextareaVariation.MEDIUM}
            afValidation={FormTextareaValidation.NEUTRAL}
            afName="message"
            afValue={formData.message}
            onAfOnInput={handleInput}
            onAfOnFocusout={() => validateForm('message')}
          ></DigiFormTextarea>
        ) : (
          <DigiFormTextarea
            afLabel="Meddelande:"
            afVariation={FormTextareaVariation.MEDIUM}
            afValidation={FormTextareaValidation.ERROR}
            afValidationText="Fyll i ett meddelande"
            afName="message"
            afValue={formData.message}
            onAfOnInput={handleInput}
            onAfOnFocusout={() => validateForm('message')}
          ></DigiFormTextarea>
        )}
        <div className="contact-btn">
          <DigiButton
            afSize={ButtonSize.MEDIUM}
            afVariation={ButtonVariation.PRIMARY}
            afFullWidth={false}
            className="alltitsuStyling"
            onAfOnClick={handleSubmit}
          >
            Skicka
          </DigiButton>
        </div>
      </form>
    </ContactWrapper>
  );
};
