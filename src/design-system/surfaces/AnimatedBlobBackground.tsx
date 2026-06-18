import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { useTheme, alpha } from '@mui/material/styles';

interface AnimatedBlobBackgroundProps {
  color1?: string;
  color2?: string;
}

const AnimatedBlobBackground = ({
  color1,
  color2,
}: AnimatedBlobBackgroundProps) => {
  const theme = useTheme();
  const MotionBox = motion(Box);

  const c1 = color1 || theme.palette.primary.main;
  const c2 = color2 || '#E91E63';

  const ribbonBase = {
    position: 'absolute' as const,
    borderTopLeftRadius: '55% 60%',
    borderBottomLeftRadius: '55% 60%',
    borderTopRightRadius: '0%',
    borderBottomRightRadius: '0%',
    transformOrigin: '100% 58%',
    willChange: 'transform, opacity',
  };

  return (
    <MotionBox
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(120% 90% at 104% 46%, rgba(255, 255, 255, 0.30) 0%, transparent 41%), radial-gradient(90% 70% at 98% 52%, rgba(255, 255, 255, 0.18) 0%, transparent 58%)',
        },
      }}
    >
      <motion.div
        animate={{
          x: [0, -92, 0],
          y: [0, 60, 0],
          rotate: [22, 17, 22],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          ...ribbonBase,
          top: '-62%',
          right: '-10%',
          width: '90%',
          height: '210%',
          background: `linear-gradient(118deg, ${alpha('#9EC4FF', 0.86)} 0%, ${alpha(c1, 0.92)} 32%, ${alpha('#D870F7', 0.88)} 57%, ${alpha('#FF9D5B', 0.86)} 82%, ${alpha('#FFD494', 0.82)} 100%)`,
          opacity: 0.9,
          filter: 'saturate(1.05)',
        }}
      />

      <motion.div
        animate={{
          x: [0, -74, 0],
          y: [0, 54, 0],
          rotate: [24, 19, 24],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
        style={{
          ...ribbonBase,
          top: '-56%',
          right: '-4%',
          width: '82%',
          height: '194%',
          background:
            'linear-gradient(117deg, rgba(140, 174, 255, 0.80) 0%, rgba(188, 132, 255, 0.82) 42%, rgba(255, 132, 196, 0.78) 69%, rgba(255, 188, 105, 0.78) 100%)',
          opacity: 0.82,
        }}
      />

      <motion.div
        animate={{
          x: [0, -62, 0],
          y: [0, 48, 0],
          rotate: [25, 20, 25],
          scale: [1, 1.07, 1],
        }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        style={{
          ...ribbonBase,
          top: '-50%',
          right: '2%',
          width: '72%',
          height: '178%',
          background: `linear-gradient(114deg, ${alpha('#F0C6FF', 0.78)} 0%, ${alpha(c2, 0.76)} 52%, ${alpha('#FFB65C', 0.72)} 100%)`,
          opacity: 0.76,
        }}
      />

      <motion.div
        animate={{
          x: [0, -44, 0],
          y: [0, 34, 0],
          rotate: [26, 22, 26],
          scale: [1, 1.05, 1],
          backgroundPosition: ['0% 0%', '120% 50%', '0% 0%'],
        }}
        transition={{ duration: 13.5, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        style={{
          ...ribbonBase,
          top: '-44%',
          right: '8%',
          width: '62%',
          height: '162%',
          background:
            'linear-gradient(128deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 196, 153, 0.58) 42%, rgba(255, 156, 106, 0.66) 72%, rgba(255, 241, 214, 0.62) 100%)',
          backgroundSize: '160% 160%',
          opacity: 0.85,
        }}
      />

      <motion.div
        animate={{
          opacity: [0.35, 0.92, 0.35],
          x: [0, -36, 0],
          y: [0, 44, 0],
          backgroundPosition: ['0% 0%', '200% 0%', '0% 0%'],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        style={{
          ...ribbonBase,
          top: '-28%',
          right: '16%',
          width: '44%',
          height: '142%',
          background:
            'repeating-linear-gradient(102deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0.55) 13%, rgba(255, 255, 255, 0) 18%, rgba(255, 255, 255, 0) 28%)',
          backgroundSize: '220% 100%',
          filter: 'blur(1.6px)',
          mixBlendMode: 'screen',
        }}
      />

      <motion.div
        animate={{ opacity: [0.22, 0.44, 0.22], x: [0, -24, 0], y: [0, 20, 0] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        style={{
          ...ribbonBase,
          top: '-34%',
          right: '10%',
          width: '58%',
          height: '150%',
          background:
            'linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.42) 50%, rgba(255,255,255,0) 100%)',
          filter: 'blur(10px)',
        }}
      />

      <motion.div
        animate={{
          x: ['18%', '-36%', '18%'],
          opacity: [0.15, 0.55, 0.15],
        }}
        transition={{ duration: 5.7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-32%',
          right: '-8%',
          width: '64%',
          height: '162%',
          borderTopLeftRadius: '55% 60%',
          borderBottomLeftRadius: '55% 60%',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          background:
            'linear-gradient(102deg, rgba(255,255,255,0) 22%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0) 78%)',
          filter: 'blur(5px)',
          mixBlendMode: 'screen',
          transform: 'rotate(21deg)',
          transformOrigin: '100% 58%',
          willChange: 'transform, opacity',
        }}
      />

      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '180% 0%', '0% 0%'],
          opacity: [0.24, 0.44, 0.24],
        }}
        transition={{ duration: 6.9, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '-46%',
          right: '0%',
          width: '70%',
          height: '186%',
          borderTopLeftRadius: '55% 60%',
          borderBottomLeftRadius: '55% 60%',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          background:
            'repeating-linear-gradient(104deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 8%, rgba(255,255,255,0.30) 11%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 24%)',
          backgroundSize: '210% 100%',
          mixBlendMode: 'overlay',
          filter: 'blur(0.8px)',
          transform: 'rotate(20deg)',
          transformOrigin: '100% 58%',
          willChange: 'background-position, opacity',
        }}
      />
    </MotionBox>
  );
};

export default AnimatedBlobBackground;
