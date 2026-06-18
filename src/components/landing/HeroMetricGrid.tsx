import Grid from '@mui/material/Grid';
import type { MetricCardProps } from '../../design-system';
import { MetricCard } from '../../design-system';

export interface HeroMetricItem extends Pick<MetricCardProps, 'label' | 'value'> {
  trend?: MetricCardProps['trend'];
  trendColor?: MetricCardProps['trendColor'];
}

export interface HeroMetricGridProps {
  items: HeroMetricItem[];
}

const HeroMetricGrid = ({ items }: HeroMetricGridProps) => {
  return (
    <Grid container spacing={1.5}>
      {items.map((item) => (
        <Grid key={item.label} size={{ xs: 6, sm: 3 }}>
          <MetricCard
            label={item.label}
            value={item.value}
            trend={item.trend}
            trendColor={item.trendColor}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HeroMetricGrid;
