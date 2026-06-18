export const BRAND = {
  name: 'HireTech Careers',
  tagline: 'Hire Smarter. Scale Faster.',
  description:
    'The AI-powered hiring platform that connects top tech talent with the world\'s fastest-growing companies.',
  url: 'https://hiretechcareers.com',
  email: 'hello@hiretechcareers.com',
  supportEmail: 'support@hiretechcareers.com',
};

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/hiretechcareers',
  linkedin: 'https://linkedin.com/company/hiretechcareers',
  github: 'https://github.com/hiretechcareers',
};

export const STATS = [
  { value: 50000, suffix: '+', label: 'Active Candidates' },
  { value: 2000, suffix: '+', label: 'Hiring Companies' },
  { value: 98, suffix: '%', label: 'Placement Rate' },
  { value: 4.9, suffix: '/5', label: 'Average Rating', decimals: 1 },
];

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 49,
    period: '/month',
    description: 'Perfect for small teams just getting started.',
    features: [
      'Up to 5 active job posts',
      'AI candidate matching',
      'Basic analytics',
      'Email support',
      'ATS integrations',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 149,
    period: '/month',
    description: 'Scale your hiring with advanced tools.',
    features: [
      'Unlimited job posts',
      'Advanced AI matching',
      'Full analytics dashboard',
      'Priority support',
      'Custom career page',
      'Team collaboration',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 399,
    period: '/month',
    description: 'Built for high-volume hiring teams.',
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Custom integrations',
      'SSO & advanced security',
      'SLA guarantee',
      'Onboarding & training',
      'White-label options',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export const FEATURES = [
  {
    icon: 'Cpu',
    title: 'AI-Powered Matching',
    description:
      'Our proprietary algorithm surfaces the top 1% of candidates for every role, saving hours of manual screening.',
  },
  {
    icon: 'BarChart3',
    title: 'Real-Time Analytics',
    description:
      'Track pipeline health, time-to-hire, and diversity metrics with beautiful, actionable dashboards.',
  },
  {
    icon: 'Users',
    title: 'Collaborative Hiring',
    description:
      'Keep your entire team aligned with shared scorecards, interview kits, and decision workflows.',
  },
  {
    icon: 'Zap',
    title: 'Instant Integrations',
    description:
      'Connect seamlessly with Slack, Greenhouse, Lever, Workday, and 100+ tools your team already loves.',
  },
  {
    icon: 'Shield',
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified with SSO, RBAC, and audit logs so your data stays protected.',
  },
  {
    icon: 'Globe',
    title: 'Global Talent Pool',
    description:
      'Access verified candidates from 180+ countries with built-in visa sponsorship and relocation filters.',
  },
];

export const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
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
