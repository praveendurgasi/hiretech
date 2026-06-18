import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
  Link as MuiLink,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { brandColors } from '../../theme';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { BrandLogo } from '../../components/common';

const MotionBox = motion(Box);

type SignupForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>();

  const onSubmit = (_data: SignupForm) => {
    toast.success('Account created! Welcome to HireTech Careers 🎉', { duration: 4000 });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(21,101,255,0.10) 0%, transparent 65%), ${brandColors.background}`,
        py: 6,
      }}
    >
      <Container maxWidth="sm">
        <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box sx={{ display: 'inline-flex', mb: 2 }}>
                  <BrandLogo
                    logoHeight={42}
                    hideCareersOnMobile
                    hireTechColor={brandColors.dark}
                    careersColor={brandColors.primary}
                  />
                </Box>
              </Link>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Create your account
              </Typography>
              <Typography variant="body1" sx={{ color: '#718096' }}>
                Free 14-day trial · No credit card required
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, border: '1px solid #E2E8F0', borderRadius: 3 }}>
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2.5}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      label="First name"
                      autoComplete="given-name"
                      {...register('firstName', { required: 'First name is required' })}
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                    />
                    <TextField
                      fullWidth
                      label="Last name"
                      autoComplete="family-name"
                      {...register('lastName', { required: 'Last name is required' })}
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                    />
                  </Stack>
                  <TextField
                    fullWidth
                    label="Work email"
                    type="email"
                    autoComplete="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: { value: 8, message: 'Password must be at least 8 characters' },
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        {...register('terms', { required: 'You must accept the terms' })}
                      />
                    }
                    label={
                      <Typography variant="body2" sx={{ color: '#718096' }}>
                        I agree to the{' '}
                        <MuiLink component={Link} to="/terms" sx={{ color: brandColors.primary }}>
                          Terms of Service
                        </MuiLink>{' '}
                        and{' '}
                        <MuiLink component={Link} to="/privacy" sx={{ color: brandColors.primary }}>
                          Privacy Policy
                        </MuiLink>
                      </Typography>
                    }
                  />
                  {errors.terms && (
                    <Typography variant="caption" color="error">{errors.terms.message}</Typography>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={isSubmitting}
                    sx={{ py: 1.5 }}
                  >
                    Create Free Account
                  </Button>
                </Stack>
              </Box>

              <Divider sx={{ my: 3 }}>
                <Typography variant="caption" sx={{ color: '#718096' }}>or</Typography>
              </Divider>

              <Button variant="outlined" fullWidth size="large" sx={{ py: 1.5 }}>
                Sign up with Google
              </Button>
            </Paper>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography variant="body2" sx={{ textAlign: 'center', mt: 3, color: '#718096' }}>
              Already have an account?{' '}
              <MuiLink component={Link} to="/login" sx={{ color: brandColors.primary, fontWeight: 600, textDecoration: 'none' }}>
                Log in
              </MuiLink>
            </Typography>
          </motion.div>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Signup;
