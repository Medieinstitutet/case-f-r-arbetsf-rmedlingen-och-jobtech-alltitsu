import { DigiFormInputCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { createContext } from 'react';
export const SetToDateContext = createContext((e: DigiFormInputCustomEvent<Date>) => {console.log(e)});
export const SetFromDateContext = createContext((e: DigiFormInputCustomEvent<Date>) => {console.log(e)});
export const SetCompanyContext = createContext((e: DigiFormInputCustomEvent<string>) => {console.log(e)});
