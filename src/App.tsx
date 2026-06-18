import { ThemeProvider, CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { MotionConfig } from 'framer-motion';
import theme from './theme';
import AppRouter from './routes';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <MotionConfig reducedMotion="never">
          <CssBaseline />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.9rem',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(5,11,46,0.10)',
              },
              success: {
                iconTheme: { primary: '#1565FF', secondary: '#fff' },
              },
            }}
          />
          <AppRouter />
        </MotionConfig>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
