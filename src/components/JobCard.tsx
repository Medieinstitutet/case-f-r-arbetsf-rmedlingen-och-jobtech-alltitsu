import { DigiTypography } from '@digi/arbetsformedlingen-react';
import { JobWrapper } from './styled/Wrappers';
import { TypographyVariation } from '@digi/arbetsformedlingen';

export const JobCard = () => {
  return (
    <JobWrapper>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h3>Job Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </p>
      </DigiTypography>
    </JobWrapper>
  );
};
