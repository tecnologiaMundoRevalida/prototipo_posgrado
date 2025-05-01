import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#31677B', // Turquesa Atlântico
      light: '#4787A0',
      dark: '#264D5D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#EAC86E', // Dourado Areia
      light: '#FFD88A',
      dark: '#BA9C50',
      contrastText: '#1F272A',
    },
    warning: {
      main: '#FFD14C', // Amarelo Neonatal
      light: '#FFE07F',
      dark: '#E3B52D',
      contrastText: '#1F272A',
    },
    success: {
      main: '#3EE6B9', // Verde Scrub
      light: '#69FFCF',
      dark: '#31B695',
      contrastText: '#1F272A',
    },
    error: {
      main: '#F44336',
      light: '#E57373',
      dark: '#D32F2F',
    },
    text: {
      primary: '#1F272A', // Cinza Radio
      secondary: '#4D5559',
    },
    background: {
      default: '#f5f5f7',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme; 