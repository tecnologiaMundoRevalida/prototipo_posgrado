import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR as ptBRLocale } from 'date-fns/locale';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/global.css';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import AlunoDashboard from './pages/aluno/Dashboard';
import AlunoAgendar from './pages/aluno/Agendar';
import ProfessorDashboard from './pages/professor/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import Layout from './components/Layout';

// Criando um tema personalizado para o PosgradoMed
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul principal
      dark: '#0d47a1',
      light: '#42a5f5',
    },
    secondary: {
      main: '#f57c00', // Laranja
      dark: '#e65100',
      light: '#ff9800',
    },
    success: {
      main: '#388e3c',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
}, ptBR); // Adicionando localização em português do Brasil

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBRLocale}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/agendar" element={<Schedule />} />
              <Route path="/aluno" element={<AlunoDashboard />} />
              <Route path="/aluno/agendar" element={<AlunoAgendar />} />
              <Route path="/professor" element={<ProfessorDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </Layout>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
