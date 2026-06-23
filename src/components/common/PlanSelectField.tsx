import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { PRICING_PLANS } from '../../constants';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface PlanSelectFieldProps {
  registration: UseFormRegisterReturn;
  error?: FieldError;
  label?: string;
}

const PlanSelectField = ({
  registration,
  error,
  label = 'Which plan are you interested in?',
}: PlanSelectFieldProps) => (
  <TextField
    select
    fullWidth
    label={label}
    {...registration}
    error={!!error}
    helperText={error?.message}
    slotProps={{ select: { displayEmpty: true } }}
  >
    <MenuItem value="" disabled>
      Select a plan
    </MenuItem>
    {PRICING_PLANS.map((plan) => (
      <MenuItem key={plan.id} value={plan.id}>
        {plan.name} — ${plan.price}/month
      </MenuItem>
    ))}
  </TextField>
);

export default PlanSelectField;
