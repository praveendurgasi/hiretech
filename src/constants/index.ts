export const BRAND = {
  name: 'HireTech Careers',
  tagline: 'Land Your Dream Job. 3× Faster.',
  description:
    'Your AI job application copilot — tailored resumes, ATS optimization, and automated applications backed by a dedicated human support team.',
  url: 'https://hiretechcareers.com',
  email: 'hiretech.ai@outlook.com',
  supportEmail: 'hiretech.ai@outlook.com',
  phone: '+91 6305063870',
  address: 'Madhapur, Hyderabad, India, 500081',
};

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/hiretechcareers',
  linkedin: 'https://linkedin.com/company/hiretechcareers',
  github: 'https://github.com/hiretechcareers',
};

/** Footer credit — update name and URL for your portfolio or studio */
export const DEVELOPER_CREDIT = {
  label: 'Designed & developed by',
  name: 'Velvora Studio',
  url: 'https://www.velvorastudio.in/',
};

export const STATS = [
  { value: 18, suffix: 'K+', label: 'Jobs Landed' },
  { value: 94, suffix: '%', label: 'ATS Pass Rate' },
  { value: 3.2, suffix: '×', label: 'More Interviews', decimals: 1 },
  { value: 11, suffix: ' Days', label: 'Avg. Time to Offer' },
];

export const FEATURES = [
  {
    icon: 'FindInPage',
    title: 'ATS Resume Optimization',
    description:
      'Every resume is rewritten around role-critical keywords and recruiter ranking signals so you pass automated screening.',
  },
  {
    icon: 'AutoAwesome',
    title: 'Automated Job Discovery',
    description:
      'Your copilot scans thousands of postings and surfaces high-fit roles aligned to your goals, visa status, and experience.',
  },
  {
    icon: 'RocketLaunch',
    title: 'Smart Auto Apply',
    description:
      'Submit tailored, personalized applications at scale — up to 25 or 45 quality jobs per day with human quality checks.',
  },
  {
    icon: 'Psychology',
    title: 'Interview Prep Coach',
    description:
      'Get role-specific interview questions, talking points, and recruiter message suggestions before every conversation.',
  },
  {
    icon: 'Insights',
    title: 'Application Analytics',
    description:
      'Track conversion by role, resume variant, and company segment to see exactly what is driving callbacks and offers.',
  },
  {
    icon: 'HeadsetMic',
    title: 'Dedicated Human Support',
    description:
      'An AI Analyst, Team Lead, and Feedback Specialist stay with you end-to-end — not just software, a real team behind you.',
  },
];

const SHARED_PRICING_FEATURES = [
  '1 AI agent + 1 human supervisor',
  'Resume tailored for each job',
  'ATS-matched resumes for every role',
  'No ghost jobs (verified postings only)',
  'AI-assisted applications with quality checks',
  'Continuous optimization from responses',
  'Daily progress reports',
  'Resume shared after every application',
  'Dedicated team with direct communication',
] as const;

export const PRICING_PLANS = [
  {
    id: 'pro',
    name: 'Pro',
    price: 149,
    period: '/month',
    description: 'For serious job seekers · 25 days',
    features: [
      ...SHARED_PRICING_FEATURES.slice(0, 3),
      'Apply to up to 25 quality jobs per day',
      ...SHARED_PRICING_FEATURES.slice(3),
    ],
    cta: 'Choose Pro',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 229,
    period: '/month',
    description: 'For accelerated outcomes · 45 days',
    features: [
      ...SHARED_PRICING_FEATURES.slice(0, 3),
      'Apply to up to 45 quality jobs per day',
      ...SHARED_PRICING_FEATURES.slice(3),
    ],
    cta: 'Choose Elite',
    highlighted: false,
  },
];

export const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Products', href: '/products' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Roadmap', href: '/roadmap' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Security', href: '/security' },
  ],
};
