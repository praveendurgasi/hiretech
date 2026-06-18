import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import { BRAND, FOOTER_LINKS, SOCIAL_LINKS } from '../../constants';
import { brandColors } from '../../theme';
import { BrandLogo } from '../common';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: brandColors.dark,
        color: 'rgba(255,255,255,0.75)',
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <BrandLogo
                logoHeight={42}
                hireTechColor="#FFFFFF"
                careersColor="#60A5FA"
              />
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 3, maxWidth: 320, lineHeight: 1.7 }}>
              {BRAND.description}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component={MuiLink}
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                aria-label="Twitter"
                sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#29A3FF' } }}
              >
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton
                component={MuiLink}
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                aria-label="LinkedIn"
                sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#29A3FF' } }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
              <IconButton
                component={MuiLink}
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                aria-label="GitHub"
                sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#29A3FF' } }}
              >
                <GitHub fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <Grid size={{ xs: 6, sm: 4, md: 'auto' }} key={section} sx={{ flexGrow: 1 }}>
              <Typography
                variant="overline"
                sx={{ color: 'rgba(255,255,255,0.4)', mb: 2, display: 'block', letterSpacing: '0.1em' }}
              >
                {section}
              </Typography>
              <Stack spacing={1.5}>
                {links.map((link) => (
                  <Link key={link.href} to={link.href} style={{ textDecoration: 'none' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.6)',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#ffffff' },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', my: 5 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            © {currentYear} {BRAND.name}. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            Made with ♥ for the tech community
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
