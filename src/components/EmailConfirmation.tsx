import { TypographyVariation } from '@digi/arbetsformedlingen';
import { DigiTypography } from '@digi/arbetsformedlingen-react';

export const EmailConfirmation = () => {
  return (
    <div>
      <DigiTypography afVariation={TypographyVariation.LARGE}>Tack för ditt mejl!</DigiTypography>
    </div>
  );
};
