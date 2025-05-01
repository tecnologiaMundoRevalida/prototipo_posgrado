import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Button, 
  TextField,
  Divider,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Switch,
  Card,
  CardContent
} from '@mui/material';
import { Grid } from '../../components/DisableTypeChecking';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from '../../components/Calendar';
import ClassSummary from '../../components/ClassSummary';

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

const ProfessorDashboard: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentNote, setCurrentNote] = useState('');
  const [currentClass, setCurrentClass] = useState<string | null>(null);
  const [availabilityDialog, setAvailabilityDialog] = useState(false);

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
      studentName: 'Dr. Juan Garcia',
      notes: 'O aluno apresentou dificuldades com termos técnicos específicos. Precisa praticar mais vocabulário médico.',
    },
    {
      id: '2',
      teacherName: 'Profa. Ana Silva',
      teacherAvatar: '',
      date: '2023-06-20',
      startTime: '14:00',
      endTime: '15:30',
      topic: 'Comunicação com Pacientes',
      status: 'agendada' as const,
      studentName: 'Dra. Maria Gonzalez',
      notes: '',
    },
    {
      id: '3',
      teacherName: 'Profa. Ana Silva',
      teacherAvatar: '',
      date: '2023-06-25',
      startTime: '09:00',
      endTime: '10:00',
      topic: 'Prontuário Médico em Português',
      status: 'agendada' as const,
      studentName: 'Dr. Roberto Lopez',
      notes: '',
    },
  ];

  // Dados simulados para o calendário
  const calendarEvents = classes.map(classItem => ({
    id: classItem.id,
    title: `${classItem.topic} - ${classItem.studentName}`,
    start: `${classItem.date}T${classItem.startTime}:00`,
    end: `${classItem.date}T${classItem.endTime}:00`,
    backgroundColor: 
      classItem.status === 'agendada' 
        ? theme.palette.primary.main 
        : classItem.status === 'concluida'
          ? theme.palette.success.main
          : theme.palette.error.main,
  }));

  // Dados simulados para disponibilidade
  const availabilityEvents = [
    {
      id: 'avail-1',
      title: 'Disponível',
      start: '2023-06-19T08:00:00',
      end: '2023-06-19T12:00:00',
      backgroundColor: theme.palette.success.light,
      borderColor: theme.palette.success.main,
    },
    {
      id: 'avail-2',
      title: 'Disponível',
      start: '2023-06-20T14:00:00',
      end: '2023-06-20T18:00:00',
      backgroundColor: theme.palette.success.light,
      borderColor: theme.palette.success.main,
    },
    {
      id: 'avail-3',
      title: 'Disponível',
      start: '2023-06-21T09:00:00',
      end: '2023-06-21T15:00:00',
      backgroundColor: theme.palette.success.light,
      borderColor: theme.palette.success.main,
    },
  ];

  const handleOpenNotes = (classId: string, notes: string) => {
    setCurrentClass(classId);
    setCurrentNote(notes);
    setOpenDialog(true);
  };

  const handleSaveNotes = () => {
    // Aqui seria implementada a lógica para salvar as anotações
    console.log('Salvar anotações para a aula', currentClass, currentNote);
    setOpenDialog(false);
  };

  const handleAddAvailability = (event: any) => {
    console.log('Nova disponibilidade', event);
    // Aqui seria implementada a lógica para adicionar disponibilidade
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" color="primary" fontWeight="bold">
            Dashboard do Professor
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<CalendarMonthIcon />}
            onClick={() => setAvailabilityDialog(true)}
          >
            Gerenciar Disponibilidade
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
              <Tab label="Aulas Agendadas" icon={<AssignmentIcon />} iconPosition="start" />
              <Tab label="Calendário" icon={<CalendarMonthIcon />} iconPosition="start" />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Typography variant="h6" gutterBottom>
              Próximas Aulas
            </Typography>
            {classes.filter(c => c.status === 'agendada').map((classItem) => (
              <Box key={classItem.id} sx={{ mb: 3 }}>
                <ClassSummary
                  {...classItem}
                  teacherName={classItem.studentName}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -1 }}>
                  <Button 
                    startIcon={<AssignmentIcon />}
                    onClick={() => handleOpenNotes(classItem.id, classItem.notes)}
                    color="primary"
                  >
                    {classItem.notes ? 'Editar Anotações' : 'Adicionar Anotações'}
                  </Button>
                </Box>
              </Box>
            ))}

            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h6" gutterBottom>
              Aulas Concluídas
            </Typography>
            {classes.filter(c => c.status === 'concluida').map((classItem) => (
              <Box key={classItem.id} sx={{ mb: 3 }}>
                <ClassSummary
                  {...classItem}
                  teacherName={classItem.studentName}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: -1 }}>
                  <Button 
                    startIcon={<AssignmentIcon />}
                    onClick={() => handleOpenNotes(classItem.id, classItem.notes)}
                    color="primary"
                  >
                    {classItem.notes ? 'Editar Anotações' : 'Adicionar Anotações'}
                  </Button>
                </Box>
              </Box>
            ))}
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 'bold', mr: 1 }}>●</Box>
                Aulas Agendadas
                <Box component="span" sx={{ color: theme.palette.success.main, fontWeight: 'bold', mx: 2 }}>●</Box>
                Aulas Concluídas
                <Box component="span" sx={{ color: theme.palette.success.light, fontWeight: 'bold', mx: 2 }}>●</Box>
                Horários Disponíveis
              </Typography>
            </Box>
            
            <Calendar 
              events={[...calendarEvents, ...availabilityEvents]}
              selectable={false}
              editable={false}
              onEventClick={(event) => console.log('Evento clicado', event)}
            />
          </TabPanel>
        </Box>

        {/* Diálogo para adicionar/editar anotações */}
        <Dialog 
          open={openDialog} 
          onClose={() => setOpenDialog(false)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>Anotações da Aula</DialogTitle>
          <DialogContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Aluno: {classes.find(c => c.id === currentClass)?.studentName}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Tópico: {classes.find(c => c.id === currentClass)?.topic}
              </Typography>
            </Box>
            <TextField
              autoFocus
              multiline
              rows={6}
              fullWidth
              label="Anotações sobre o progresso do aluno"
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              placeholder="Registre aqui suas observações sobre o desempenho do aluno, dificuldades encontradas, avanços e recomendações para próximas aulas."
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
            <Button onClick={handleSaveNotes} variant="contained" color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>

        {/* Diálogo para gerenciar disponibilidade */}
        <Dialog 
          open={availabilityDialog} 
          onClose={() => setAvailabilityDialog(false)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>Gerenciar Disponibilidade</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.secondary" paragraph>
              Clique no calendário para adicionar novos horários de disponibilidade.
            </Typography>
            
            <Calendar 
              events={availabilityEvents}
              selectable={true}
              editable={true}
              onEventAdd={handleAddAvailability}
            />
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Disponibilidade Padrão Semanal
              </Typography>
              <Grid container spacing={2}>
                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                          {day}
                        </Typography>
                        <FormControlLabel
                          control={<Switch color="primary" />}
                          label="Disponível"
                        />
                        {index < 5 && (
                          <Box sx={{ mt: 1 }}>
                            <TextField
                              label="Horário de Início"
                              type="time"
                              defaultValue="08:00"
                              size="small"
                              sx={{ mr: 1, width: '45%' }}
                            />
                            <TextField
                              label="Horário de Fim"
                              type="time"
                              defaultValue="18:00"
                              size="small"
                              sx={{ width: '45%' }}
                            />
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAvailabilityDialog(false)}>Cancelar</Button>
            <Button variant="contained" color="primary">
              Salvar Disponibilidade
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default ProfessorDashboard; 