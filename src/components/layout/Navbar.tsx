import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useScrollTrigger,
  Slide,
  Stack,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../constants';
import { BrandLogo } from '../common';

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(248,250,252,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 72, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
              aria-label="HireTech Careers home"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Box
                  sx={{
                    px: { xs: 0.5, sm: 0.8 },
                    py: { xs: 0.45, sm: 0.6 },
                    borderRadius: 2,
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      '& [data-slot="brand-logo-image"]': {
                        transform: 'translateY(-0.5px)',
                        filter: 'saturate(1.06)',
                      },
                      '& [data-slot="brand-logo-hiretech"]': {
                        color: theme.palette.primary.dark,
                      },
                      '& [data-slot="brand-logo-careers"]': {
                        color: theme.palette.secondary.main,
                      },
                    },
                  }}
                >
                  <BrandLogo
                    logoHeight={40}
                    hideCareersOnMobile
                    hireTechColor={theme.palette.text.primary}
                    careersColor={theme.palette.primary.main}
                    textOffsetY={1}
                  />
                </Box>
              </motion.div>
            </Link>

            {/* Desktop nav */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  to={link.href}
                  sx={{
                    color: isActive(link.href)
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                    fontWeight: isActive(link.href) ? 600 : 500,
                    fontSize: '0.9375rem',
                    px: 1.5,
                    py: 1,
                    borderRadius: 2,
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>

            {/* Desktop CTA */}
            <Stack
              direction="row"
              spacing={1.5}
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                color="primary"
                size="medium"
              >
                Get Started Free
              </Button>
            </Stack>

            {/* Mobile hamburger */}
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Mobile drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          slotProps={{
            paper: {
              sx: { width: 280, pt: 2, px: 2 },
            },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={() => setDrawerOpen(false)} aria-label="Close navigation menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    color: isActive(link.href)
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                    fontWeight: isActive(link.href) ? 600 : 400,
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 3, px: 1 }}>
            <Button
              fullWidth
              component={Link}
              to="/signup"
              variant="contained"
              onClick={() => setDrawerOpen(false)}
            >
              Get Started Free
            </Button>
          </Box>
        </Drawer>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
