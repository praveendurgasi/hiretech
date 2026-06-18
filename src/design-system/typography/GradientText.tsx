import Typography, { type TypographyProps } from '@mui/material/Typography';

export type GradientTextProps = TypographyProps;

const GradientText = ({ sx, ...props }: GradientTextProps) => {
  return (
    <Typography
      sx={[
        {
          display: 'inline-block',
          background: 'linear-gradient(135deg, #1565FF 0%, #29A3FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default GradientText;
