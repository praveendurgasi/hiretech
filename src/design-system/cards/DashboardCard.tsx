import Card, { type CardProps } from '@mui/material/Card';

export type DashboardCardProps = CardProps;

const DashboardCard = ({ sx, ...props }: DashboardCardProps) => {
  return (
    <Card
      elevation={0}
      sx={[
        (theme) => ({
          borderRadius: theme.radius.lg,
          border: '1px solid',
          borderColor: 'border.main',
          backgroundColor: 'surfaceElevated.main',
          boxShadow: theme.customShadows.soft,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default DashboardCard;
