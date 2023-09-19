import { DigiLinkExternal, DigiTypography } from '@digi/arbetsformedlingen-react';
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
      <DigiLinkExternal afHref={`/${id}`} afTarget="_blank" afVariation={LinkVariation.SMALL}>
        Gå till annons
      </DigiLinkExternal>
    </JobWrapper>
  );
};

export default JobCard;
