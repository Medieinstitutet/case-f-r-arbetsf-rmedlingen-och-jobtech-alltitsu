import { DigiLinkExternal, DigiTypography } from '@digi/arbetsformedlingen-react';
import { JobWrapper } from './styled/Wrappers';
import { LinkVariation, TypographyVariation } from '@digi/arbetsformedlingen';
import '../styles/JobCard.scss';

interface JobCardProps {
  title: string;
  publication_date: string;
  application_deadline: string;
  employer: string;
  id: string;
  municipality: string;
}

export const JobCard: React.FC<JobCardProps> = ({ title, employer, id, publication_date, application_deadline, municipality }) => {
  const dateObject = new Date(publication_date);
  const dateObject2 = new Date (application_deadline );

  const formattedDate= dateObject.toLocaleDateString();
  const formattedDate2 = dateObject2.toLocaleDateString();
  return (
    <JobWrapper className='jobCard'>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h4>{title}</h4>
        <h5>{employer}</h5>
        <p><span>Publicerades:</span> {formattedDate}</p>
        <p><span>Ort:</span> {municipality}</p>
        <p id='lastApplicationDate'><span>Sista dag för ansökan: </span>{formattedDate2}</p>
      </DigiTypography>
      <DigiLinkExternal
        afHref={`/ad/${id}`}
        afTarget="_blank"
        afVariation={LinkVariation.SMALL}
        className="alltitsuStyling"
      >
        Gå till annons
      </DigiLinkExternal>
    </JobWrapper>
  );
};

export default JobCard;


