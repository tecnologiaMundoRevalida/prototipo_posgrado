import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Stepper, 
  Step, 
  StepLabel, 
  Button, 
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  useTheme,
  Card,
  CardContent,
  Avatar,
  Rating,
  Snackbar,
  Alert,
  SelectChangeEvent
} from '@mui/material';
import { Grid } from '../../components/DisableTypeChecking';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Calendar from '../../components/Calendar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

const steps = ['Selecionar Professor', 'Escolher Horário', 'Confirmar Agendamento'];

const Agendar: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [topic, setTopic] = useState('');
  const [observations, setObservations] = useState('');

  // Dados simulados de professores
  const teachers = [
    {
      id: '1',
      name: 'Profa. Ana Silva',
      specialties: ['Terminologia Médica', 'Gramática Avançada'],
      rating: 4.8,
      imageUrl: '',
      description: 'Especialista em português médico com 5 anos de experiência ensinando médicos estrangeiros.',
    },
    {
      id: '2',
      name: 'Prof. Carlos Mendes',
      specialties: ['Comunicação Clínica', 'Prontuário Eletrônico'],
      rating: 4.5,
      imageUrl: '',
      description: 'Professor com experiência em hospitais, foco em comunicação médico-paciente.',
    },
    {
      id: '3',
      name: 'Profa. Juliana Costa',
      specialties: ['Português Conversacional', 'Terminologia Especializada'],
      rating: 4.7,
      imageUrl: '',
      description: 'Professora com mestrado em linguística aplicada à área médica.',
    },
  ];

  // Exemplo de eventos no calendário para o professor selecionado
  const availabilityEvents = [
    {
      id: 'avail-1',
      title: 'Disponível',
      start: '2023-06-20T10:00:00',
      end: '2023-06-20T12:00:00',
      backgroundColor: theme.palette.success.light,
      borderColor: theme.palette.success.main,
    },
    {
      id: 'avail-2',
      title: 'Disponível',
      start: '2023-06-21T14:00:00',
      end: '2023-06-21T16:00:00',
      backgroundColor: theme.palette.success.light,
      borderColor: theme.palette.success.main,
    },
    {
      id: 'avail-3',
      title: 'Disponível',
      start: '2023-06-22T09:00:00',
      end: '2023-06-22T11:00:00',
      backgroundColor: theme.palette.success.light,
      borderColor: theme.palette.success.main,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleEventAdd = (event: any) => {
    setSelectedDate(new Date(event.start));
    handleNext();
  };

  const handleConfirm = () => {
    // Aqui seria implementada a lógica para salvar o agendamento
    console.log({
      teacherId: selectedTeacher,
      date: selectedDate,
      topic,
      observations
    });
    
    handleNext();
  };

  const isNextDisabled = () => {
    if (activeStep === 0) return !selectedTeacher;
    if (activeStep === 1) return !selectedDate;
    if (activeStep === 2) return !topic;
    return false;
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Button 
            component={Link}
            to="/aluno"
            startIcon={<ArrowBackIcon />}
            sx={{ mr: 2 }}
          >
            Voltar
          </Button>
          <Typography variant="h4" component="h1" color="primary" fontWeight="bold">
            Agendar Nova Aula
          </Typography>
        </Box>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Selecione um Professor
              </Typography>
              
              <Grid container spacing={3}>
                {teachers.map((teacher) => (
                  <Grid item xs={12} md={4} key={teacher.id}>
                    <Card 
                      sx={{ 
                        cursor: 'pointer',
                        height: '100%',
                        border: selectedTeacher === teacher.id ? `2px solid ${theme.palette.primary.main}` : 'none',
                        transition: 'all 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                        }
                      }}
                      onClick={() => setSelectedTeacher(teacher.id)}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Avatar 
                            src={teacher.imageUrl} 
                            alt={teacher.name}
                            sx={{ width: 60, height: 60, mr: 2, bgcolor: theme.palette.primary.main }}
                          >
                            {teacher.name.charAt(0)}
                          </Avatar>
                          <Box>
                            <Typography variant="h6" component="h3">
                              {teacher.name}
                            </Typography>
                            <Rating value={teacher.rating} precision={0.5} size="small" readOnly />
                          </Box>
                        </Box>
                        
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {teacher.description}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
                          {teacher.specialties.map((specialty, index) => (
                            <Typography 
                              key={index} 
                              variant="caption" 
                              sx={{ 
                                mr: 1, 
                                mb: 1, 
                                bgcolor: theme.palette.primary.light,
                                color: 'white',
                                py: 0.5,
                                px: 1,
                                borderRadius: 1
                              }}
                            >
                              {specialty}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Selecione um Horário
              </Typography>
              <Typography variant="body2" paragraph color="text.secondary">
                Clique em um horário disponível (verde) para agendar sua aula.
              </Typography>
              
              <Calendar 
                events={availabilityEvents}
                selectable={true}
                editable={false}
                onEventAdd={handleEventAdd}
              />
            </Box>
          )}

          {activeStep === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Confirme os Detalhes da Aula
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Tópico da Aula"
                    fullWidth
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    margin="normal"
                    helperText="Ex: Terminologia Médica, Comunicação com Pacientes, etc."
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Observações ou Dúvidas"
                    fullWidth
                    multiline
                    rows={4}
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    margin="normal"
                  />
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 4, p: 3, bgcolor: 'rgba(49, 103, 123, 0.05)', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Resumo da Aula
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Professor:</Typography>
                    <Typography variant="body1">
                      {teachers.find(t => t.id === selectedTeacher)?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Data e Hora:</Typography>
                    <Typography variant="body1">
                      {selectedDate ? selectedDate.toLocaleString('pt-BR') : ''}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}

          {activeStep === 3 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 80, color: theme.palette.success.main, mb: 2 }} />
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Aula Agendada com Sucesso!
              </Typography>
              <Typography variant="body1" paragraph>
                Um e-mail de confirmação foi enviado para você com todos os detalhes.
              </Typography>
              <Button 
                component={Link}
                to="/aluno"
                variant="contained" 
                color="primary"
                sx={{ mt: 2 }}
              >
                Voltar ao Dashboard
              </Button>
            </Box>
          )}

          {activeStep < 3 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button 
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Voltar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={activeStep === 2 ? handleConfirm : handleNext}
                disabled={isNextDisabled()}
              >
                {activeStep === 2 ? 'Confirmar Agendamento' : 'Próximo'}
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Agendar; 