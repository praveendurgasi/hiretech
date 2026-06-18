import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

export interface MetricCardProps {
  label: string;
  value: ReactNode;
  trend?: string;
  trendColor?: 'success.main' | 'warning.main' | 'info.main' | 'text.secondary';
}

const MetricCard = ({
  label,
  value,
  trend,
  trendColor = 'success.main',
}: MetricCardProps) => {
  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        border: '1px solid',
        borderColor: 'border.main',
        borderRadius: theme.radius.lg,
      })}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Stack spacing={0.75}>
          <Typography variant="caption" color="text.secondary">{label}</Typography>
          <Typography variant="h4" sx={{ letterSpacing: '-0.02em' }}>{value}</Typography>
          {trend ? <Typography variant="caption" sx={{ color: trendColor }}>{trend}</Typography> : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
