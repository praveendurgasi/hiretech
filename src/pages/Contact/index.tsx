import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  TextField,
  Button,
  Stack,
  Paper,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { BRAND } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

type ContactForm = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = (_data: ContactForm) => {
    toast.success("Message sent! We'll get back to you within 24 hours.", {
      duration: 4000,
      style: { fontFamily: 'Inter, sans-serif' },
    });
    reset();
  };

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          pt: { xs: 10, md: 14 },
          pb: { xs: 6, md: 8 },
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(21,101,255,0.10) 0%, transparent 65%), ${brandColors.background}`,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label="Contact" sx={{ mb: 2.5, backgroundColor: 'rgba(21,101,255,0.08)', color: brandColors.primary, fontWeight: 600 }} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 2.5 }}>
                Get in touch
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: '#718096', maxWidth: 480, mx: 'auto' }}>
                Have a question or want to explore enterprise options? Our team responds within 24 hours.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
                <Stack spacing={3}>
                  {[
                    { icon: <Email />, label: 'Email', value: BRAND.email },
                    { icon: <Phone />, label: 'Phone', value: '+1 (800) 123-4567' },
                    { icon: <LocationOn />, label: 'Address', value: '340 Pine Street, Suite 800, San Francisco, CA 94104' },
                  ].map((item) => (
                    <Paper key={item.label} elevation={0} sx={{ p: 2.5, border: '1px solid #E2E8F0', borderRadius: 2.5, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{ color: brandColors.primary, mt: 0.25 }}>{item.icon}</Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.25 }}>{item.label}</Typography>
                        <Typography variant="body2" sx={{ color: '#718096' }}>{item.value}</Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </MotionBox>
            </Grid>

            {/* Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
                <Box
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                  sx={{ p: { xs: 3, md: 4 }, border: '1px solid #E2E8F0', borderRadius: 3 }}
                >
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    Send us a message
                  </Typography>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        {...register('name', { required: 'Name is required' })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Work Email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Company"
                        {...register('company')}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={5}
                        {...register('message', { required: 'Message is required' })}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        sx={{ minWidth: 160 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
