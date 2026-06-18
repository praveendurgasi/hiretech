import { Box, Container, Typography, Grid, Chip, Avatar, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from '@mui/icons-material';
import { FEATURES } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

const Features = () => {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 10 },
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(21,101,255,0.10) 0%, transparent 65%), ${brandColors.background}`,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label="Features" sx={{ mb: 2.5, backgroundColor: 'rgba(21,101,255,0.08)', color: brandColors.primary, fontWeight: 600 }} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 2.5 }}>
                Built for modern hiring teams
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: '#718096', maxWidth: 560, mx: 'auto' }}>
                Every feature designed to save time, reduce bias, and help you hire the best candidates faster.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      {/* Features grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {FEATURES.map((feature, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  custom={i}
                  sx={{
                    display: 'flex',
                    gap: 3,
                    p: 3.5,
                    borderRadius: 3,
                    border: '1px solid #E2E8F0',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: brandColors.primary,
                      boxShadow: '0 8px 30px rgba(21,101,255,0.10)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 52,
                      height: 52,
                      flexShrink: 0,
                      background: 'linear-gradient(135deg, rgba(21,101,255,0.12), rgba(41,163,255,0.12))',
                      color: brandColors.primary,
                      borderRadius: 2,
                      fontSize: '1.25rem',
                      fontWeight: 700,
                    }}
                  >
                    {feature.icon.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#718096', lineHeight: 1.7 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why choose us */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.background }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
                <Chip label="Why HireTech" sx={{ mb: 2.5, backgroundColor: 'rgba(21,101,255,0.08)', color: brandColors.primary, fontWeight: 600 }} />
                <Typography variant="h2" sx={{ mb: 3 }}>
                  The platform recruiters actually love using
                </Typography>
                <Stack spacing={2}>
                  {[
                    'Reduce time-to-hire by up to 60%',
                    'AI that learns your hiring preferences',
                    'No steep learning curve — onboard in minutes',
                    'Dedicated support team available 24/7',
                    'GDPR & CCPA compliant out of the box',
                  ].map((item) => (
                    <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          mt: 0.25,
                          width: 20,
                          height: 20,
                          flexShrink: 0,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #1565FF, #29A3FF)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Check sx={{ fontSize: 12, color: '#fff' }} />
                      </Box>
                      <Typography variant="body1" sx={{ color: '#4A5568' }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </MotionBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <MotionBox
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                sx={{
                  height: 400,
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${brandColors.dark} 0%, #1565FF 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" sx={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                  Product Screenshot
                  <br />
                  Placeholder
                </Typography>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Features;
