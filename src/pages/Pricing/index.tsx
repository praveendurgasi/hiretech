import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Check } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

const Pricing = () => {
  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          pt: { xs: 10, md: 14 },
          pb: { xs: 6, md: 8 },
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(21,101,255,0.10) 0%, transparent 65%), ${brandColors.background}`,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label="Pricing" sx={{ mb: 2.5, backgroundColor: 'rgba(21,101,255,0.08)', color: brandColors.primary, fontWeight: 600 }} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 2.5 }}>
                Simple, transparent pricing
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: '#718096', maxWidth: 500, mx: 'auto' }}>
                No hidden fees. No long-term contracts. Pick the plan that fits your team and upgrade anytime.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      {/* Plans */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
            {PRICING_PLANS.map((plan, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={plan.id}>
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  custom={i}
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: 3,
                    border: plan.highlighted
                      ? `2px solid ${brandColors.primary}`
                      : '1px solid #E2E8F0',
                    background: plan.highlighted
                      ? `linear-gradient(180deg, rgba(21,101,255,0.04) 0%, #fff 100%)`
                      : brandColors.white,
                    position: 'relative',
                    boxShadow: plan.highlighted ? '0 16px 48px rgba(21,101,255,0.16)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {plan.badge && (
                    <Chip
                      label={plan.badge}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: -14,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'linear-gradient(135deg, #1565FF, #29A3FF)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        px: 1,
                      }}
                    />
                  )}
                  <Typography variant="overline" sx={{ color: brandColors.primary, mb: 1 }}>
                    {plan.name}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Box component="span" sx={{ fontSize: '3rem', fontWeight: 800, color: brandColors.dark }}>
                      ${plan.price}
                    </Box>
                    <Box component="span" sx={{ color: '#718096', ml: 0.5 }}>
                      {plan.period}
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#718096', mb: 3, lineHeight: 1.7 }}>
                    {plan.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={plan.id === 'enterprise' ? '/contact' : `/checkout?plan=${plan.id}`}
                    variant={plan.highlighted ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    sx={{ mb: 3 }}
                  >
                    {plan.cta}
                  </Button>
                  <List dense sx={{ flex: 1 }}>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} disableGutters sx={{ py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <Check sx={{ fontSize: 18, color: brandColors.primary }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          slotProps={{ primary: { variant: 'body2', color: '#4A5568' } as object }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ teaser */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: brandColors.background, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ mb: 2 }}>
            Still have questions?
          </Typography>
          <Typography variant="body1" sx={{ color: '#718096', mb: 4 }}>
            Our team is happy to walk you through the right plan for your company.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
            <Button component={Link} to="/contact" variant="contained" size="large">
              Contact Sales
            </Button>
            <Button component={Link} to="/features" variant="outlined" size="large">
              Compare Features
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;
