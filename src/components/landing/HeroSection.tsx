import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { CheckCircle } from '@mui/icons-material';
import {
  Container,
  FadeIn,
  GradientText,
  PrimaryButton,
  ScaleIn,
  SecondaryButton,
  Section,
  SlideUp,
  StaggerContainer,
  AnimatedBlobBackground,
} from '../../design-system';
import DashboardMockup from './DashboardMockup';
import { BrandLogo } from '../common';

const trustItems = ['ATS Optimizer', 'CV Tailoring', 'Auto Apply', 'Interview Prep'];

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Section
      y="xl"
      component="section"
      aria-labelledby="hero-heading"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: theme.palette.surface.main,
      }}
    >
      <AnimatedBlobBackground color1={theme.palette.primary.main} color2="#E91E63" />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 5, md: 7, lg: 10 }}
          sx={{ alignItems: 'center' }}
        >
          <Grid size={{ xs: 12, lg: 6 }}>
            <StaggerContainer>
              <Stack spacing={{ xs: 2.5, md: 3.5 }}>
                <FadeIn>
                  <Chip
                    label="AI Job Application Copilot"
                    sx={{
                      width: 'fit-content',
                      fontWeight: 700,
                      color: 'primary.main',
                      backgroundColor: alpha(theme.palette.primary.main, 0.12),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
                    }}
                  />
                </FadeIn>

                <SlideUp>
                  <Stack spacing={1.75}>
                    <BrandLogo logoHeight={40} hireTechColor={theme.palette.text.primary} careersColor={theme.palette.primary.main} />
                    <Typography
                      id="hero-heading"
                      component="h1"
                      variant="h1"
                      sx={{
                        fontSize: {
                          xs: '2.15rem',
                          sm: '2.65rem',
                          md: '3.1rem',
                          lg: '3.5rem',
                          xl: '4rem',
                        },
                        lineHeight: { xs: 1.12, md: 1.08 },
                        letterSpacing: '-0.035em',
                        maxWidth: 700,
                      }}
                    >
                      Land Your Dream Job
                      <br />
                      <GradientText component="span" variant="inherit" sx={{ fontWeight: 800 }}>
                        3× Faster
                      </GradientText>
                    </Typography>
                  </Stack>
                </SlideUp>

                <FadeIn>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      maxWidth: 620,
                      color: 'text.secondary',
                      fontSize: { xs: '1rem', md: '1.125rem' },
                    }}
                  >
                    AI-powered job search automation that tailors your CV, optimizes ATS scores,
                    and applies to jobs on your behalf.
                  </Typography>
                </FadeIn>

                <ScaleIn>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.75}>
                    <PrimaryButton
                      href="/signup"
                      size="large"
                      sx={{ minWidth: { sm: 180 } }}
                    >
                      Get Started
                    </PrimaryButton>
                    <SecondaryButton
                      href="/contact"
                      size="large"
                      sx={{ minWidth: { sm: 160 } }}
                    >
                      Book a Demo
                    </SecondaryButton>
                  </Stack>
                </ScaleIn>

                <FadeIn>
                  <Stack
                    component="ul"
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2.25 }}
                    sx={{
                      m: 0,
                      p: 0,
                      listStyle: 'none',
                      flexWrap: 'wrap',
                      rowGap: 1.1,
                    }}
                  >
                    {trustItems.map((item) => (
                      <Stack
                        key={item}
                        component="li"
                        direction="row"
                        spacing={0.8}
                        sx={{ alignItems: 'center' }}
                      >
                        <CheckCircle sx={{ color: 'success.main', fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </FadeIn>
              </Stack>
            </StaggerContainer>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                position: 'relative',
                pl: { lg: 2 },
                mt: { xs: 1, lg: 0 },
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  width: { xs: 170, md: 220 },
                  height: { xs: 170, md: 220 },
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${alpha('#29A3FF', 0.28)} 0%, transparent 66%)`,
                  top: { xs: -36, md: -48 },
                  right: { xs: -16, md: 0 },
                  filter: 'blur(2px)',
                }}
              />
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  width: { xs: 190, md: 260 },
                  height: { xs: 190, md: 260 },
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${alpha('#1565FF', 0.20)} 0%, transparent 68%)`,
                  left: { xs: -28, md: -42 },
                  bottom: { xs: -30, md: -36 },
                  filter: 'blur(4px)',
                }}
              />
              <DashboardMockup />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default HeroSection;
