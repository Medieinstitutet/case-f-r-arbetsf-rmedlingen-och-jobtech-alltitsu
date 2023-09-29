import { DigiTypography } from '@digi/arbetsformedlingen-react';
import { ContactForm } from './ContactForm';
import { TypographyVariation } from '@digi/arbetsformedlingen';
import '../styles/Contact.scss';
import { EmailConfirmation } from './EmailConfirmation';
import { MessageWrapper } from './styled/Wrappers';
import { useState } from 'react';

export const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      {emailSent ? (
        <div>
          <MessageWrapper>
            <EmailConfirmation></EmailConfirmation>
          </MessageWrapper>
        </div>
      ) : (
        <div>
          <DigiTypography afVariation={TypographyVariation.SMALL}>
            <h2>
              Har du frågor eller kommentarer?<br></br> Tveka inte att höra av dig till oss!
            </h2>
          </DigiTypography>
          <ContactForm setEmailSent={setEmailSent} />
        </div>
      )}
    </>
  );
};
