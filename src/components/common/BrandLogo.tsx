import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';
import newlogoht from '../../assets/newlogoht-transparent.png';

export interface BrandLogoProps {
  logoHeight?: number | string;
  showCareers?: boolean;
  hideCareersOnMobile?: boolean;
  hireTechColor?: string;
  careersColor?: string;
  logoOffsetY?: number;
  textOffsetY?: number;
  textSx?: SxProps<Theme>;
}

const BrandLogo = ({
  logoHeight = 40,
  showCareers = true,
  hideCareersOnMobile = false,
  hireTechColor = '#050B2E',
  careersColor = '#1565FF',
  logoOffsetY = 0,
  textOffsetY = 0,
  textSx,
}: BrandLogoProps) => {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', minWidth: 0 }}>
      <Box
        component="img"
        src={newlogoht}
        alt="HireTech Careers logo"
        loading="eager"
        data-slot="brand-logo-image"
        sx={{
          height: logoHeight,
          width: 'auto',
          maxWidth: '100%',
          display: 'block',
          objectFit: 'contain',
          backgroundColor: 'transparent',
          transition: 'filter 0.2s ease, transform 0.2s ease',
          transform: `translateY(${logoOffsetY}px)`,
        }}
      />

      <Stack
        direction="row"
        spacing={0.35}
        sx={{ alignItems: 'flex-end', minWidth: 0, mt: '1px', transform: `translateY(${textOffsetY}px)` }}
      >
        <Typography
          data-slot="brand-logo-hiretech"
          sx={[
            {
              fontWeight: 700,
              color: hireTechColor,
              letterSpacing: '-0.02em',
              fontSize: { xs: '1.01rem', sm: '1.08rem', md: '1.12rem', lg: '1.16rem' },
              lineHeight: 1,
              whiteSpace: 'nowrap',
              transition: 'color 0.2s ease',
            },
            ...(Array.isArray(textSx) ? textSx : [textSx]),
          ]}
        >
          HireTech
        </Typography>

        {showCareers ? (
          <Typography
            data-slot="brand-logo-careers"
            sx={[
              {
                fontWeight: 500,
                color: careersColor,
                letterSpacing: '-0.01em',
                fontSize: { xs: '0.9rem', sm: '0.98rem', md: '1.01rem', lg: '1.05rem' },
                lineHeight: 1,
                whiteSpace: 'nowrap',
                display: hideCareersOnMobile ? { xs: 'none', sm: 'inline' } : 'inline',
                transition: 'color 0.2s ease',
              },
              ...(Array.isArray(textSx) ? textSx : [textSx]),
            ]}
          >
            Careers
          </Typography>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default BrandLogo;
