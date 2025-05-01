import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  useTheme
} from '@mui/material';
import { Grid } from '../components/DisableTypeChecking';
import Header from '../components/Header';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Dashboard: React.FC = () => {
  const theme = useTheme();

  // Dados fictícios para os gráficos
  const pieData = [
    { name: 'Português', value: 45 },
    { name: 'Cultura', value: 30 },
    { name: 'Médica', value: 25 }
  ];

  const barData = [
    { name: 'Jan', aulas: 10, estudantes: 35 },
    { name: 'Fev', aulas: 15, estudantes: 42 },
    { name: 'Mar', aulas: 20, estudantes: 48 },
    { name: 'Abr', aulas: 25, estudantes: 50 },
    { name: 'Mai', aulas: 22, estudantes: 45 },
    { name: 'Jun', aulas: 30, estudantes: 55 }
  ];

  const COLORS = [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.error.main];

  const statCards = [
    {
      title: 'Total de Agendamentos',
      value: '248',
      icon: <EventAvailableIcon fontSize="large" color="primary" />,
      description: 'Este mês'
    },
    {
      title: 'Aulas Concluídas',
      value: '189',
      icon: <AssessmentIcon fontSize="large" color="secondary" />,
      description: '76% de conclusão'
    },
    {
      title: 'Estudantes Ativos',
      value: '65',
      icon: <PeopleIcon fontSize="large" color="success" />,
      description: '+12% que o mês anterior'
    },
    {
      title: 'Próximas Aulas',
      value: '18',
      icon: <CalendarMonthIcon fontSize="large" color="error" />,
      description: 'Para os próximos 7 dias'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
          Dashboard
        </Typography>
        
        {/* Cards de estatísticas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {statCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography color="textSecondary" gutterBottom>
                      {card.title}
                    </Typography>
                    {card.icon}
                  </Box>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                    {card.value}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Gráficos */}
        <Grid container spacing={3}>
          {/* Gráfico de barras */}
          <Grid item xs={12} md={8}>
            <Paper 
              sx={{ 
                p: 3, 
                display: 'flex', 
                flexDirection: 'column', 
                height: 350,
                boxShadow: 3
              }}
            >
              <Typography variant="h6" component="h2" gutterBottom>
                Progresso Mensal
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="aulas" fill={theme.palette.primary.main} />
                  <Bar dataKey="estudantes" fill={theme.palette.secondary.main} />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Gráfico de pizza */}
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 3, 
                display: 'flex', 
                flexDirection: 'column', 
                height: 350,
                boxShadow: 3
              }}
            >
              <Typography variant="h6" component="h2" gutterBottom>
                Distribuição de Aulas
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Atividades recentes */}
          <Grid item xs={12}>
            <Paper 
              sx={{ 
                p: 3,
                boxShadow: 3,
                mt: 2
              }}
            >
              <Typography variant="h6" component="h2" gutterBottom>
                Atividades Recentes
              </Typography>
              <Box sx={{ mt: 2 }}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Box key={item} sx={{ 
                    p: 2, 
                    mb: 1, 
                    bgcolor: '#f9f9f9', 
                    borderRadius: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Box>
                      <Typography variant="body1">
                        {item % 2 === 0 ? 'Aula de Português Médico' : 'Aula de Cultura Brasileira'}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {`Agendado para ${item} de Junho, 2023 • 10:00 - 11:30`}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ 
                      bgcolor: item % 2 === 0 ? 'success.light' : 'info.light',
                      p: 1,
                      borderRadius: 1,
                      color: item % 2 === 0 ? 'success.dark' : 'info.dark'
                    }}>
                      {item % 2 === 0 ? 'Confirmado' : 'Pendente'}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard; 