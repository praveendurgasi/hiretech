import { Box, Container, Typography, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BRAND } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import { pageHeroSx, sectionChipSx } from '../../design-system/styles';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

export const PLACEHOLDER_PAGES: Record<
  string,
  { title: string; chip: string; description: string; body: string }
> = {
  changelog: {
    title: 'Changelog',
    chip: 'Changelog',
    description: 'Product updates and improvements to HireTech Careers.',
    body: 'We are preparing our public changelog. Check back soon for release notes on new features, fixes, and platform improvements.',
  },
  roadmap: {
    title: 'Roadmap',
    chip: 'Roadmap',
    description: 'What we are building next for job seekers.',
    body: 'Our roadmap is being finalized. Soon you will see upcoming features for ATS optimization, auto-apply, interview prep, and expanded human support.',
  },
  blog: {
    title: 'Blog',
    chip: 'Blog',
    description: 'Insights on job search, visas, and landing offers faster.',
    body: 'Articles and guides are coming soon. We will share practical advice for international candidates and tech professionals.',
  },
  careers: {
    title: 'Careers',
    chip: 'Careers',
    description: `Join the team behind ${BRAND.name}.`,
    body: 'We are not hiring publicly yet. If you are interested in working with us, reach out through our contact page or WhatsApp.',
  },
  privacy: {
    title: 'Privacy Policy',
    chip: 'Legal',
    description: 'How we handle your personal information.',
    body: 'Our full privacy policy is being prepared. We only collect details you submit through our website forms and use them to respond to your job search inquiries.',
  },
  terms: {
    title: 'Terms of Service',
    chip: 'Legal',
    description: 'Terms for using HireTech Careers.',
    body: 'Our terms of service document is being finalized. By using this website and contacting our team, you agree to communicate in good faith and provide accurate information.',
  },
  cookies: {
    title: 'Cookie Policy',
    chip: 'Legal',
    description: 'How cookies are used on this website.',
    body: 'This site may use essential cookies for basic functionality and analytics. A detailed cookie policy will be published here soon.',
  },
  security: {
    title: 'Security',
    chip: 'Security',
    description: 'How we protect your data.',
    body: 'We take security seriously and are documenting our practices. For security questions, contact us at the email listed on our contact page.',
  },
};

interface PlaceholderPageProps {
  slug: keyof typeof PLACEHOLDER_PAGES;
}

const PlaceholderPage = ({ slug }: PlaceholderPageProps) => {
  const page = PLACEHOLDER_PAGES[slug];

  if (!page) {
    return null;
  }

  return (
    <Box>
      <Box sx={pageHeroSx}>
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label={page.chip} sx={sectionChipSx} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.25rem' }, mb: 2 }}>
                {page.title}
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
                {page.description}
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="md">
          <MotionBox
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: '1px solid rgba(21,101,255,0.14)',
              background: 'linear-gradient(168deg, rgba(255,255,255,0.96) 0%, rgba(246,250,255,0.92) 100%)',
            }}
          >
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
              {page.body}
            </Typography>
            <Button component={Link} to="/contact" variant="contained">
              Contact Us
            </Button>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default PlaceholderPage;
