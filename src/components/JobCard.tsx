import { DigiLinkInternal, DigiTypography } from '@digi/arbetsformedlingen-react';
import { JobWrapper } from './styled/Wrappers';
import { LinkVariation, TypographyVariation } from '@digi/arbetsformedlingen';
import './JobCard.scss';

interface JobCardProps {
  title: string;
  text: string;
  employer: string;
  id: string;
}

export const JobCard: React.FC<JobCardProps> = ({ title, text, employer, id }) => {
  return (
    <JobWrapper>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h4>{title}</h4>
        <p>{employer}</p>
        <p className="jobDescription">{text}</p>
      </DigiTypography>
      <DigiLinkInternal afHref={`/${id}`} afVariation={LinkVariation.SMALL}>
        Gå till annons
      </DigiLinkInternal>
    </JobWrapper>
  );
};

export default JobCard;
