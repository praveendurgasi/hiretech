import { Box, Container, Typography, Grid, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { BRAND } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import {
  pageHeroSx,
  premiumCardSx,
  sectionChipSx,
} from '../../design-system/styles';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

const TEAM = [
  { name: 'Durgasi Praveen', role: 'CEO & Founder', initials: 'DP' },
  { name: 'Karri Neeraj Kumar', role: 'Product Head', initials: 'KN' },
  { name: 'Boyina Chandra Kanth', role: 'Operations Lead', initials: 'BC' },
];

const VALUES = [
  {
    title: 'Transparency',
    description:
      'Clear pricing, honest timelines, and daily progress reports so you always know what is happening with your search.',
  },
  {
    title: 'Speed',
    description:
      'Every hour counts when you are job hunting. We optimize for velocity without sacrificing application quality.',
  },
  {
    title: 'Inclusion',
    description:
      'Built for international talent — visa-aware targeting, immigration resources, and support for global job seekers.',
  },
  {
    title: 'Candidate Obsession',
    description:
      'Your offer is our success metric. Every feature and support decision starts with what helps you get hired.',
  },
];

const About = () => {
  return (
    <Box>
      <Box sx={pageHeroSx}>
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label="About Us" sx={sectionChipSx} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 2.5 }}>
                We're fixing the broken job search
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: 580, mx: 'auto' }}>
                {BRAND.name} was built for candidates tired of sending hundreds of applications and hearing
                nothing back. We combine AI automation with real human support to get you hired faster.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="md">
          <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions} sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                fontStyle: 'italic',
                color: brandColors.dark,
                fontWeight: 600,
                lineHeight: 1.4,
                position: 'relative',
                '&::before': {
                  content: '"\\201C"',
                  fontSize: '5rem',
                  color: brandColors.primary,
                  opacity: 0.2,
                  position: 'absolute',
                  top: -32,
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
              }}
            >
              "Great careers shouldn't depend on who you know or how many hours you can spend applying. We
              built HireTech so every candidate can compete on merit."
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3 }}>
              — Durgasi Praveen, CEO & Founder of {BRAND.name}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.background }}>
        <Container maxWidth="lg">
          <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions} sx={{ textAlign: 'center', mb: 7 }}>
            <Typography variant="h2">Our values</Typography>
          </MotionBox>
          <Grid container spacing={2.6}>
            {VALUES.map((v, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={v.title}>
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  custom={i}
                  sx={premiumCardSx}
                >
                  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>{v.title}</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>{v.description}</Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions} sx={{ textAlign: 'center', mb: 7 }}>
            <Typography variant="h2" sx={{ mb: 1.5 }}>Meet the team</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              The people behind {BRAND.name}.
            </Typography>
          </MotionBox>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {TEAM.map((member, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.name}>
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  custom={i}
                  sx={{ ...premiumCardSx, textAlign: 'center' }}
                >
                  <Avatar
                    sx={{
                      width: 72,
                      height: 72,
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
                    }}
                  >
                    {member.initials}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{member.role}</Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
