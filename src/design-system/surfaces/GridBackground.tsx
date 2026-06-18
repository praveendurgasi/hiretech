import Box, { type BoxProps } from '@mui/material/Box';

export type GridBackgroundProps = BoxProps;

const GridBackground = ({ sx, ...props }: GridBackgroundProps) => {
  return (
    <Box
      aria-hidden
      sx={[
        {
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(21,101,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21,101,255,0.06) 1px, transparent 1px)',
          backgroundSize: { xs: '36px 36px', md: '56px 56px' },
          backgroundPosition: '0% 0%',
          maskImage: 'radial-gradient(circle at center, black 35%, transparent 90%)',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default GridBackground;
