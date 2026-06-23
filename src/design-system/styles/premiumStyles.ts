import type { SxProps, Theme } from '@mui/material/styles';
import { brandColors } from '../../theme';

export const sectionChipSx: SxProps<Theme> = {
  mb: 2,
  backgroundColor: 'rgba(21,101,255,0.08)',
  color: brandColors.primary,
  fontWeight: 700,
  border: '1px solid rgba(21,101,255,0.2)',
};

export const premiumCardSx: SxProps<Theme> = {
  p: { xs: 2.6, md: 3.1 },
  borderRadius: 3,
  border: '1px solid rgba(21,101,255,0.16)',
  background:
    'linear-gradient(168deg, rgba(255,255,255,0.95) 0%, rgba(246,250,255,0.9) 100%)',
  height: '100%',
  transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
  boxShadow: '0 12px 30px rgba(21,101,255,0.06)',
  backdropFilter: 'blur(8px)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.secondary})`,
    opacity: 0,
    transition: 'opacity 0.28s ease',
  },
  '&:hover': {
    borderColor: brandColors.primary,
    boxShadow: '0 18px 34px rgba(21,101,255,0.14)',
    transform: 'translateY(-4px)',
    '&::before': {
      opacity: 1,
    },
  },
};

export const premiumCardCompactSx: SxProps<Theme> = {
  ...premiumCardSx,
  p: { xs: 1.5, md: 1.75 },
  '&:hover': {
    borderColor: brandColors.primary,
    boxShadow: '0 14px 28px rgba(21,101,255,0.12)',
    transform: 'translateY(-3px)',
    '&::before': {
      opacity: 1,
    },
  },
};

export const premiumIconAvatarSx: SxProps<Theme> = {
  width: 48,
  height: 48,
  background: 'linear-gradient(135deg, rgba(21,101,255,0.12), rgba(41,163,255,0.18))',
  color: brandColors.primary,
  borderRadius: 2,
};

export const premiumStepBadgeSx: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 34,
  height: 34,
  mb: 2,
  borderRadius: '50%',
  fontSize: '0.8rem',
  fontWeight: 800,
  letterSpacing: '0.04em',
  color: '#FFFFFF',
  background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
  boxShadow: '0 6px 16px rgba(21,101,255,0.28)',
};

export const pageHeroSx: SxProps<Theme> = {
  pt: { xs: 10, md: 14 },
  pb: { xs: 6, md: 8 },
  background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(21,101,255,0.10) 0%, transparent 65%), ${brandColors.background}`,
  textAlign: 'center',
};

export const authPageSx: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(21,101,255,0.10) 0%, transparent 65%), ${brandColors.background}`,
  py: 6,
};

export const authSurfaceSx: SxProps<Theme> = {
  p: { xs: 3, sm: 4 },
  borderRadius: 3,
  border: '1px solid rgba(21,101,255,0.14)',
  background:
    'linear-gradient(168deg, rgba(255,255,255,0.96) 0%, rgba(246,250,255,0.92) 100%)',
  boxShadow: '0 20px 50px rgba(21,101,255,0.10)',
  backdropFilter: 'blur(12px)',
};

export const pricingCardSx = (highlighted: boolean): SxProps<Theme> => ({
  ...premiumCardSx,
  p: { xs: 3, md: 4 },
  border: highlighted
    ? `2px solid ${brandColors.primary}`
    : '1px solid rgba(21,101,255,0.16)',
  background: highlighted
    ? 'linear-gradient(180deg, #FFFFFF 0%, #EEF4FF 100%)'
    : 'linear-gradient(168deg, rgba(255,255,255,0.95) 0%, rgba(246,250,255,0.9) 100%)',
  boxShadow: highlighted
    ? '0 16px 36px rgba(21,101,255,0.18)'
    : '0 12px 30px rgba(21,101,255,0.06)',
  display: 'flex',
  flexDirection: 'column',
});
