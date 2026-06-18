import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { useTheme, alpha } from '@mui/material/styles';

interface AnimatedStripeBackgroundProps {
  colors?: string[];
  angle?: number;
}

const AnimatedStripeBackground = ({
  colors,
  angle = 135,
}: AnimatedStripeBackgroundProps) => {
  const theme = useTheme();
  const MotionBox = motion(Box);

  const defaultColors = [
    alpha(theme.palette.primary.main, 0.3),
    alpha('#9C27B0', 0.25),
    alpha('#E91E63', 0.25),
    alpha('#FF9800', 0.2),
  ];

  const gradientColors = colors || defaultColors;

  return (
    <MotionBox
      aria-hidden
      animate={{
        backgroundPosition: ['0% 0%', '200% 200%', '0% 0%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      sx={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `linear-gradient(${angle}deg, ${gradientColors.join(', ')})`,
        backgroundSize: '200% 200%',
        filter: 'blur(50px)',
      }}
    />
  );
};

export default AnimatedStripeBackground;
