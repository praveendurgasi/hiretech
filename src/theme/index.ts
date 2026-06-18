import { createTheme, responsiveFontSizes } from '@mui/material/styles';

interface SemanticColorToken {
  main: string;
  subtle?: string;
  contrastText?: string;
}

interface SpacingTokens {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
}

interface RadiusTokens {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

interface ShadowTokens {
  soft: string;
  medium: string;
  large: string;
  glow: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    brand: {
      primary: string;
      secondary: string;
      dark: string;
    };
    surface: SemanticColorToken;
    surfaceElevated: SemanticColorToken;
    border: SemanticColorToken;
  }
  interface PaletteOptions {
    brand?: {
      primary?: string;
      secondary?: string;
      dark?: string;
    };
    surface?: SemanticColorToken;
    surfaceElevated?: SemanticColorToken;
    border?: SemanticColorToken;
  }
  interface Theme {
    spacingTokens: SpacingTokens;
    radius: RadiusTokens;
    customShadows: ShadowTokens;
  }
  interface ThemeOptions {
    spacingTokens?: Partial<SpacingTokens>;
    radius?: Partial<RadiusTokens>;
    customShadows?: Partial<ShadowTokens>;
  }
}

export const brandColors = {
  primary: '#1565FF',
  secondary: '#29A3FF',
  dark: '#050B2E',
  background: '#F8FAFC',
  white: '#FFFFFF',
};

let theme = createTheme({
  spacingTokens: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },

  radius: {
    sm: 6,
    md: 10,
    lg: 16,
    xl: 20,
    '2xl': 28,
  },

  customShadows: {
    soft: '0 8px 24px rgba(5, 11, 46, 0.08)',
    medium: '0 12px 36px rgba(5, 11, 46, 0.12)',
    large: '0 24px 64px rgba(5, 11, 46, 0.14)',
    glow: '0 0 0 1px rgba(21,101,255,0.14), 0 16px 42px rgba(21,101,255,0.22)',
  },

  palette: {
    mode: 'light',
    primary: {
      main: brandColors.primary,
      light: '#4D85FF',
      dark: '#0040CC',
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.secondary,
      light: '#63C4FF',
      dark: '#007ACC',
      contrastText: brandColors.white,
    },
    background: {
      default: brandColors.background,
      paper: brandColors.white,
    },
    text: {
      primary: brandColors.dark,
      secondary: '#4A5568',
    },
    divider: '#E2E8F0',
    brand: {
      primary: brandColors.primary,
      secondary: brandColors.secondary,
      dark: brandColors.dark,
    },
    surface: {
      main: '#F8FAFC',
      subtle: '#EEF2F7',
      contrastText: brandColors.dark,
    },
    surfaceElevated: {
      main: '#FFFFFF',
      subtle: '#F9FBFF',
      contrastText: brandColors.dark,
    },
    border: {
      main: '#E2E8F0',
      subtle: '#EDF2F7',
      contrastText: brandColors.dark,
    },
    success: {
      main: '#12B76A',
      light: '#EAFBF3',
      dark: '#039855',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F59E0B',
      light: '#FFFAEB',
      dark: '#B54708',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#0EA5E9',
      light: '#E8F7FE',
      dark: '#0369A1',
      contrastText: '#FFFFFF',
    },
  },

  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      color: brandColors.dark,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      color: brandColors.dark,
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      color: brandColors.dark,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
      color: brandColors.dark,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: brandColors.dark,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
      color: brandColors.dark,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#4A5568',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#718096',
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      color: '#718096',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },

  shape: {
    borderRadius: 12,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  spacing: 8,

  shadows: [
    'none',
    '0px 1px 3px rgba(5, 11, 46, 0.08)',
    '0px 2px 6px rgba(5, 11, 46, 0.10)',
    '0px 4px 12px rgba(5, 11, 46, 0.10)',
    '0px 6px 16px rgba(5, 11, 46, 0.12)',
    '0px 8px 24px rgba(5, 11, 46, 0.12)',
    '0px 12px 32px rgba(5, 11, 46, 0.14)',
    '0px 16px 40px rgba(5, 11, 46, 0.14)',
    '0px 20px 48px rgba(5, 11, 46, 0.16)',
    '0px 24px 56px rgba(5, 11, 46, 0.16)',
    '0px 28px 64px rgba(5, 11, 46, 0.18)',
    '0px 32px 72px rgba(5, 11, 46, 0.18)',
    '0px 36px 80px rgba(5, 11, 46, 0.20)',
    '0px 40px 88px rgba(5, 11, 46, 0.20)',
    '0px 44px 96px rgba(5, 11, 46, 0.22)',
    '0px 48px 104px rgba(5, 11, 46, 0.22)',
    '0px 52px 112px rgba(5, 11, 46, 0.24)',
    '0px 56px 120px rgba(5, 11, 46, 0.24)',
    '0px 60px 128px rgba(5, 11, 46, 0.26)',
    '0px 64px 136px rgba(5, 11, 46, 0.26)',
    '0px 68px 144px rgba(5, 11, 46, 0.28)',
    '0px 72px 152px rgba(5, 11, 46, 0.28)',
    '0px 76px 160px rgba(5, 11, 46, 0.30)',
    '0px 80px 168px rgba(5, 11, 46, 0.30)',
    '0px 84px 176px rgba(5, 11, 46, 0.32)',
  ],

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background-color: #F8FAFC;
          color: #050B2E;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #F8FAFC;
        }
        ::-webkit-scrollbar-thumb {
          background: #CBD5E0;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #A0AEC0;
        }
      `,
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
          fontSize: '0.9375rem',
          textTransform: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
          '&.MuiButton-containedPrimary': {
            background: `linear-gradient(135deg, #1565FF 0%, #29A3FF 100%)`,
            boxShadow: '0 4px 15px rgba(21, 101, 255, 0.35)',
            '&:hover': {
              background: `linear-gradient(135deg, #0040CC 0%, #1565FF 100%)`,
              boxShadow: '0 6px 20px rgba(21, 101, 255, 0.45)',
            },
          },
          '&.MuiButton-outlinedPrimary': {
            borderColor: brandColors.primary,
            color: brandColors.primary,
            '&:hover': {
              backgroundColor: 'rgba(21, 101, 255, 0.06)',
              borderColor: brandColors.primary,
            },
          },
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1rem',
          borderRadius: 10,
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.875rem',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid #E2E8F0',
          boxShadow: '0px 2px 8px rgba(5, 11, 46, 0.06)',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          '&:hover': {
            boxShadow: '0px 8px 30px rgba(5, 11, 46, 0.12)',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: brandColors.primary,
            },
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(248, 250, 252, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: 'none',
          color: brandColors.dark,
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E2E8F0',
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: brandColors.dark,
          borderRadius: 6,
          fontSize: '0.75rem',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
