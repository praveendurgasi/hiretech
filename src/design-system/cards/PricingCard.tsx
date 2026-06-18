import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

export interface PricingCardProps {
  planName: string;
  price: ReactNode;
  period?: string;
  description?: string;
  badge?: string;
  highlighted?: boolean;
  action?: ReactNode;
  features?: string[];
}

const PricingCard = ({
  planName,
  price,
  period,
  description,
  badge,
  highlighted,
  action,
  features,
}: PricingCardProps) => {
  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        borderRadius: theme.radius.xl,
        border: '1px solid',
        borderColor: highlighted ? 'primary.main' : 'border.main',
        background: highlighted
          ? 'linear-gradient(180deg, rgba(21,101,255,0.05) 0%, #FFFFFF 100%)'
          : '#FFFFFF',
        boxShadow: highlighted ? theme.customShadows.glow : 'none',
        height: '100%',
      })}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 }, height: '100%' }}>
        <Stack spacing={2.25} sx={{ height: '100%' }}>
          <Box>
            {badge ? <Chip size="small" label={badge} sx={{ mb: 1 }} color="primary" /> : null}
            <Typography variant="overline" color="primary.main">{planName}</Typography>
            <Typography variant="h3" sx={{ mt: 0.5 }}>
              {price}
              {period ? (
                <Typography component="span" variant="body2" color="text.secondary">
                  {` ${period}`}
                </Typography>
              ) : null}
            </Typography>
            {description ? <Typography variant="body2" color="text.secondary">{description}</Typography> : null}
          </Box>
          {action}
          {features?.length ? (
            <Stack spacing={1} sx={{ mt: 'auto' }}>
              {features.map((feature) => (
                <Typography key={feature} variant="body2" color="text.secondary">• {feature}</Typography>
              ))}
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
