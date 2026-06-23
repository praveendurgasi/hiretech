import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthShell from '../../components/auth/AuthShell';
import { PlanSelectField } from '../../components/common';
import { buildSignupWhatsAppMessage, openWhatsApp } from '../../utils/whatsapp';

type GetStartedForm = {
  name: string;
  email: string;
  whatsapp: string;
  plan: string;
};

const Signup = () => {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get('plan') ?? '';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GetStartedForm>({
    defaultValues: { plan: planId },
  });

  const onSubmit = (data: GetStartedForm) => {
    openWhatsApp(buildSignupWhatsAppMessage(data));
    toast.success('Opening WhatsApp to send your details to our team.', { duration: 4000 });
    reset({ plan: planId });
  };

  return (
    <AuthShell
      title="Send your details to our team"
      subtitle="Tell us which plan you want, then share your contact details — we'll follow up on WhatsApp."
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2.5}>
          <PlanSelectField
            registration={register('plan', { required: 'Please select a plan' })}
            error={errors.plan}
          />
          <TextField
            fullWidth
            label="Full name"
            autoComplete="name"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            fullWidth
            label="Email"
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
            label="WhatsApp number"
            type="tel"
            autoComplete="tel"
            placeholder="+91 6305063870"
            {...register('whatsapp', {
              required: 'WhatsApp number is required',
              pattern: {
                value: /^[+]?[\d\s()-]{8,}$/,
                message: 'Enter a valid WhatsApp number',
              },
            })}
            error={!!errors.whatsapp}
            helperText={errors.whatsapp?.message ?? 'Include country code if outside India'}
          />
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            After you submit, WhatsApp will open with your details pre-filled so you can send them directly
            to our team.
          </Typography>
          <Button type="submit" variant="contained" fullWidth size="large" disabled={isSubmitting} sx={{ py: 1.5 }}>
            Send Details on WhatsApp
          </Button>
        </Stack>
      </Box>
    </AuthShell>
  );
};

export default Signup;
