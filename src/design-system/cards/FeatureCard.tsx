import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import type { ReactNode } from 'react';

export interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        height: '100%',
        border: '1px solid',
        borderColor: 'border.main',
        borderRadius: theme.radius.lg,
        transition: 'all 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'primary.main',
          boxShadow: theme.customShadows.medium,
        },
      })}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Avatar
          sx={{
            width: 44,
            height: 44,
            mb: 2,
            borderRadius: 'md',
            color: 'primary.main',
            backgroundColor: 'rgba(21,101,255,0.10)',
          }}
        >
          {icon}
        </Avatar>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
