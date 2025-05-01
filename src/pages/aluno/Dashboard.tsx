import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Tabs, 
  Tab, 
  Button, 
  Divider,
  useTheme,
  Card,
  CardContent
} from '@mui/material';
import { Grid } from '../../components/DisableTypeChecking';
import ClassSummary from '../../components/ClassSummary';
import Calendar from '../../components/Calendar';
import TeacherCard from '../../components/TeacherCard';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import DashboardStats from '../../components/DashboardStats';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const AlunosDashboard: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Dados simulados de aulas
  const classes = [
    {
      id: '1',
      teacherName: 'Profa. Ana Silva',
      teacherAvatar: '',
      date: '2023-06-15',
      startTime: '10:00',
      endTime: '11:00',
      topic: 'Terminologia Médica Básica',
      status: 'concluida' as const,
    },
    {
      id: '2',
      teacherName: 'Prof. Carlos Mendes',
      teacherAvatar: '',
      date: '2023-06-20',
      startTime: '14:00',
      endTime: '15:30',
      topic: 'Comunicação com Pacientes',
      status: 'agendada' as const,
    },
    {
      id: '3',
      teacherName: 'Profa. Juliana Costa',
      teacherAvatar: '',
      date: '2023-06-25',
      startTime: '09:00',
      endTime: '10:00',
      topic: 'Prontuário Médico em Português',
      status: 'agendada' as const,
    },
  ];

  // Dados simulados de professores recomendados
  const recommendedTeachers = [
    {
      id: '1',
      name: 'Profa. Ana Silva',
      specialties: ['Terminologia Médica', 'Gramática'],
      rating: 4.8,
      availability: 'Seg-Sex, 8h-17h',
      description: 'Especialista em português médico com 5 anos de experiência ensinando médicos estrangeiros.',
    },
    {
      id: '2',
      name: 'Prof. Carlos Mendes',
      specialties: ['Comunicação Clínica', 'Prontuário'],
      rating: 4.5,
      availability: 'Seg, Qua, Sex, 14h-20h',
      description: 'Professor com experiência em hospitais, foco em comunicação médico-paciente.',
    },
  ];

  // Dados simulados para o calendário
  const calendarEvents = classes.map(classItem => ({
    id: classItem.id,
    title: classItem.topic,
    start: `${classItem.date}T${classItem.startTime}:00`,
    end: `${classItem.date}T${classItem.endTime}:00`,
    backgroundColor: 
      classItem.status === 'agendada' 
        ? theme.palette.primary.main 
        : classItem.status === 'concluida'
          ? theme.palette.success.main
          : theme.palette.error.main,
  }));

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" color="primary" fontWeight="bold">
            Dashboard do Aluno
          </Typography>
          <Button 
            component={Link}
            to="/aluno/agendar"
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
          >
            Nova Aula
          </Button>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              aria-label="dashboard tabs"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Minhas Aulas" />
              <Tab label="Calendário" />
              <Tab label="Professores Recomendados" />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Typography variant="h6" gutterBottom>
              Próximas Aulas
            </Typography>
            {classes.filter(c => c.status === 'agendada').map((classItem) => (
              <ClassSummary
                key={classItem.id}
                {...classItem}
                onCancel={() => console.log('Cancelar aula', classItem.id)}
                onReschedule={() => console.log('Reagendar aula', classItem.id)}
              />
            ))}

            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h6" gutterBottom>
              Aulas Concluídas
            </Typography>
            {classes.filter(c => c.status === 'concluida').map((classItem) => (
              <ClassSummary
                key={classItem.id}
                {...classItem}
              />
            ))}
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Calendar 
              events={calendarEvents}
              selectable={false}
              editable={false}
              onEventClick={(event) => console.log('Evento clicado', event)}
            />
          </TabPanel>

          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={3}>
              {recommendedTeachers.map((teacher) => (
                <Grid item xs={12} md={6} key={teacher.id}>
                  <TeacherCard {...teacher} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
};

export default AlunosDashboard; 