import Button, { type ButtonProps } from '@mui/material/Button';
import { alpha } from '@mui/material/styles';

export type PrimaryButtonProps = ButtonProps;

const PrimaryButton = ({ sx, ...props }: PrimaryButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={[
        {
          background: 'linear-gradient(135deg, #1565FF 0%, #29A3FF 100%)',
          boxShadow: '0 10px 30px rgba(21, 101, 255, 0.30)',
          minHeight: 44,
          px: { xs: 2.25, sm: 2.75 },
          '&:hover': {
            background: 'linear-gradient(135deg, #0040CC 0%, #1565FF 100%)',
            boxShadow: '0 14px 36px rgba(21, 101, 255, 0.40)',
          },
          '&:focus-visible': {
            outline: `2px solid ${alpha('#1565FF', 0.45)}`,
            outlineOffset: 2,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default PrimaryButton;
