import Box, { type BoxProps } from '@mui/material/Box';

export type GlowBackgroundProps = BoxProps;

const GlowBackground = ({ sx, ...props }: GlowBackgroundProps) => {
  return (
    <Box
      aria-hidden
      sx={[
        {
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(70% 60% at 20% 10%, rgba(41,163,255,0.25), transparent 70%), radial-gradient(60% 55% at 80% 20%, rgba(21,101,255,0.20), transparent 75%)',
          backgroundSize: '200% 200%',
          filter: 'blur(60px)',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default GlowBackground;
