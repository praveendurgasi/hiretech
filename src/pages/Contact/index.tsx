import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  TextField,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { BRAND } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import {
  authSurfaceSx,
  pageHeroSx,
  premiumCardSx,
  sectionChipSx,
} from '../../design-system/styles';
import { brandColors } from '../../theme';
import { buildContactWhatsAppMessage, getWhatsAppUrl, openWhatsApp } from '../../utils/whatsapp';
import { PlanSelectField } from '../../components/common';

const MotionBox = motion(Box);

type ContactForm = {
  name: string;
  email: string;
  whatsapp: string;
  plan: string;
  role: string;
  message: string;
};

const CONTACT_ITEMS = [
  { icon: <Phone />, label: 'Call / WhatsApp', value: BRAND.phone, href: getWhatsAppUrl('Hi HireTech Careers team, I have a question.') },
  { icon: <Email />, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
  { icon: <LocationOn />, label: 'Address', value: BRAND.address },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    openWhatsApp(buildContactWhatsAppMessage(data));
    toast.success('Opening WhatsApp to send your message to our team.', { duration: 4000 });
    reset();
  };

  return (
    <Box>
      <Box sx={pageHeroSx}>
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label="Contact" sx={sectionChipSx} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 2.5 }}>
                Get in touch
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
                Fill in the form and your details will be sent to our team on WhatsApp. We typically respond
                within 24 hours.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {CONTACT_ITEMS.map((item) => (
                    <Box
                      key={item.label}
                      component={item.href ? 'a' : 'div'}
                      href={item.href}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      sx={{
                        ...premiumCardSx,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        p: 2.5,
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <Box sx={{ color: brandColors.primary, mt: 0.25 }}>{item.icon}</Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.25 }}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </MotionBox>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <MotionBox variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={authSurfaceSx}>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                    Send us a message
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                    Your details will open in WhatsApp, pre-filled and ready to send to our team.
                  </Typography>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12 }}>
                      <PlanSelectField
                        registration={register('plan', { required: 'Please select a plan' })}
                        error={errors.plan}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Full name"
                        {...register('name', { required: 'Name is required' })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="WhatsApp number"
                        type="tel"
                        placeholder="+91 6305063870"
                        {...register('whatsapp', {
                          required: 'WhatsApp number is required',
                          pattern: {
                            value: /^[+]?[\d\s()-]{8,}$/,
                            message: 'Enter a valid WhatsApp number',
                          },
                        })}
                        error={!!errors.whatsapp}
                        helperText={errors.whatsapp?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Current role or target role"
                        placeholder="e.g. Software Engineer"
                        {...register('role')}
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
                        sx={{ minWidth: 200 }}
                      >
                        Send on WhatsApp
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
