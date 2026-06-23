import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import { authPageSx, authSurfaceSx } from '../../design-system/styles';
import { brandColors } from '../../theme';
import { BrandLogo } from '../common';

const MotionBox = motion(Box);

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

const AuthShell = ({ title, subtitle, children, footer }: AuthShellProps) => (
  <Box sx={authPageSx}>
    <Container maxWidth="sm">
      <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div variants={fadeInUp}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'inline-flex', mb: 2 }}>
                <BrandLogo
                  logoHeight={42}
                  hideCareersOnMobile
                  hireTechColor={brandColors.dark}
                  careersColor={brandColors.primary}
                />
              </Box>
            </Link>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {subtitle}
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Box sx={authSurfaceSx}>{children}</Box>
        </motion.div>

        {footer ? (
          <motion.div variants={fadeInUp}>
            <Box sx={{ mt: 3 }}>{footer}</Box>
          </motion.div>
        ) : null}
      </MotionBox>
    </Container>
  </Box>
);

export default AuthShell;
