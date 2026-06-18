import { Box, Container, Typography, Grid, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { BRAND } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

const TEAM = [
  { name: 'Sarah Chen', role: 'CEO & Co-founder', initials: 'SC' },
  { name: 'Marcus Johnson', role: 'CTO & Co-founder', initials: 'MJ' },
  { name: 'Priya Patel', role: 'Head of Product', initials: 'PP' },
  { name: 'Diego Reyes', role: 'Head of Engineering', initials: 'DR' },
];

const VALUES = [
  { title: 'Transparency', description: 'We believe in honest communication, fair pricing, and no hidden surprises.' },
  { title: 'Speed', description: 'Every second counts in hiring. We optimize for velocity without sacrificing quality.' },
  { title: 'Inclusion', description: 'Great teams are diverse. Our AI is built to reduce bias, not amplify it.' },
  { title: 'Customer Obsession', description: 'Our customers\' success is our success. Full stop.' },
];

const About = () => {
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
              <Chip label="About Us" sx={{ mb: 2.5, backgroundColor: 'rgba(21,101,255,0.08)', color: brandColors.primary, fontWeight: 600 }} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 2.5 }}>
                We're building the future of tech hiring
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: '#718096', maxWidth: 580, mx: 'auto' }}>
                Founded in 2021, {BRAND.name} was born from frustration with broken, slow, and biased hiring processes. We set out to fix it.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      {/* Mission */}
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
                '&::before': { content: '"\\201C"', fontSize: '5rem', color: brandColors.primary, opacity: 0.2, position: 'absolute', top: -32, left: '50%', transform: 'translateX(-50%)' },
              }}
            >
              "Every great company was built by great people. We exist to make finding those people faster, fairer, and less painful."
            </Typography>
            <Typography variant="body2" sx={{ color: '#718096', mt: 3 }}>
              — Sarah Chen, CEO of {BRAND.name}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.background }}>
        <Container maxWidth="lg">
          <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions} sx={{ textAlign: 'center', mb: 7 }}>
            <Typography variant="h2">Our values</Typography>
          </MotionBox>
          <Grid container spacing={3}>
            {VALUES.map((v, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={v.title}>
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  custom={i}
                  sx={{ p: 3.5, borderRadius: 3, border: '1px solid #E2E8F0', backgroundColor: brandColors.white }}
                >
                  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 700 }}>{v.title}</Typography>
                  <Typography variant="body1" sx={{ color: '#718096' }}>{v.description}</Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions} sx={{ textAlign: 'center', mb: 7 }}>
            <Typography variant="h2" sx={{ mb: 1.5 }}>Meet the team</Typography>
            <Typography variant="body1" sx={{ color: '#718096' }}>The people behind HireTech Careers.</Typography>
          </MotionBox>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {TEAM.map((member, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  custom={i}
                  sx={{ textAlign: 'center' }}
                >
                  <Avatar
                    sx={{
                      width: 88,
                      height: 88,
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #1565FF, #29A3FF)',
                    }}
                  >
                    {member.initials}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#718096' }}>{member.role}</Typography>
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
