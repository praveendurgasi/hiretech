import Box, { type BoxProps } from '@mui/material/Box';
import { useTheme, alpha } from '@mui/material/styles';

export interface AnimatedGradientBackgroundProps extends BoxProps {
  variant?: 'default' | 'subtle' | 'intense';
  speed?: 'slow' | 'normal' | 'fast';
}

const AnimatedGradientBackground = ({
  sx,
  variant = 'default',
  speed = 'normal',
  ...props
}: AnimatedGradientBackgroundProps) => {
  const theme = useTheme();

  const speedConfig = {
    slow: 'auroraShift 25s ease-in-out infinite',
    normal: 'auroraShift 20s ease-in-out infinite',
    fast: 'auroraShift 15s ease-in-out infinite',
  };

  const variantConfig = {
    default: {
      background: `
        radial-gradient(70% 60% at 20% 10%, ${alpha(theme.palette.primary.main, 0.25)}, transparent 70%),
        radial-gradient(60% 55% at 80% 20%, ${alpha('#29A3FF', 0.20)}, transparent 75%)
      `,
    },
    subtle: {
      background: `
        radial-gradient(50% 40% at 25% 15%, ${alpha(theme.palette.primary.main, 0.15)}, transparent 65%),
        radial-gradient(45% 35% at 75% 25%, ${alpha('#29A3FF', 0.10)}, transparent 70%)
      `,
    },
    intense: {
      background: `
        radial-gradient(85% 75% at 15% 5%, ${alpha(theme.palette.primary.main, 0.35)}, transparent 75%),
        radial-gradient(75% 70% at 85% 15%, ${alpha('#29A3FF', 0.30)}, transparent 80%),
        radial-gradient(60% 50% at 50% 80%, ${alpha('#0D47A1', 0.15)}, transparent 75%)
      `,
    },
  };

  return (
    <Box
      aria-hidden
      sx={[
        {
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          ...variantConfig[variant],
          backgroundSize: '200% 200%',
          filter: 'blur(50px)',
          animation: speedConfig[speed],
          '@keyframes auroraShift': {
            '0%': { backgroundPosition: '0% 0%' },
            '50%': { backgroundPosition: '100% 100%' },
            '100%': { backgroundPosition: '0% 0%' },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default AnimatedGradientBackground;
