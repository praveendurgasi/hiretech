import Typography, { type TypographyProps } from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

export type EyebrowProps = TypographyProps;

const Eyebrow = ({ sx, ...props }: EyebrowProps) => {
  return (
    <Typography
      variant="overline"
      sx={[
        {
          color: '#1565FF',
          letterSpacing: '0.12em',
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          '&::before': {
            content: '""',
            width: 24,
            height: 1,
            backgroundColor: alpha('#1565FF', 0.4),
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default Eyebrow;
