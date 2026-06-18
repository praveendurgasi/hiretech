import Paper, { type PaperProps } from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';

export type GlassSurfaceProps = PaperProps;

const GlassSurface = ({ sx, ...props }: GlassSurfaceProps) => {
  return (
    <Paper
      elevation={0}
      sx={[
        {
          backdropFilter: 'blur(18px)',
          backgroundColor: alpha('#FFFFFF', 0.75),
          border: `1px solid ${alpha('#FFFFFF', 0.8)}`,
          boxShadow: '0 20px 60px rgba(5, 11, 46, 0.10)',
          borderRadius: 3,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default GlassSurface;
