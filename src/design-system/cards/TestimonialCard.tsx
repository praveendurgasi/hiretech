import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  initials?: string;
}

const TestimonialCard = ({ quote, name, role, initials }: TestimonialCardProps) => {
  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        borderRadius: theme.radius.lg,
        border: '1px solid',
        borderColor: 'border.main',
      })}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Stack spacing={2.5}>
          <Typography variant="body1" sx={{ color: 'text.primary', fontStyle: 'italic' }}>
            “{quote}”
          </Typography>
          <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
            <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main' }}>
              {initials ?? name.slice(0, 1)}
            </Avatar>
            <Stack spacing={0.2}>
              <Typography variant="subtitle2">{name}</Typography>
              {role ? <Typography variant="caption" color="text.secondary">{role}</Typography> : null}
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
