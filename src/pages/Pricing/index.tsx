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
import { pageHeroSx, pricingCardSx, sectionChipSx } from '../../design-system/styles';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

const Pricing = () => {
  return (
    <Box>
      <Box sx={pageHeroSx}>
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label="Products" sx={sectionChipSx} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 2.5 }}>
                Choose your plan
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: 520, mx: 'auto' }}>
                No hidden fees. No long-term contracts. Pick Pro or Elite and start landing interviews
                faster.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
            {PRICING_PLANS.map((plan, i) => (
              <Grid size={{ xs: 12, md: 6 }} key={plan.id}>
                <MotionBox
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  custom={i}
                  sx={{ ...pricingCardSx(plan.highlighted), position: 'relative' }}
                >
                  {plan.badge && (
                    <Chip
                      label={plan.badge}
                      color="primary"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
                        color: '#fff',
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
                    <Box component="span" sx={{ color: 'text.secondary', ml: 0.5 }}>
                      {plan.period}
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
                    {plan.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/checkout?plan=${plan.id}`}
                    variant={plan.highlighted ? 'contained' : 'outlined'}
                    fullWidth
                    size="large"
                    sx={{
                      mb: 3,
                      ...(plan.highlighted
                        ? {
                            background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
                          }
                        : {}),
                    }}
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
                          slotProps={{ primary: { variant: 'body2', color: 'text.secondary' } as object }}
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

      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: brandColors.background, textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ mb: 2 }}>
            Still have questions?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            Our team is happy to help you pick the right plan for your job search goals.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
            <Button component={Link} to="/contact" variant="contained" size="large">
              Contact Us
            </Button>
            <Button component={Link} to="/features" variant="outlined" size="large">
              Explore Features
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;
