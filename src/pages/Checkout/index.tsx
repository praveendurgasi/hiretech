import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  Stack,
  Paper,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Check } from '@mui/icons-material';
import { PRICING_PLANS } from '../../constants';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { brandColors } from '../../theme';
import { buildSignupWhatsAppMessage, openWhatsApp } from '../../utils/whatsapp';
import { PlanSelectField } from '../../components/common';

const MotionBox = motion(Box);

type CheckoutForm = {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

type WhatsAppForm = {
  name: string;
  email: string;
  whatsapp: string;
  plan: string;
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('plan') ?? 'pro';
  const plan = PRICING_PLANS.find((p) => p.id === planId) ?? PRICING_PLANS[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutForm>();

  const {
    register: registerWhatsApp,
    handleSubmit: handleWhatsAppSubmit,
    reset: resetWhatsApp,
    formState: { errors: whatsAppErrors, isSubmitting: isWhatsAppSubmitting },
  } = useForm<WhatsAppForm>({
    defaultValues: { plan: planId },
  });

  const onSubmit = (_data: CheckoutForm) => {
    toast.success('Payment successful! Our team will reach out shortly.', { duration: 4000 });
  };

  const onWhatsAppSubmit = (data: WhatsAppForm) => {
    openWhatsApp(buildSignupWhatsAppMessage(data));
    toast.success('Opening WhatsApp to send your details to our team.', { duration: 4000 });
    resetWhatsApp({ plan: planId });
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: brandColors.background, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <MotionBox variants={staggerContainer} initial="hidden" animate="visible" sx={{ mb: 5 }}>
          <motion.div variants={fadeInUp}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>Complete your order</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
              Choose card payment below, or send your details on WhatsApp to get started with the{' '}
              {plan.name} plan.
            </Typography>
          </motion.div>
        </MotionBox>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, border: '1px solid #E2E8F0', borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Payment details
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Name on card"
                        {...register('cardName', { required: 'Name is required' })}
                        error={!!errors.cardName}
                        helperText={errors.cardName?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Card number"
                        placeholder="1234 5678 9012 3456"
                        {...register('cardNumber', { required: 'Card number is required' })}
                        error={!!errors.cardNumber}
                        helperText={errors.cardNumber?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <TextField
                        fullWidth
                        label="Expiry date"
                        placeholder="MM / YY"
                        {...register('expiry', { required: 'Expiry is required' })}
                        error={!!errors.expiry}
                        helperText={errors.expiry?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <TextField
                        fullWidth
                        label="CVV"
                        type="password"
                        slotProps={{ htmlInput: { maxLength: 4 } }}
                        {...register('cvv', { required: 'CVV is required' })}
                        error={!!errors.cvv}
                        helperText={errors.cvv?.message}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={isSubmitting}
                        sx={{ py: 1.75 }}
                      >
                        Pay ${plan.price}/month
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'text.secondary' }}>
                  256-bit SSL encryption · Cancel anytime
                </Typography>

                <Divider sx={{ my: 3 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    or
                  </Typography>
                </Divider>

                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    border: '1px solid rgba(21,101,255,0.16)',
                    borderRadius: '12px !important',
                    '&:before': { display: 'none' },
                    overflow: 'hidden',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: brandColors.primary }} />}
                    sx={{
                      px: 2,
                      background: 'linear-gradient(168deg, rgba(255,255,255,0.96) 0%, rgba(246,250,255,0.92) 100%)',
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, color: brandColors.dark }}>
                      Send details on WhatsApp instead
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 2, pb: 2.5, pt: 0 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.65 }}>
                      Confirm your plan and share your contact details. We will open WhatsApp with
                      everything ready to send.
                    </Typography>
                    <Box component="form" onSubmit={handleWhatsAppSubmit(onWhatsAppSubmit)}>
                      <Stack spacing={2}>
                        <PlanSelectField
                          registration={registerWhatsApp('plan', { required: 'Please select a plan' })}
                          error={whatsAppErrors.plan}
                          label="Which plan did you select?"
                        />
                        <TextField
                          fullWidth
                          label="Full name"
                          {...registerWhatsApp('name', { required: 'Name is required' })}
                          error={!!whatsAppErrors.name}
                          helperText={whatsAppErrors.name?.message}
                        />
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          {...registerWhatsApp('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Enter a valid email',
                            },
                          })}
                          error={!!whatsAppErrors.email}
                          helperText={whatsAppErrors.email?.message}
                        />
                        <TextField
                          fullWidth
                          label="WhatsApp number"
                          type="tel"
                          placeholder="+91 6305063870"
                          {...registerWhatsApp('whatsapp', {
                            required: 'WhatsApp number is required',
                            pattern: {
                              value: /^[+]?[\d\s()-]{8,}$/,
                              message: 'Enter a valid WhatsApp number',
                            },
                          })}
                          error={!!whatsAppErrors.whatsapp}
                          helperText={whatsAppErrors.whatsapp?.message}
                        />
                        <Button
                          type="submit"
                          variant="outlined"
                          fullWidth
                          size="large"
                          disabled={isWhatsAppSubmitting}
                          sx={{ py: 1.4, fontWeight: 600 }}
                        >
                          Continue on WhatsApp
                        </Button>
                      </Stack>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox variants={fadeInUp} initial="hidden" animate="visible" custom={2}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  border: '1px solid #E2E8F0',
                  borderRadius: 3,
                  position: 'sticky',
                  top: 100,
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Order summary
                </Typography>
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(21,101,255,0.04)',
                    border: '1px solid rgba(21,101,255,0.12)',
                    mb: 3,
                  }}
                >
                  <Typography variant="overline" sx={{ color: brandColors.primary }}>
                    {plan.name} Plan
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>
                    ${plan.price}
                    <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                      /mo
                    </Typography>
                  </Typography>
                  {plan.description ? (
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {plan.description}
                    </Typography>
                  ) : null}
                </Box>
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {plan.features.map((f) => (
                    <Stack key={f} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                      <Check sx={{ fontSize: 16, color: brandColors.primary }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {f}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Total today
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    ${plan.price}
                  </Typography>
                </Stack>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;
