import Stack from '@mui/material/Stack';
import type { ReactNode } from 'react';
import Eyebrow from '../typography/Eyebrow';
import PageHeading from '../typography/PageHeading';

export interface SectionHeaderProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) => {
  return (
    <Stack spacing={2} sx={{ textAlign: align, mb: { xs: 4, md: 6 } }}>
      {eyebrow ? (
        <Eyebrow sx={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <PageHeading title={title} subtitle={subtitle} align={align} />
    </Stack>
  );
};

export default SectionHeader;
