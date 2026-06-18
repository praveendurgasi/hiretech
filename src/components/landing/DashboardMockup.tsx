import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { ScaleIn, SlideUp, DashboardCard, GlassCard } from '../../design-system';
import HeroMetricGrid, { type HeroMetricItem } from './HeroMetricGrid';

const metricItems: HeroMetricItem[] = [
  { label: 'Applications Sent', value: '127', trend: '+19 this week', trendColor: 'success.main' },
  { label: 'ATS Score', value: '94%', trend: '+6 points', trendColor: 'info.main' },
  { label: 'Interviews Scheduled', value: '12', trend: '+4 this week', trendColor: 'success.main' },
  { label: 'Offer Received', value: '1', trend: 'Pipeline active', trendColor: 'warning.main' },
];

const analyticsSeries = [28, 34, 30, 42, 48, 44, 62, 58, 76, 84, 80, 92];

const DashboardMockup = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative' }}>
      <ScaleIn>
        <GlassCard
          sx={{
            p: { xs: 1.5, sm: 2 },
            borderRadius: theme.radius['2xl'],
            boxShadow: theme.customShadows.glow,
          }}
        >
          <DashboardCard
            sx={{
              p: { xs: 2, md: 2.5 },
              borderRadius: theme.radius.xl,
              transition: 'transform 220ms ease, box-shadow 220ms ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: theme.customShadows.medium,
              },
            }}
          >
            <Stack spacing={2.25}>
              <Stack
                direction="row"
                sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}
              >
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    HireTech Analytics
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Candidate Automation Dashboard
                  </Typography>
                </Box>
                <Chip
                  label="Live"
                  size="small"
                  color="success"
                  sx={{ fontWeight: 600, borderRadius: theme.radius.sm }}
                />
              </Stack>

              <HeroMetricGrid items={metricItems} />

              <SlideUp>
                <Box>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1 }}
                  >
                    <Typography variant="subtitle2">Application Pipeline</Typography>
                    <Typography variant="caption" color="text.secondary">
                      Weekly completion
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={82}
                    sx={{
                      height: 10,
                      borderRadius: 999,
                      backgroundColor: alpha(theme.palette.primary.main, 0.12),
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 999,
                        background: 'linear-gradient(90deg, #1565FF 0%, #29A3FF 100%)',
                      },
                    }}
                    aria-label="Application pipeline completion"
                  />
                </Box>
              </SlideUp>

              <Divider />

              <Stack spacing={1.1}>
                <Typography variant="subtitle2">Activity Feed</Typography>
                <Stack spacing={1}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      CV tailored for Senior Product Designer
                    </Typography>
                    <Chip label="Done" size="small" color="success" />
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      ATS optimization for Frontend Engineer role
                    </Typography>
                    <Chip label="94%" size="small" color="info" />
                  </Stack>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Interview prep kit generated
                    </Typography>
                    <Chip label="Ready" size="small" color="warning" />
                  </Stack>
                </Stack>
              </Stack>

              <Box>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1.25 }}>
                  <Typography variant="subtitle2">Success Trend</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Last 12 days
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.7} sx={{ alignItems: 'flex-end', height: 84 }}>
                  {analyticsSeries.map((point, idx) => (
                    <Box
                      key={`${point}-${idx}`}
                      sx={{
                        width: '100%',
                        maxWidth: 20,
                        height: `${point}%`,
                        borderRadius: 1,
                        background:
                          idx > analyticsSeries.length - 4
                            ? 'linear-gradient(180deg, #29A3FF 0%, #1565FF 100%)'
                            : alpha(theme.palette.primary.main, 0.35),
                        transition: 'height 280ms ease',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </DashboardCard>
        </GlassCard>
      </ScaleIn>
    </Box>
  );
};

export default DashboardMockup;
