import { BRAND, PRICING_PLANS } from '../constants';

const WHATSAPP_NUMBER = BRAND.phone.replace(/\D/g, '');

const formatPlanLabel = (planId?: string) => {
  if (!planId) return null;
  const plan = PRICING_PLANS.find((p) => p.id === planId);
  return plan ? `${plan.name} ($${plan.price}/month)` : planId.toUpperCase();
};

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const openWhatsApp = (message: string) => {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
};

interface SignupLeadDetails {
  name: string;
  email: string;
  whatsapp: string;
  plan?: string;
}

interface ContactLeadDetails {
  name: string;
  email: string;
  whatsapp: string;
  plan?: string;
  role?: string;
  message: string;
}

export const buildSignupWhatsAppMessage = ({ name, email, whatsapp, plan }: SignupLeadDetails) => {
  const planLabel = formatPlanLabel(plan);
  return [
    `Hi ${BRAND.name} team,`,
    '',
    "I'd like to get started. Here are my details:",
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `WhatsApp: ${whatsapp}`,
    planLabel ? `Selected plan: ${planLabel}` : null,
    '',
    'Sent via website get-started form',
  ]
    .filter(Boolean)
    .join('\n');
};

export const buildPlanInterestWhatsAppMessage = (planId: string, planName: string) =>
  [
    `Hi ${BRAND.name} team,`,
    '',
    `I'm interested in the ${planName} plan (${planId.toUpperCase()}).`,
    'Please share next steps to get started.',
    '',
    'Sent via website pricing page',
  ].join('\n');

export const buildContactWhatsAppMessage = ({
  name,
  email,
  whatsapp,
  plan,
  role,
  message,
}: ContactLeadDetails) => {
  const planLabel = formatPlanLabel(plan);
  return [
    `Hi ${BRAND.name} team,`,
    '',
    'New message from the contact form:',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `WhatsApp: ${whatsapp}`,
    planLabel ? `Selected plan: ${planLabel}` : null,
    role ? `Role: ${role}` : null,
    '',
    'Message:',
    message,
    '',
    'Sent via website contact form',
  ]
    .filter(Boolean)
    .join('\n');
};
