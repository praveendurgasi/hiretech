import { Box, Container, Typography, Stack, Link as MuiLink, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { BRAND } from '../../constants';
import { fadeInUp, staggerContainer, viewportOptions } from '../../animations/variants';
import { pageHeroSx, sectionChipSx } from '../../design-system/styles';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);

const SECTIONS = [
  {
    title: '1. Service Overview',
    body: 'Hiretech.careers provides AI-assisted job application support, job matching, resume optimization guidance, and career-related services.',
  },
  {
    title: '2. No Job Guarantee',
    body: 'While we strive to improve your job search process, Hiretech.careers does not guarantee:',
    bullets: ['Job offers', 'Employment placement', 'Specific salary packages'],
    footer: 'Hiring decisions are made solely by employers.',
  },
  {
    title: '3. User Responsibilities',
    body: 'Users agree to:',
    bullets: [
      'Provide accurate information and documents.',
      'Submit an updated resume.',
      'Respond promptly to requests for additional information.',
      'Use our services legally and ethically.',
    ],
  },
  {
    title: '4. Application Process',
    body: 'Hiretech.careers may submit applications on behalf of users based on the information provided. Users are responsible for ensuring the accuracy of their profiles and resumes.',
  },
  {
    title: '5. Payments & Refunds',
    bullets: [
      'All payments are final unless otherwise stated.',
      'Refund requests will be reviewed on a case-by-case basis.',
    ],
  },
  {
    title: '6. Privacy & Data Protection',
    body: 'We respect your privacy and will not sell your personal information to third parties. Your data will only be used for providing our services and improving your job search experience.',
  },
  {
    title: '7. Service Availability',
    body: 'We aim to provide uninterrupted service; however, temporary interruptions may occur due to technical issues, maintenance, or third-party platform limitations.',
  },
  {
    title: '8. Contact Information',
    body: 'For questions regarding these Terms & Conditions, contact:',
    bullets: [`Email: ${BRAND.email}`, 'Website: Hiretech.careers'],
  },
];

const Terms = () => {
  return (
    <Box>
      <Box sx={pageHeroSx}>
        <Container maxWidth="md">
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip label="Legal" sx={sectionChipSx} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3.25rem' }, mb: 2, mt: 2 }}>
                Terms & Conditions
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
                Welcome to Hiretech.careers. By using our services, you agree to the following terms and
                conditions.
              </Typography>
            </motion.div>
          </MotionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: brandColors.white }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            {SECTIONS.map((section, index) => (
              <MotionBox
                key={section.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                custom={index}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: brandColors.dark }}>
                  {section.title}
                </Typography>
                {section.body ? (
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: section.bullets ? 1.5 : 0 }}>
                    {section.body}
                  </Typography>
                ) : null}
                {section.bullets ? (
                  <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'text.secondary' }}>
                    {section.bullets.map((item) => (
                      <Typography key={item} component="li" variant="body1" sx={{ lineHeight: 1.8, mb: 0.5 }}>
                        {item.startsWith('Email:') ? (
                          <>
                            Email:{' '}
                            <MuiLink href={`mailto:${BRAND.email}`} sx={{ color: brandColors.primary }}>
                              {BRAND.email}
                            </MuiLink>
                          </>
                        ) : (
                          item
                        )}
                      </Typography>
                    ))}
                  </Box>
                ) : null}
                {section.footer ? (
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 1.5 }}>
                    {section.footer}
                  </Typography>
                ) : null}
              </MotionBox>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Terms;
