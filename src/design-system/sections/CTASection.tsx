import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';
import Container from './Container';

export interface CTASectionProps {
  title: ReactNode;
  subtitle?: ReactNode;
  actions: ReactNode;
}

const CTASection = ({ title, subtitle, actions }: CTASectionProps) => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #050B2E 0%, #0D1854 100%)',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography
            variant="h2"
            sx={{ color: '#FFFFFF', fontSize: { xs: '1.9rem', md: '2.75rem' } }}
          >
            {title}
          </Typography>
          {subtitle ? (
            <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.74)' }}>
              {subtitle}
            </Typography>
          ) : null}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {actions}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTASection;
