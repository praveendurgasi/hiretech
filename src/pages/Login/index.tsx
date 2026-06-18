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
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { brandColors } from '../../theme';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { BrandLogo } from '../../components/common';

const MotionBox = motion(Box);

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const onSubmit = (_data: LoginForm) => {
    toast.success('Welcome back!');
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
                Welcome back
              </Typography>
              <Typography variant="body1" sx={{ color: '#718096' }}>
                Log in to your account to continue
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, border: '1px solid #E2E8F0', borderRadius: 3 }}>
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2.5}>
                  <TextField
                    fullWidth
                    label="Email address"
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
                    autoComplete="current-password"
                    {...register('password', { required: 'Password is required' })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                  <Box sx={{ textAlign: 'right', mt: -1 }}>
                    <MuiLink component={Link} to="/forgot-password" variant="body2" sx={{ color: brandColors.primary, textDecoration: 'none' }}>
                      Forgot password?
                    </MuiLink>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={isSubmitting}
                    sx={{ py: 1.5 }}
                  >
                    Log in
                  </Button>
                </Stack>
              </Box>

              <Divider sx={{ my: 3 }}>
                <Typography variant="caption" sx={{ color: '#718096' }}>or</Typography>
              </Divider>

              <Button variant="outlined" fullWidth size="large" sx={{ py: 1.5 }}>
                Continue with Google
              </Button>
            </Paper>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography variant="body2" sx={{ textAlign: 'center', mt: 3, color: '#718096' }}>
              Don't have an account?{' '}
              <MuiLink component={Link} to="/signup" sx={{ color: brandColors.primary, fontWeight: 600, textDecoration: 'none' }}>
                Sign up free
              </MuiLink>
            </Typography>
          </motion.div>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Login;
