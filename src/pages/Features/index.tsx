import { Box, Container, Typography, Grid, Chip, Avatar, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  AutoAwesome,
  Check,
  FindInPage,
  HeadsetMic,
  Insights,
  Psychology,
  RocketLaunch,
} from '@mui/icons-material';
import { BRAND, FEATURES } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import {
  pageHeroSx,
  premiumCardSx,
  premiumIconAvatarSx,
  sectionChipSx,
} from '../../design-system/styles';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

const FEATURE_ICONS = [
  FindInPage,
  AutoAwesome,
  RocketLaunch,
  Psychology,
  Insights,
  HeadsetMic,
] as const;

const WHY_ITEMS = [
  'Land interviews 3× faster with ATS-optimized applications',
  'AI + human team handles the heavy lifting while you stay in control',
  'Visa-aware targeting for F-1, OPT, H-1B, and international roles',
  'Daily progress reports so you always know where you stand',
  'No ghost jobs — only verified, high-quality postings',
];

const Features = () => {
  return (
    <Box>
      <Box sx={pageHeroSx}>
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label="Features" sx={sectionChipSx} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 2.5 }}>
                Your AI job search copilot
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                Every tool you need to tailor resumes, pass ATS filters, auto-apply at scale, and prep for
                interviews — backed by a dedicated human support team.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={2.6}>
            {FEATURES.map((feature, i) => {
              const Icon = FEATURE_ICONS[i] ?? FindInPage;
              return (
                <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                  <MotionBox
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    custom={i}
                    sx={{ ...premiumCardSx, display: 'flex', gap: 2.5 }}
                  >
                    <Avatar sx={{ ...premiumIconAvatarSx, width: 52, height: 52, flexShrink: 0 }}>
                      <Icon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </MotionBox>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.background }}>
        <Container maxWidth="md">
          <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <Chip label={`Why ${BRAND.name}`} sx={sectionChipSx} />
            <Typography variant="h2" sx={{ mb: 3 }}>
              Built for job seekers who want results, not more busywork
            </Typography>
            <Stack spacing={2}>
              {WHY_ITEMS.map((item) => (
                <Stack key={item} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      mt: 0.25,
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check sx={{ fontSize: 12, color: '#fff' }} />
                  </Box>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default Features;
