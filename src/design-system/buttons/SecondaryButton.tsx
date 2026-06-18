import Button, { type ButtonProps } from '@mui/material/Button';
import { alpha } from '@mui/material/styles';

export type SecondaryButtonProps = ButtonProps;

const SecondaryButton = ({ sx, ...props }: SecondaryButtonProps) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={[
        {
          borderColor: alpha('#1565FF', 0.3),
          backgroundColor: '#FFFFFF',
          minHeight: 44,
          px: { xs: 2.25, sm: 2.75 },
          '&:hover': {
            borderColor: '#1565FF',
            backgroundColor: alpha('#1565FF', 0.06),
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

export default SecondaryButton;
