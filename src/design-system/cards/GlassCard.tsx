import Card, { type CardProps } from '@mui/material/Card';
import { alpha } from '@mui/material/styles';

export type GlassCardProps = CardProps;

const GlassCard = ({ sx, ...props }: GlassCardProps) => {
  return (
    <Card
      elevation={0}
      sx={[
        {
          backdropFilter: 'blur(18px)',
          background: alpha('#FFFFFF', 0.78),
          border: `1px solid ${alpha('#FFFFFF', 0.85)}`,
          borderRadius: 3,
          boxShadow: '0 20px 60px rgba(5, 11, 46, 0.10)',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default GlassCard;
