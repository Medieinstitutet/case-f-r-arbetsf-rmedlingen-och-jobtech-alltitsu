import '../styles/ContactForm.scss';
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

interface IProps {
  setEmailSent: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactForm = ({ setEmailSent }: IProps) => {
  const [formData, setFormData] = useState<IContactForm>({
    username: '',
    email: '',
    message: '',
  });

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleInput = (
    e: DigiFormInputCustomEvent<string> | DigiFormTextareaCustomEvent<string>,
  ) => {
    e.preventDefault();
    const name = e.target.afName;

    setFormData({ ...formData, [name]: e.target.value });
  };

  const validateForm = (field: string) => {
    if (field === 'username') {
      if (/^[a-zåäöA-ZÅÄÖ]+$/.test(formData.username)) {
        setUsernameError(false);
      } else {
        setUsernameError(true);
      }
    } else if (field === 'email') {
      if (/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formData.email)) {
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
    if (formData.email === '' || formData.username === '' || formData.message === '') {
      alert('Var god fyll i hela formuläret');
      return;
    } else if (!usernameError && !emailError && !messageError) {
      await submitForm(formData);
      setEmailSent(true);
    } else {
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
          afName="username"
          afValidation={usernameError ? FormInputValidation.ERROR : FormInputValidation.NEUTRAL}
          afValidationText={usernameError ? 'Endast bokstäver' : ''}
          afValue={formData.username}
          onAfOnInput={handleInput}
          onAfOnFocusout={() => validateForm('username')}
        ></DigiFormInput>
        <DigiFormInput
          afLabel="Email:"
          afVariation={FormInputVariation.MEDIUM}
          afType={FormInputType.EMAIL}
          afValidation={emailError ? FormInputValidation.ERROR : FormInputValidation.NEUTRAL}
          afValidationText={emailError ? 'Stämmer adressen?' : ''}
          afName="email"
          afValue={formData.email}
          onAfOnInput={handleInput}
          onAfOnFocusout={() => validateForm('email')}
        ></DigiFormInput>
        <DigiFormTextarea
          afLabel="Meddelande:"
          afVariation={FormTextareaVariation.MEDIUM}
          afValidation={
            messageError ? FormTextareaValidation.ERROR : FormTextareaValidation.NEUTRAL
          }
          afValidationText={messageError ? 'Fyll i ett meddelande' : ''}
          afName="message"
          afValue={formData.message}
          onAfOnInput={handleInput}
          onAfOnFocusout={() => validateForm('message')}
        ></DigiFormTextarea>
        <div className="contact-btn">
          <DigiButton
            afSize={ButtonSize.MEDIUM}
            afVariation={ButtonVariation.PRIMARY}
            afFullWidth={false}
            id="contact-btn"
            onAfOnClick={handleSubmit}
          >
            Skicka
          </DigiButton>
        </div>
      </form>
    </ContactWrapper>
  );
};
