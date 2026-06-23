import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowForward,
  AutoAwesome,
  BarChart,
  Bolt,
  BugReport,
  BusinessCenter,
  CheckCircle,
  ChatBubbleOutlined,
  HeadsetMic,
  ExpandMore,
  FindInPage,
  Inventory2Outlined,
  Hub,
  Insights,
  Lightbulb,
  LockOutlined,
  Pause,
  Psychology,
  Radar,
  RocketLaunch,
  SearchOff,
  SpaOutlined,
  Tune,
} from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  viewportOptions,
} from '../../animations/variants';
import { BRAND } from '../../constants';
import {
  premiumCardSx,
  premiumCardCompactSx,
  premiumIconAvatarSx,
  premiumStepBadgeSx,
  pricingCardSx,
  sectionChipSx,
} from '../../design-system/styles';
import { brandColors } from '../../theme';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  decimals?: number;
  isInView: boolean;
  durationMs?: number;
}

interface TrustedCompany {
  name: string;
  slug: string;
}

interface JourneyStep {
  title: string;
  detail: string;
  metric: string;
  featured?: boolean;
}

interface ProblemItem {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

interface SolutionItem {
  icon: React.ReactNode;
  problem: string;
  title: string;
  description: string;
  mockup: string;
  score: [number, number, number];
}

const TRUST_STRIP = [
  'CV Tailoring',
  'ATS Optimizer',
  'Auto Apply',
  'Interview Prep',
  'Salary Coach',
];

const JOURNEY_STEPS: JourneyStep[] = [
  { title: 'Upload CV', detail: 'AI parses skills, impact, and career trajectory.', metric: '2 min setup' },
  {
    title: 'ATS Score Improved',
    detail: 'Smart rewrite increases ATS compatibility.',
    metric: '94% pass rate',
    featured: true,
  },
  { title: 'High-Match Jobs Found', detail: 'Finds opportunities aligned to your goals.', metric: '48 matches' },
  {
    title: 'Applications Submitted',
    detail: 'Copilot sends optimized, tailored applications.',
    metric: '127 sent',
    featured: true,
  },
  { title: 'Interviews Scheduled', detail: 'Interview invites tracked in real-time.', metric: '12 interviews' },
  {
    title: 'Offers Received',
    detail: 'Negotiation insights and compensation coaching.',
    metric: '2 offers',
    featured: true,
  },
];

const TRUST_METRICS = [
  { label: 'Jobs Landed', value: 18, suffix: 'K+' },
  { label: 'ATS Pass Rate', value: 94, suffix: '%' },
  { label: 'More Interviews', value: 3.2, suffix: '×', decimals: 1 },
  { label: 'Average Time To Offer', value: 11, suffix: ' Days' },
];

const SIMPLE_ICON_COLOR = '4b5563';

const TRUSTED_COMPANIES: TrustedCompany[] = [
  { name: 'Google', slug: 'google' },
  { name: 'Meta', slug: 'meta' },
  { name: 'Microsoft', slug: 'microsoft' },
  { name: 'Amazon', slug: 'amazon' },
  { name: 'Apple', slug: 'apple' },
  { name: 'NVIDIA', slug: 'nvidia' },
  { name: 'Adobe', slug: 'adobe' },
  { name: 'Salesforce', slug: 'salesforce' },
  { name: 'PayPal', slug: 'paypal' },
  { name: 'JPMorgan Chase', slug: 'jpmorganchase' },
];

const getSimpleIconUrl = (slug: string) =>
  `https://cdn.simpleicons.org/${slug}/${SIMPLE_ICON_COLOR}`;

const PROBLEMS: ProblemItem[] = [
  {
    icon: <SearchOff />,
    title: 'ATS Filters Kill Good Candidates',
    detail: 'Strong applicants are rejected before a recruiter sees their profile due to poor keyword alignment.',
  },
  {
    icon: <BarChart />,
    title: 'Job Searching Takes 100+ Hours',
    detail: 'Manual sourcing, tailoring, and applying drains evenings and weekends with low ROI.',
  },
  {
    icon: <Tune />,
    title: 'Keyword Matching Is A Science',
    detail: 'Each role requires different semantic signals and role-specific language to pass screening.',
  },
  {
    icon: <BugReport />,
    title: 'Response Rates Are At An All-Time Low',
    detail: 'Candidates send dozens of applications but hear back from only a tiny fraction.',
  },
  {
    icon: <Hub />,
    title: "Personalisation Doesn't Scale",
    detail: 'Tailoring every CV and cover letter manually is not sustainable at real application volume.',
  },
  {
    icon: <Radar />,
    title: "Candidates Don't Know What's Wrong",
    detail: 'Without feedback loops, it is impossible to identify what is blocking callbacks and interviews.',
  },
];

const SOLUTIONS: SolutionItem[] = [
  {
    icon: <FindInPage />,
    problem: 'ATS Filters Kill Good Candidates',
    title: 'Deep ATS Alignment Engine',
    description:
      'HireTech extracts role-critical requirements and rewrites your profile around recruiter and ATS ranking signals.',
    mockup: 'ATS Analyzer',
    score: [96, 88, 92],
  },
  {
    icon: <AutoAwesome />,
    problem: 'Job Searching Takes 100+ Hours',
    title: 'Automated Discovery + Shortlisting',
    description:
      'Your copilot continuously scans and prioritizes high-fit roles so your search runs even while you are offline.',
    mockup: 'Job Match Feed',
    score: [82, 91, 86],
  },
  {
    icon: <Insights />,
    problem: 'Keyword Matching Is A Science',
    title: 'Role-Specific CV Generation',
    description:
      'Create optimized CV variants with quantified achievements and role-level language tuned for each opportunity.',
    mockup: 'CV Tailoring Lab',
    score: [89, 94, 84],
  },
  {
    icon: <RocketLaunch />,
    problem: 'Response Rates Are At An All-Time Low',
    title: 'High-Quality Auto Apply',
    description:
      'Approve your strategy once and HireTech submits consistent, personalized applications at scalable speed.',
    mockup: 'Application Orchestrator',
    score: [78, 93, 85],
  },
  {
    icon: <Psychology />,
    problem: "Personalisation Doesn't Scale",
    title: 'AI Interview + Messaging Coach',
    description:
      'Get role-specific interview prep, recruiter response suggestions, and personalized talking points instantly.',
    mockup: 'Interview Coach',
    score: [90, 81, 94],
  },
  {
    icon: <Lightbulb />,
    problem: "Candidates Don't Know What's Wrong",
    title: 'Funnel Intelligence Dashboard',
    description:
      'Track conversion by role, resume variant, and company segment to identify exactly what improves outcomes.',
    mockup: 'Performance Insights',
    score: [84, 87, 95],
  },
];

const HOW_IT_WORKS = [
  {
    title: 'Get subscription',
    detail: 'Pick Pro or Elite and activate your plan in a few clicks.',
  },
  {
    title: 'Our human supervisor collects your data',
    detail: 'We gather your goals, role preferences, and profile details.',
  },
  {
    title: 'Our AI agents and human supervisors apply at your own pace',
    detail: 'Applications are tailored and submitted based on your chosen limits.',
  },
  {
    title: 'Pause and apply whenever you need',
    detail: 'You stay in control and can pause, adjust, or resume anytime.',
  },
];

const PRODUCT_PREVIEW = [
  {
    title: 'AI Analyst',
    detail:
      'Configures and monitors your AI agents. Tracks daily application activity and delivery. Flags issues early and escalates to the Team Lead to fix fast.',
  },
  {
    title: 'Team Lead',
    detail:
      'Main support for technical help and issue resolution. Reviews and improves your resume and targeting strategy. Handles escalations and ensures quality + speed end-to-end.',
  },
  {
    title: 'Sales & Feedback Specialist',
    detail:
      'Handles billing questions, renewals, and plan upgrades. Collects feedback and ensures improvements are applied. Your point of contact for account updates and support follow-ups.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Immigration clarity',
    role: 'Visa timelines, government updates, and attorney-backed templates that make the F-1 -> OPT -> H-1B path feel doable.',
    company: '',
    metric: '',
    quote: '',
  },
  {
    name: 'Hire-ready assets',
    role: 'Resumes, outreach scripts, case studies, and project briefs crafted with operators who hire international talent.',
    company: '',
    metric: '',
    quote: '',
  },
  {
    name: 'Live accountability',
    role: 'Weekly cowork sprints, micro-cohorts, and async check-ins so you never have to navigate the job search alone.',
    company: '',
    metric: '',
    quote: '',
  },
  {
    name: 'Proof-based storytelling',
    role: 'From capstone labs to freelance gigs, build a narrative that lands interviews in the U.S., Canada, and beyond.',
    company: '',
    metric: '',
    quote: '',
  },
];

const PRICING = [
  {
    plan: 'Pro',
    price: '$149/month',
    subtitle: 'For serious job seekers · 25 days',
    cta: 'Choose Pro',
    to: '/checkout?plan=pro',
    highlight: true,
    features: [
      '1 AI agent + 1 human supervisor',
      'Resume tailored for each job',
      'ATS-matched resumes for every role',
      'Apply to up to 25 quality jobs per day',
      'No ghost jobs (verified postings only)',
      'AI-assisted applications with quality checks',
      'Continuous optimization from responses',
      'Daily progress reports',
      'Resume shared after every application',
      'Dedicated team with direct communication',
    ],
  },
  {
    plan: 'Elite',
    price: '$229/month',
    subtitle: 'For accelerated outcomes · 45 days',
    cta: 'Choose Elite',
    to: '/checkout?plan=elite',
    features: [
      '1 AI agent + 1 human supervisor',
      'Resume tailored for each job',
      'ATS-matched resumes for every role',
      'Apply to up to 45 quality jobs per day',
      'No ghost jobs (verified postings only)',
      'AI-assisted applications with quality checks',
      'Continuous optimization from responses',
      'Daily progress reports',
      'Resume shared after every application',
      'Dedicated team with direct communication',
    ],
  },
];

const COMPARISON_ROWS = [
  { feature: 'ATS Analyzer', pro: true, elite: true },
  { feature: 'Auto Apply', pro: true, elite: true },
  { feature: 'Interview Coach', pro: true, elite: true },
  { feature: 'Salary Insights', pro: false, elite: true },
  { feature: 'Priority Support', pro: true, elite: true },
];

const FAQS = [
  {
    question: 'How does ATS optimization work?',
    answer:
      'HireTech analyzes job descriptions, compares them with your CV, then suggests and applies role-specific improvements to increase ATS compatibility.',
  },
  {
    question: 'Does HireTech apply automatically?',
    answer:
      'Yes. You can enable Auto Apply with your own filters and limits so only qualified, high-match roles are submitted.',
  },
  {
    question: 'Can I review applications before submission?',
    answer:
      'Absolutely. You can run in approval mode to review and edit every application before HireTech submits it.',
  },
  {
    question: 'Which industries are supported?',
    answer:
      'HireTech supports technology, finance, consulting, healthcare, operations, marketing, and many adjacent professional tracks.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Yes. You can upgrade from Pro to Elite anytime, and our team helps with a smooth transition.',
  },
];

const AnimatedCounter = ({
  end,
  suffix,
  decimals = 0,
  isInView,
  durationMs = 2200,
}: AnimatedCounterProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setValue(0);
      return;
    }

    let frameId = 0;
    let start = 0;

    const step = (timestamp: number) => {
      if (start === 0) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(end * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [durationMs, end, isInView]);

  return <>{`${value.toFixed(decimals)}${suffix}`}</>;
};

const HeroTrustedCompaniesStrip = () => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  return (
    <MotionBox
      variants={fadeInUp}
      sx={{
        mt: { xs: 4, md: 6 },
        py: 1.25,
        px: { xs: 0.2, md: 0.6 },
        borderTop: '1px solid rgba(21,101,255,0.12)',
        borderBottom: '1px solid rgba(21,101,255,0.12)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(248,251,255,0.45) 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          '&:hover .hero-company-track': {
            animationPlayState: 'paused',
          },
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: { xs: 14, md: 30 },
            zIndex: 2,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
            background: 'linear-gradient(90deg, rgba(248,251,255,1) 0%, rgba(248,251,255,0) 100%)',
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(270deg, rgba(248,251,255,1) 0%, rgba(248,251,255,0) 100%)',
          },
        }}
      >
        <Box
          className="hero-company-track"
          sx={{
            display: 'flex',
            width: 'max-content',
            alignItems: 'center',
            animation: 'heroRailScroll 22s linear infinite',
            '@keyframes heroRailScroll': {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, idx) => {
            const hasLogo = !failedLogos[company.slug];

            return (
              <Stack
                key={`${company.name}-${idx}`}
                direction="row"
                spacing={0.7}
                sx={{
                  whiteSpace: 'nowrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0.84,
                  mr: { xs: 1.4, md: 2.2 },
                  '&:hover': { opacity: 1 },
                }}
              >
                {hasLogo ? (
                  <Box
                    component="img"
                    src={getSimpleIconUrl(company.slug)}
                    alt={`${company.name} logo`}
                    loading="lazy"
                    onError={() => {
                      setFailedLogos((prev) => ({ ...prev, [company.slug]: true }));
                    }}
                    sx={{ width: { xs: 16, md: 18 }, height: { xs: 16, md: 18 }, display: 'block', opacity: 0.88 }}
                  />
                ) : null}
                <Typography sx={{ color: '#3F4F77', fontWeight: 650, fontSize: { xs: '0.76rem', md: '0.8rem' } }}>
                  {company.name}
                </Typography>
              </Stack>
            );
          })}
        </Box>
      </Box>
    </MotionBox>
  );
};

const HeroSection = () => (
  <Box
    sx={{
      minHeight: '94vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(180deg, #F6F9FC 0%, #F6F9FC 100%)',
      pt: { xs: 8, md: 12 },
      pb: { xs: 8, md: 10 },
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: { xs: '-11%', md: '-16%' },
        right: { xs: '-10%', md: '-8%' },
        width: { xs: '102%', md: '84%' },
        height: { xs: '136%', md: '156%' },
        pointerEvents: 'none',
        // Fade ribbons out near the bottom so they pass under the hero background.
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 96%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 96%)',
      }}
    >
      <motion.svg
        viewBox="0 0 1024 860"
        preserveAspectRatio="xMaxYMin meet"
        style={{ width: '100%', height: '100%' }}
        animate={{ x: [0, -54, 0], y: [0, 36, 0], rotate: [0, -1.6, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="heroRibbonMain" x1="300" y1="24" x2="820" y2="820" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#C7DEFF" stopOpacity="0.96" />
            <stop offset="0.26" stopColor="#A8BFFF" stopOpacity="0.93" />
            <stop offset="0.52" stopColor="#EA91E5" stopOpacity="0.9" />
            <stop offset="0.78" stopColor="#FF83B1" stopOpacity="0.92" />
            <stop offset="1" stopColor="#FFA939" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="heroRibbonInner1" x1="408" y1="36" x2="864" y2="826" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#B9CEFF" stopOpacity="0.88" />
            <stop offset="0.58" stopColor="#FF88B6" stopOpacity="0.84" />
            <stop offset="1" stopColor="#FFC36E" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="heroRibbonInner2" x1="516" y1="48" x2="916" y2="830" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#C2D4FF" stopOpacity="0.82" />
            <stop offset="0.52" stopColor="#FFA1C8" stopOpacity="0.8" />
            <stop offset="1" stopColor="#FFD39C" stopOpacity="0.88" />
          </linearGradient>
          <linearGradient id="heroRibbonAccent" x1="626" y1="14" x2="982" y2="834" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFAE3D" stopOpacity="0.94" />
            <stop offset="0.62" stopColor="#FF95BF" stopOpacity="0.86" />
            <stop offset="1" stopColor="#9B86FF" stopOpacity="0.82" />
          </linearGradient>
          <linearGradient id="heroStripeEdge" x1="820" y1="0" x2="930" y2="860" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFD29A" stopOpacity="0.96" />
            <stop offset="0.4" stopColor="#FFC076" stopOpacity="0.94" />
            <stop offset="0.7" stopColor="#FF9E99" stopOpacity="0.8" />
            <stop offset="1" stopColor="#B08DFF" stopOpacity="0.74" />
          </linearGradient>
          <clipPath id="heroRibbonClip">
            <path d="M260 0 C 506 66, 726 286, 984 860 L 808 860 C 782 616, 716 432, 218 20 Z" />
          </clipPath>
          <linearGradient id="heroFlowLines" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(255,255,255,0)" />
            <stop offset="0.45" stopColor="rgba(255,255,255,0)" />
            <stop offset="0.55" stopColor="rgba(255,255,255,0.75)" />
            <stop offset="0.62" stopColor="rgba(255,255,255,0)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <motion.path
          d="M260 0 C 506 66, 726 286, 984 860 L 886 860 C 716 486, 532 270, 218 20 Z"
          fill="url(#heroRibbonMain)"
          animate={{ x: [0, -34, 0], y: [0, 24, 0], rotate: [0, -1.3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M372 0 C 602 88, 778 340, 946 860 L 884 860 C 752 518, 618 314, 340 58 Z"
          fill="url(#heroRibbonInner1)"
          animate={{ x: [0, -28, 0], y: [0, 20, 0], rotate: [0, -1.1, 0] }}
          transition={{ duration: 11.5, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
        />
        <motion.path
          d="M492 0 C 680 122, 832 390, 912 860 L 854 860 C 786 562, 682 376, 456 102 Z"
          fill="url(#heroRibbonInner2)"
          animate={{ x: [0, -22, 0], y: [0, 18, 0], rotate: [0, -0.95, 0] }}
          transition={{ duration: 12.2, repeat: Infinity, ease: 'easeInOut', delay: 0.45 }}
        />
        <motion.path
          d="M606 0 C 770 162, 884 438, 880 860 L 826 860 C 830 608, 758 430, 588 142 Z"
          fill="url(#heroRibbonAccent)"
          animate={{ x: [0, -18, 0], y: [0, 15, 0], rotate: [0, -0.8, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        />
        <motion.path
          d="M704 0 C 822 178, 892 462, 858 860 L 808 860 C 834 620, 786 420, 676 164 Z"
          fill="url(#heroStripeEdge)"
          animate={{ x: [0, -14, 0], y: [0, 12, 0], rotate: [0, -0.65, 0] }}
          transition={{ duration: 13.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
        />

        <g clipPath="url(#heroRibbonClip)" style={{ mixBlendMode: 'screen' }}>
          <motion.rect
            x="120"
            y="-60"
            width="1240"
            height="980"
            fill="url(#heroFlowLines)"
            opacity="0.82"
            animate={{ x: [220, -260, 220] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.rect
            x="90"
            y="-60"
            width="1240"
            height="980"
            fill="url(#heroFlowLines)"
            opacity="0.56"
            animate={{ x: [260, -300, 260] }}
            transition={{ duration: 3.1, repeat: Infinity, ease: 'linear', delay: 0.15 }}
          />
        </g>
      </motion.svg>
    </Box>

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <Chip
                label="AI-Powered Job Application Copilot"
                sx={{
                  mb: 2.8,
                  backgroundColor: 'rgba(21,101,255,0.1)',
                  color: brandColors.primary,
                  fontWeight: 700,
                  border: '1px solid rgba(21,101,255,0.2)',
                  fontSize: '0.8125rem',
                }}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.4rem', md: '4.2rem', lg: '4.7rem' },
                  fontWeight: 800,
                  lineHeight: 1.05,
                  mb: 2,
                  letterSpacing: '-0.03em',
                  color: brandColors.dark,
                }}
              >
                Land Your Dream Job.
                <br />
                <Box
                  component="span"
                  sx={{
                    background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  3× Faster.
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 3.8,
                  color: '#3F5177',
                  maxWidth: 640,
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.7,
                }}
              >
                AI-powered job search automation that tailors your CV, optimizes ATS scores,
                discovers high-match opportunities, auto-applies to jobs, and prepares you for interviews.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2.2 }}>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    minWidth: 220,
                    py: 1.75,
                    background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
                    boxShadow: '0 12px 30px rgba(21,101,255,0.35)',
                  }}
                >
                  Get Started
                </Button>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{ minWidth: 180, py: 1.75 }}
                >
                  Book Demo
                </Button>
              </Stack>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2.1 }}
                sx={{ flexWrap: 'wrap', rowGap: 1.2 }}
              >
                {TRUST_STRIP.map((item) => (
                  <Stack key={item} direction="row" spacing={0.8} sx={{ alignItems: 'center' }}>
                    <CheckCircle sx={{ color: 'success.main', fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: '#55668E', fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </motion.div>

          </MotionBox>
        </Grid>

      </Grid>

      <HeroTrustedCompaniesStrip />
    </Container>
  </Box>
);

const JourneyFlowSection = () => (
  <Box sx={{ py: { xs: 7, md: 9 }, backgroundColor: '#F7FAFF', borderBottom: '1px solid #E2E8F0' }}>
    <Container maxWidth="lg">
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 5 }}
      >
        <Chip label="Journey Flow" sx={sectionChipSx} />
        <Typography variant="h3" sx={{ color: brandColors.dark, mb: 1 }}>
          From Upload To Offer, Measured As A Funnel
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
          Track every milestone from your first CV upload to signed offer — with AI automation and human
          support guiding you at each step.
        </Typography>
      </MotionBox>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Stack spacing={1.2}>
            {JOURNEY_STEPS.map((step, idx) => (
              <MotionBox
                key={`journey-step-${step.title}`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                custom={idx}
                sx={{
                  ...premiumCardCompactSx,
                  border: step.featured
                    ? '1px solid rgba(21,101,255,0.27)'
                    : '1px solid rgba(21,101,255,0.16)',
                }}
              >
                <Stack direction="row" spacing={1.1} sx={{ alignItems: 'center' }}>
                  <Avatar
                    sx={{
                      width: 29,
                      height: 29,
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`,
                    }}
                  >
                    {idx + 1}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, color: brandColors.dark }}>
                      {step.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#5A688F' }}>
                      {step.detail}
                    </Typography>
                  </Box>
                </Stack>
              </MotionBox>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const TrustMetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F7FAFF', borderBottom: '1px solid #E2E8F0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2.2} ref={ref}>
          {TRUST_METRICS.map((stat) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
              <MotionBox
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                sx={{
                  textAlign: 'center',
                  p: { xs: 2, md: 2.5 },
                  borderRadius: 3,
                  border: '1px solid rgba(21,101,255,0.16)',
                  background:
                    'linear-gradient(165deg, rgba(255,255,255,0.92) 0%, rgba(242,247,255,0.9) 100%)',
                  height: '100%',
                  boxShadow: '0 14px 30px rgba(21,101,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: brandColors.primary,
                    fontSize: { xs: '1.7rem', md: '2.25rem' },
                    letterSpacing: '-0.02em',
                  }}
                >
                  <AnimatedCounter
                    end={stat.value}
                    durationMs={2500}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </Typography>
                <Typography variant="body2" sx={{ color: '#718096', mt: 0.8, fontWeight: 600 }}>
                  {stat.label}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const ProblemSection = () => (
  <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#F8FAFF' }}>
    <Container maxWidth="lg">
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 7 }}
      >
        <Chip label="The Problem" sx={sectionChipSx} />
        <Typography variant="h2" sx={{ mb: 1.5 }}>
          Why Modern Job Searching Is Broken
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#718096', maxWidth: 680, mx: 'auto' }}>
          The process is fragmented, time-heavy, and increasingly optimized against candidates.
          HireTech fixes the full application funnel.
        </Typography>
      </MotionBox>

      <Grid container spacing={2.6}>
        {PROBLEMS.map((problem, i) => (
          <MotionGrid
            size={{ xs: 12, sm: 6, lg: 4 }}
            key={problem.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            custom={i}
          >
            <Box sx={premiumCardSx}>
              <Avatar sx={{ ...premiumIconAvatarSx, mb: 2.1 }}>
                {problem.icon}
              </Avatar>
              <Typography variant="h6" sx={{ mb: 1.2, fontWeight: 700, color: brandColors.dark }}>
                {problem.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#5B6991', lineHeight: 1.65 }}>
                {problem.detail}
              </Typography>
            </Box>
          </MotionGrid>
        ))}
      </Grid>
    </Container>
  </Box>
);

const SolutionSection = () => (
  <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#FFFFFF' }}>
    <Container maxWidth="lg">
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 7 }}
      >
        <Chip label="The Solution" sx={sectionChipSx} />
        <Typography variant="h2" sx={{ mb: 1.2 }}>
          Meet Your AI Job Application Copilot
        </Typography>
      </MotionBox>

      <Stack spacing={3.5}>
        {SOLUTIONS.map((item) => {
          return (
            <MotionBox
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                  <Box sx={premiumCardSx}>
                    <Chip
                      size="small"
                      label={`Problem: ${item.problem}`}
                      sx={{
                        mb: 1.4,
                        color: '#3D4F74',
                        backgroundColor: 'rgba(61,79,116,0.08)',
                        fontWeight: 600,
                      }}
                    />
                    <Avatar sx={{ ...premiumIconAvatarSx, width: 46, height: 46, mb: 1.5 }}>
                      {item.icon}
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: brandColors.dark, mb: 1.1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5A688F', lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </MotionBox>
          );
        })}
      </Stack>
    </Container>
  </Box>
);

const HowItWorksSection = () => (
  <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#F8FAFF' }}>
    <Container maxWidth="lg">
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 7 }}
      >
        <Chip label="How It Works" sx={sectionChipSx} />
        <Typography variant="h2" sx={{ mb: 1.3 }}>
          How It Works
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#718096', maxWidth: 640, mx: 'auto' }}>
          Four simple steps from subscription to automated applications — with full control at every stage.
        </Typography>
      </MotionBox>

      <Grid container spacing={2.6}>
        {HOW_IT_WORKS.map((step, index) => (
          <MotionGrid
            key={step.title}
            size={{ xs: 12, sm: 6, md: 3 }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            custom={index}
            sx={{
              position: 'relative',
              '&::after':
                index < HOW_IT_WORKS.length - 1
                  ? {
                      content: '""',
                      position: 'absolute',
                      top: { xs: 'auto', md: '38%' },
                      bottom: { xs: -14, md: 'auto' },
                      left: { xs: '50%', md: 'auto' },
                      right: { xs: 'auto', md: -18 },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: { xs: 2, md: 28 },
                      height: { xs: 20, md: 2 },
                      background: `linear-gradient(${index % 2 === 0 ? '180deg' : '90deg'}, ${brandColors.primary}, ${brandColors.secondary})`,
                      opacity: 0.28,
                      borderRadius: 1,
                      display: { xs: index === HOW_IT_WORKS.length - 1 ? 'none' : 'block', md: 'block' },
                      zIndex: 0,
                    }
                  : {},
            }}
          >
            <Box
              sx={{
                ...premiumCardSx,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={premiumStepBadgeSx}>{index + 1}</Box>
              <Avatar sx={{ ...premiumIconAvatarSx, mb: 2 }}>
                {index === 0 ? <Inventory2Outlined /> : null}
                {index === 1 ? <Psychology /> : null}
                {index === 2 ? <Bolt /> : null}
                {index === 3 ? <Pause /> : null}
              </Avatar>
              <Typography
                variant="overline"
                sx={{
                  color: brandColors.primary,
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  mb: 1,
                  display: 'block',
                }}
              >
                {`Step ${index + 1}`}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.dark, mb: 1.2 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#5B6991', lineHeight: 1.65 }}>
                {step.detail}
              </Typography>
            </Box>
          </MotionGrid>
        ))}
      </Grid>

      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ mt: 6, textAlign: 'center' }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: '#5B6991',
            fontStyle: 'italic',
            maxWidth: 520,
            mx: 'auto',
            px: 2,
            py: 1.5,
            borderRadius: 2,
            border: '1px solid rgba(21,101,255,0.12)',
            backgroundColor: 'rgba(255,255,255,0.7)',
          }}
        >
          We recommend applying to 20–25 relevant jobs per day for better results.
        </Typography>
      </MotionBox>
    </Container>
  </Box>
);

const ProductPreviewSection = () => (
  <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#FFFFFF' }}>
    <Container maxWidth="lg">
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 7 }}
      >
        <Chip label="Our Support Team" sx={sectionChipSx} />
        <Typography variant="h2" sx={{ mb: 1.5 }}>
          A Dedicated Team That Owns Your Outcomes, Not Just AI
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#718096', maxWidth: 820, mx: 'auto' }}>
          Throughout your subscription, you'll be supported end-to-end by an AI Analyst, a Team Lead, and a Sales &
          Feedback Specialist who stay with you from start to finish.
        </Typography>
      </MotionBox>

      <Grid container spacing={2.6}>
        {PRODUCT_PREVIEW.map((item, i) => (
          <MotionGrid
            key={item.title}
            size={{ xs: 12, md: 4 }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            custom={i}
          >
            <Box sx={premiumCardSx}>
              <Avatar sx={{ ...premiumIconAvatarSx, width: 52, height: 52, mb: 2.1 }}>
                {i === 0 ? <BusinessCenter /> : null}
                {i === 1 ? <LockOutlined /> : null}
                {i === 2 ? <HeadsetMic /> : null}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 700, color: brandColors.dark, mb: 1.2 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#5B6991', lineHeight: 1.65 }}>
                {item.detail}
              </Typography>
            </Box>
          </MotionGrid>
        ))}
      </Grid>
    </Container>
  </Box>
);

const TestimonialsSection = () => (
  <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#F8FAFF', overflow: 'hidden' }}>
    <Container maxWidth="lg">
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 7 }}
      >
        <Chip label={`Why ${BRAND.name}`} sx={sectionChipSx} />
        <Typography variant="h2" sx={{ mb: 1.5 }}>
          {`Why ${BRAND.name} Works`}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#718096', maxWidth: 680, mx: 'auto' }}>
          We blend visa expertise, hiring operator insights, and global community support so you can execute with
          confidence.
        </Typography>
      </MotionBox>

      <Grid container spacing={2.6}>
        {TESTIMONIALS.map((item, i) => (
          <MotionGrid
            key={item.name}
            size={{ xs: 12, sm: 6, lg: 3 }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            custom={i}
          >
            <Box sx={premiumCardSx}>
              <Avatar sx={{ ...premiumIconAvatarSx, mb: 2.1 }}>
                {i === 0 ? <SpaOutlined /> : null}
                {i === 1 ? <BusinessCenter /> : null}
                {i === 2 ? <Psychology /> : null}
                {i === 3 ? <ChatBubbleOutlined /> : null}
              </Avatar>
              <Typography variant="h6" sx={{ mb: 1.2, fontWeight: 700, color: brandColors.dark }}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#5B6991', lineHeight: 1.65 }}>
                {item.role}
              </Typography>
            </Box>
          </MotionGrid>
        ))}
      </Grid>
    </Container>
  </Box>
);

const PricingSection = () => (
  <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#FFFFFF' }}>
    <Container maxWidth="lg">
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 6 }}
      >
        <Chip label="Products" sx={sectionChipSx} />
        <Typography variant="h2">Choose Your Plan</Typography>
      </MotionBox>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {PRICING.map((plan) => (
          <Grid size={{ xs: 12, md: 6 }} key={plan.plan}>
            <Box sx={{ ...pricingCardSx(!!plan.highlight), position: 'relative' }}>
              {plan.highlight ? (
                <Chip
                  label="Most Popular"
                  color="primary"
                  size="small"
                  sx={{ position: 'absolute', top: 16, right: 16, fontWeight: 800 }}
                />
              ) : null}

              <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.8, color: brandColors.dark }}>
                {plan.plan}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 0.7, color: brandColors.dark }}>
                {plan.price}
              </Typography>
              <Typography variant="body2" sx={{ color: '#5B6991', mb: 2 }}>
                {plan.subtitle}
              </Typography>

              <Stack spacing={1.1} sx={{ mb: 2.4 }}>
                {plan.features.map((feature) => (
                  <Stack key={feature} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <CheckCircle sx={{ color: 'success.main', fontSize: 18 }} />
                    <Typography variant="body2" sx={{ color: '#4F5E84' }}>
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                component={Link}
                to={plan.to}
                variant={plan.highlight ? 'contained' : 'outlined'}
                fullWidth
                sx={{
                  py: 1.2,
                  fontWeight: 700,
                  background: plan.highlight
                    ? `linear-gradient(135deg, ${brandColors.primary}, ${brandColors.secondary})`
                    : undefined,
                }}
              >
                {plan.cta}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 3,
          borderRadius: 3,
          overflow: 'hidden',
          border: '1px solid rgba(21,101,255,0.16)',
          backgroundColor: '#FFFFFF',
        }}
      >
        {COMPARISON_ROWS.map((row, index) => (
          <Grid
            key={row.feature}
            container
            sx={{
              px: { xs: 1.8, md: 2.5 },
              py: 1.6,
              borderBottom: index === COMPARISON_ROWS.length - 1 ? 'none' : '1px solid #EDF2FF',
              backgroundColor: index === 0 ? '#FAFCFF' : '#FFFFFF',
              alignItems: 'center',
            }}
          >
            <Grid size={{ xs: 8, md: 6 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: brandColors.dark }}>
                {row.feature}
              </Typography>
            </Grid>
            <Grid size={{ xs: 2, md: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: row.pro ? brandColors.primary : '#6C7AA0', fontWeight: 700, textAlign: 'center' }}
              >
                {row.pro ? 'Yes' : 'No'}
              </Typography>
            </Grid>
            <Grid size={{ xs: 2, md: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: row.elite ? brandColors.primary : '#6C7AA0', fontWeight: 700, textAlign: 'center' }}
              >
                {row.elite ? 'Yes' : 'No'}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Container>
  </Box>
);

const FAQSection = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#F8FAFF' }}>
    <Container maxWidth="md">
      <MotionBox
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        sx={{ textAlign: 'center', mb: 4.5 }}
      >
        <Chip label="FAQ" sx={sectionChipSx} />
        <Typography variant="h2">Frequently Asked Questions</Typography>
      </MotionBox>

      <Stack spacing={1.2}>
        {FAQS.map((faq, index) => (
          <MotionBox
            key={faq.question}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            custom={index}
          >
            <Accordion
              disableGutters
              sx={{
                borderRadius: 2,
                border: '1px solid rgba(21,101,255,0.15)',
                overflow: 'hidden',
                '&:before': { display: 'none' },
                background:
                  'linear-gradient(170deg, rgba(255,255,255,0.96) 0%, rgba(246,250,255,0.9) 100%)',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography sx={{ fontWeight: 700, color: brandColors.dark }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: '#5B6991', lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </MotionBox>
        ))}
      </Stack>
    </Container>
  </Box>
);

const FinalCTASection = () => (
  <MotionBox
    variants={scaleIn}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOptions}
    sx={{
      py: { xs: 8, md: 12 },
      background: 'linear-gradient(135deg, #1565FF 0%, #29A3FF 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        top: -120,
        left: -120,
        width: 280,
        height: 280,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.3), rgba(255,255,255,0))',
      }}
    />
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        bottom: -120,
        right: -80,
        width: 260,
        height: 260,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.22), rgba(255,255,255,0))',
      }}
    />
    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
      <Typography variant="h2" sx={{ color: '#ffffff', mb: 2.2 }}>
        Your Next Job Is Waiting For You.
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.78)', mb: 4.5 }}>
        Join thousands of professionals using HireTech Careers to land interviews faster.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{
            background: 'linear-gradient(135deg, #1565FF, #29A3FF)',
            boxShadow: '0 6px 24px rgba(21,101,255,0.4)',
            minWidth: 220,
            py: 1.75,
          }}
        >
          Get Started
        </Button>
        <Button
          component={Link}
          to="/contact"
          variant="outlined"
          size="large"
          sx={{
            borderColor: 'rgba(255,255,255,0.4)',
            color: '#ffffff',
            minWidth: 200,
            py: 1.75,
            '&:hover': {
              borderColor: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          Book Demo
        </Button>
      </Stack>
    </Container>
  </MotionBox>
);

const Home = () => {
  return (
    <>
      <HeroSection />
      <JourneyFlowSection />
      <TrustMetricsSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ProductPreviewSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default Home;
