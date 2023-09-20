import { ErrorPageStatusCodes } from '@digi/arbetsformedlingen';
import { DigiNotificationErrorPage, DigiLinkInternal } from '@digi/arbetsformedlingen-react';

export const Error = () => {
  return (
    <>
      <DigiNotificationErrorPage afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}>
        <p slot="bodytext">
          Det kan bero på att länken hit är felaktig eller att sidan inte finns kvar. Prova att
          ladda om sidan, felet kan vara tillfälligt.
        </p>

        <ul slot="links">
          <li>
            <DigiLinkInternal afHref="/" afVariation="small">
              Till startsidan
            </DigiLinkInternal>
          </li>
        </ul>
      </DigiNotificationErrorPage>
    </>
  );
};
