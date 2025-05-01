import React from 'react';
import { Paper, Typography, Box, CircularProgress, useTheme } from '@mui/material';
import { Grid } from './DisableTypeChecking';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registre os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

interface DashboardStatsProps {
  totalClasses: number;
  completedClasses: number;
  upcomingClasses: number;
  canceledClasses: number;
  monthlyStats: {
    month: string;
    count: number;
  }[];
  classDistribution: {
    label: string;
    value: number;
    color: string;
  }[];
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  totalClasses,
  completedClasses,
  upcomingClasses,
  canceledClasses,
  monthlyStats,
  classDistribution,
}) => {
  const theme = useTheme();

  // Taxa de conclusão
  const completionRate = totalClasses > 0 ? Math.round((completedClasses / totalClasses) * 100) : 0;

  const statsItems = [
    { label: 'Total de Aulas', value: totalClasses, color: theme.palette.primary.main },
    { label: 'Aulas Concluídas', value: completedClasses, color: theme.palette.success.main },
    { label: 'Aulas Agendadas', value: upcomingClasses, color: theme.palette.secondary.main },
    { label: 'Aulas Canceladas', value: canceledClasses, color: theme.palette.error.main },
  ];

  // Dados para o gráfico de barras
  const barData = {
    labels: monthlyStats.map(item => item.month),
    datasets: [
      {
        label: 'Aulas por Mês',
        data: monthlyStats.map(item => item.count),
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
        borderWidth: 1,
      },
    ],
  };

  // Dados para o gráfico de rosca
  const doughnutData = {
    labels: classDistribution.map(item => item.label),
    datasets: [
      {
        data: classDistribution.map(item => item.value),
        backgroundColor: classDistribution.map(item => item.color),
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Grid container spacing={3}>
      {/* Cards de estatísticas */}
      {statsItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderTop: `4px solid ${item.color}`,
            }}
          >
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: item.color }}>
              {item.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
          </Paper>
        </Grid>
      ))}

      {/* Gráfico de Taxa de Conclusão */}
      <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={2} sx={{ p: 3, height: '100%', minHeight: 300 }}>
          <Typography variant="h6" gutterBottom>
            Taxa de Conclusão
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={completionRate}
                size={180}
                thickness={5}
                sx={{ color: theme.palette.success.main }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h4" component="div" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  {`${completionRate}%`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>

      {/* Gráfico de Distribuição */}
      <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={2} sx={{ p: 3, height: '100%', minHeight: 300 }}>
          <Typography variant="h6" gutterBottom>
            Distribuição de Aulas
          </Typography>
          <Box sx={{ height: 200 }}>
            <Doughnut data={doughnutData} options={options} />
          </Box>
        </Paper>
      </Grid>

      {/* Gráfico de Aulas por Mês */}
      <Grid item xs={12}>
        <Paper elevation={2} sx={{ p: 3, height: '100%', minHeight: 350 }}>
          <Typography variant="h6" gutterBottom>
            Aulas por Mês
          </Typography>
          <Box sx={{ height: 300 }}>
            <Bar data={barData} options={options} />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardStats; 