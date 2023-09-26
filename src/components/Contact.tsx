import { DigiTypography } from '@digi/arbetsformedlingen-react';
import { ContactForm } from './ContactForm';
import { TypographyVariation } from '@digi/arbetsformedlingen';
import '../styles/Contact.scss';

export const Contact = () => {
  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>
          Har du frågor eller kommentarer?<br></br> Tveka inte att höra av dig till oss!
        </h2>
      </DigiTypography>
      <ContactForm />
    </>
  );
};
