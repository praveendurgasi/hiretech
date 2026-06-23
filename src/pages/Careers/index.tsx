import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { EmailOutlined, WorkOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { BRAND } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import { authSurfaceSx, premiumCardSx } from '../../design-system/styles';
import { brandColors } from '../../theme';
import { buildCareersNotifyWhatsAppMessage, openWhatsApp } from '../../utils/whatsapp';

const MotionBox = motion(Box);

const CAREER_VALUES = [
  {
    title: 'User Obsession',
    description: "Every decision starts with 'How does this help job seekers?'",
  },
  {
    title: 'Move Fast',
    description: 'We ship quickly, learn from users, and iterate constantly.',
  },
  {
    title: 'Quality Matters',
    description: 'AI + human oversight ensures every application is polished.',
  },
];

const Careers = () => {
  const [email, setEmail] = useState('');

  const handleNotify = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }
    openWhatsApp(buildCareersNotifyWhatsAppMessage(email.trim()));
    toast.success('Opening WhatsApp to send your notification request to our team.', { duration: 4000 });
    setEmail('');
  };

  return (
    <Box sx={{ backgroundColor: brandColors.background, minHeight: '100vh' }}>
      <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  mx: 'auto',
                  mb: 3,
                  bgcolor: 'rgba(21,101,255,0.08)',
                  color: brandColors.primary,
                  border: '1px solid rgba(21,101,255,0.16)',
                }}
              >
                <WorkOutlined sx={{ fontSize: 34 }} />
              </Avatar>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3.25rem' }, mb: 2 }}>
                Careers at {BRAND.name}
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="subtitle1"
                sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', lineHeight: 1.7 }}
              >
                We&apos;re not actively hiring right now, but we&apos;re always looking for talented
                people who are passionate about helping job seekers succeed.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <Box sx={authSurfaceSx}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                <EmailOutlined sx={{ color: brandColors.primary }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Get Notified
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.65 }}>
                Be the first to know when we open new positions. Drop your email below.
              </Typography>
              <Box component="form" onSubmit={handleNotify}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <TextField
                    fullWidth
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <Button type="submit" variant="contained" size="large" sx={{ minWidth: { sm: 140 }, px: 3 }}>
                    Notify Me
                  </Button>
                </Stack>
              </Box>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 10, md: 14 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <MotionBox
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            sx={{ textAlign: 'center', mb: 5 }}
          >
            <Typography variant="h2">What We Value</Typography>
          </MotionBox>
          <Grid container spacing={2.6}>
            {CAREER_VALUES.map((value, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={value.title}>
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  custom={index}
                  sx={{ ...premiumCardSx, textAlign: 'center', height: '100%' }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {value.description}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Careers;
