import {
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
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Check } from '@mui/icons-material';
import { PRICING_PLANS } from '../../constants';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

type CheckoutForm = {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('plan') ?? 'growth';
  const plan = PRICING_PLANS.find((p) => p.id === planId) ?? PRICING_PLANS[1];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutForm>();

  const onSubmit = (_data: CheckoutForm) => {
    toast.success('Payment successful! Redirecting to dashboard…', { duration: 4000 });
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: brandColors.background, py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <MotionBox variants={staggerContainer} initial="hidden" animate="visible" sx={{ mb: 5 }}>
          <motion.div variants={fadeInUp}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>Complete your order</Typography>
            <Typography variant="body1" sx={{ color: '#718096', mt: 1 }}>
              You're one step away from hiring smarter.
            </Typography>
          </motion.div>
        </MotionBox>

        <Grid container spacing={4}>
          {/* Payment form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <MotionBox variants={fadeInUp} initial="hidden" animate="visible" custom={1}>
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, border: '1px solid #E2E8F0', borderRadius: 3 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Payment details</Typography>
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
                <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: '#718096' }}>
                  🔒 256-bit SSL encryption · Cancel anytime
                </Typography>
              </Paper>
            </MotionBox>
          </Grid>

          {/* Order summary */}
          <Grid size={{ xs: 12, md: 5 }}>
            <MotionBox variants={fadeInUp} initial="hidden" animate="visible" custom={2}>
              <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, border: '1px solid #E2E8F0', borderRadius: 3, position: 'sticky', top: 100 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Order summary</Typography>
                <Box sx={{ p: 2.5, borderRadius: 2, backgroundColor: 'rgba(21,101,255,0.04)', border: '1px solid rgba(21,101,255,0.12)', mb: 3 }}>
                  <Typography variant="overline" sx={{ color: brandColors.primary }}>{plan.name} Plan</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5 }}>${plan.price}<Typography component="span" variant="body2" sx={{ color: '#718096' }}>/mo</Typography></Typography>
                  <Typography variant="caption" sx={{ color: '#718096' }}>{plan.description}</Typography>
                </Box>
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {plan.features.map((f) => (
                    <Stack key={f} direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                      <Check sx={{ fontSize: 16, color: brandColors.primary }} />
                      <Typography variant="body2" sx={{ color: '#4A5568' }}>{f}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                  <Typography variant="body2" sx={{ color: '#718096' }}>Total today</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>${plan.price}</Typography>
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
