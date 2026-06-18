import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type MotionDivProps = PropsWithChildren<HTMLMotionProps<'div'>>;

const createVariants = (
  hidden: Record<string, number>,
  visible: Record<string, number>,
): Variants => ({
  hidden,
  visible: {
    ...visible,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
});

const defaultViewport = { once: true, margin: '-60px' };

export const FadeIn = ({ children, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={createVariants({ opacity: 0 }, { opacity: 1 })}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideUp = ({ children, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={createVariants({ opacity: 0, y: 28 }, { opacity: 1, y: 0 })}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideLeft = ({ children, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={createVariants({ opacity: 0, x: 30 }, { opacity: 1, x: 0 })}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideRight = ({ children, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={createVariants({ opacity: 0, x: -30 }, { opacity: 1, x: 0 })}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={createVariants({ opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1 })}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, ...props }: MotionDivProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.08,
        },
      },
    }}
    {...props}
  >
    {children}
  </motion.div>
);
