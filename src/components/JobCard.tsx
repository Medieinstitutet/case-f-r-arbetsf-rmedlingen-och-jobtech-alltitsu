import { DigiTypography } from '@digi/arbetsformedlingen-react';
import { JobWrapper } from './styled/Wrappers';
import { TypographyVariation } from '@digi/arbetsformedlingen';
import './JobCard.scss';

interface JobCardProps {
  title: string;
  text: string;
  employer: string;
}
export const JobCard: React.FC<JobCardProps> = ({ title, text, employer}) => {
  return (
    <JobWrapper>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h3>{title}</h3>
        <p className='jobDescription'>{text}</p>
        <h2>{employer}</h2>
      </DigiTypography>
    </JobWrapper>
  );
};

export default JobCard;
