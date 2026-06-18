import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Chip,
  Stack,
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  TrendingUp,
  People,
  Work,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { brandColors } from '../../theme';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const MotionBox = motion(Box);

const STATS = [
  { label: 'Active Jobs', value: '24', icon: <Work />, change: '+3 this week', color: brandColors.primary },
  { label: 'Total Applicants', value: '1,284', icon: <People />, change: '+128 this week', color: '#10B981' },
  { label: 'Interviews Scheduled', value: '47', icon: <CheckCircle />, change: '+12 today', color: '#F59E0B' },
  { label: 'Hires This Month', value: '9', icon: <TrendingUp />, change: '↑ 50% vs last month', color: '#8B5CF6' },
];

const RECENT_CANDIDATES = [
  { name: 'Alex Morgan', role: 'Senior Frontend Engineer', score: 94, initials: 'AM', status: 'Interview' },
  { name: 'Priya Nair', role: 'Product Designer', score: 91, initials: 'PN', status: 'Screening' },
  { name: 'James Lee', role: 'Backend Engineer', score: 88, initials: 'JL', status: 'Offer' },
  { name: 'Sofia Diaz', role: 'DevOps Engineer', score: 85, initials: 'SD', status: 'Interview' },
  { name: 'Ryan Kim', role: 'ML Engineer', score: 82, initials: 'RK', status: 'Applied' },
];

const STATUS_COLORS: Record<string, string> = {
  Applied: '#718096',
  Screening: '#F59E0B',
  Interview: '#1565FF',
  Offer: '#10B981',
};

const Dashboard = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#F1F5F9', p: { xs: 2, md: 4 } }}>
      <Container maxWidth="xl" disableGutters>
        {/* Header */}
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          sx={{ mb: 4 }}
        >
          <motion.div variants={fadeInUp}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
              Dashboard
            </Typography>
            <Typography variant="body2" sx={{ color: '#718096' }}>
              Welcome back! Here's what's happening with your hiring pipeline.
            </Typography>
          </motion.div>
        </MotionBox>

        {/* Stats cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {STATS.map((stat, i) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={stat.label}>
              <MotionBox
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #E2E8F0',
                    backgroundColor: '#fff',
                  }}
                >
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#718096', fontWeight: 500 }}>
                        {stat.label}
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 700, my: 0.5 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: stat.color, fontWeight: 500 }}>
                        {stat.change}
                      </Typography>
                    </Box>
                    <Avatar
                      sx={{
                        width: 44,
                        height: 44,
                        backgroundColor: `${stat.color}18`,
                        color: stat.color,
                        borderRadius: 2,
                      }}
                    >
                      {stat.icon}
                    </Avatar>
                  </Stack>
                </Paper>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        {/* Main content */}
        <Grid container spacing={3}>
          {/* Candidates table */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <MotionBox variants={fadeInUp} initial="hidden" animate="visible" custom={4}>
              <Paper
                elevation={0}
                sx={{ p: 3, borderRadius: 3, border: '1px solid #E2E8F0', backgroundColor: '#fff' }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Top Candidates
                </Typography>
                <Stack spacing={0}>
                  {RECENT_CANDIDATES.map((c, i) => (
                    <Box key={c.name}>
                      {i > 0 && <Divider sx={{ my: 1.5 }} />}
                      <Stack direction="row" sx={{ alignItems: 'center' }} spacing={2}>
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            background: 'linear-gradient(135deg, #1565FF, #29A3FF)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                          }}
                        >
                          {c.initials}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.25 }}>
                            {c.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#718096' }}>
                            {c.role}
                          </Typography>
                        </Box>
                        <Box sx={{ width: 100, display: { xs: 'none', sm: 'block' } }}>
                          <Typography variant="caption" sx={{ color: '#718096', mb: 0.5, display: 'block' }}>
                            AI Score: {c.score}%
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={c.score}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: '#EEF2FF',
                              '& .MuiLinearProgress-bar': {
                                background: 'linear-gradient(90deg, #1565FF, #29A3FF)',
                                borderRadius: 3,
                              },
                            }}
                          />
                        </Box>
                        <Chip
                          label={c.status}
                          size="small"
                          sx={{
                            backgroundColor: `${STATUS_COLORS[c.status]}18`,
                            color: STATUS_COLORS[c.status],
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            border: `1px solid ${STATUS_COLORS[c.status]}30`,
                          }}
                        />
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </MotionBox>
          </Grid>

          {/* Pipeline overview */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <MotionBox variants={fadeInUp} initial="hidden" animate="visible" custom={5}>
              <Paper
                elevation={0}
                sx={{ p: 3, borderRadius: 3, border: '1px solid #E2E8F0', backgroundColor: '#fff' }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Pipeline Overview
                </Typography>
                <Stack spacing={2.5}>
                  {[
                    { stage: 'Applied', count: 284, color: '#718096' },
                    { stage: 'Screening', count: 96, color: '#F59E0B' },
                    { stage: 'Interview', count: 47, color: brandColors.primary },
                    { stage: 'Offer', count: 12, color: '#10B981' },
                    { stage: 'Hired', count: 9, color: '#8B5CF6' },
                  ].map((item) => (
                    <Box key={item.stage}>
                      <Stack direction="row" sx={{ justifyContent: 'space-between', mb: 0.75 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {item.stage}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#718096' }}>
                          {item.count}
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={(item.count / 284) * 100}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: '#F1F5F9',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: item.color,
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
