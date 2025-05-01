import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  useTheme,
  Snackbar,
  Alert,
  SelectChangeEvent
} from '@mui/material';
import { Grid } from '../components/DisableTypeChecking';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const Schedule: React.FC = () => {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    teacher: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const subjects = [
    'Português para Médicos - Básico',
    'Português para Médicos - Intermediário',
    'Português para Médicos - Avançado',
    'Terminologia Médica em Português',
    'Cultura Brasileira',
    'Comunicação com Pacientes'
  ];

  const teachers = [
    'Dra. Ana Silva',
    'Prof. Carlos Oliveira',
    'Dra. Juliana Santos',
    'Prof. Ricardo Nunes'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpar erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpar erro quando o usuário seleciona algo
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.subject) newErrors.subject = 'Assunto é obrigatório';
    if (!formData.teacher) newErrors.teacher = 'Professor é obrigatório';
    if (!selectedDate) newErrors.date = 'Data é obrigatória';
    if (!startTime) newErrors.startTime = 'Horário de início é obrigatório';
    if (!endTime) newErrors.endTime = 'Horário de término é obrigatório';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aqui enviaria os dados para a API
      console.log({
        ...formData,
        date: selectedDate,
        startTime,
        endTime
      });
      
      // Limpar o formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        teacher: '',
        notes: ''
      });
      setSelectedDate(null);
      setStartTime(null);
      setEndTime(null);
      
      // Mostrar mensagem de sucesso
      setOpenSnackbar(true);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main, mt: 2 }}>
            Agendar Aula
          </Typography>
          
          <Paper sx={{ p: 4, mt: 3, boxShadow: 3, borderRadius: 2 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Dados pessoais */}
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EventAvailableIcon /> Informações Pessoais
                  </Typography>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Nome Completo"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Telefone"
                    fullWidth
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    required
                  />
                </Grid>
                
                {/* Detalhes do agendamento */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EventAvailableIcon /> Detalhes da Aula
                  </Typography>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth error={!!errors.subject} required>
                    <InputLabel>Assunto</InputLabel>
                    <Select
                      name="subject"
                      value={formData.subject}
                      label="Assunto"
                      onChange={handleSelectChange}
                    >
                      {subjects.map((subject) => (
                        <MenuItem key={subject} value={subject}>
                          {subject}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.subject && (
                      <FormHelperText>{errors.subject}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth error={!!errors.teacher} required>
                    <InputLabel>Professor</InputLabel>
                    <Select
                      name="teacher"
                      value={formData.teacher}
                      label="Professor"
                      onChange={handleSelectChange}
                    >
                      {teachers.map((teacher) => (
                        <MenuItem key={teacher} value={teacher}>
                          {teacher}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.teacher && (
                      <FormHelperText>{errors.teacher}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <DatePicker
                    label="Data"
                    value={selectedDate}
                    onChange={(newValue) => {
                      setSelectedDate(newValue);
                      if (errors.date) {
                        setErrors(prev => ({ ...prev, date: '' }));
                      }
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        required: true,
                        error: !!errors.date,
                        helperText: errors.date
                      }
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <TimePicker
                    label="Horário de Início"
                    value={startTime}
                    onChange={(newValue) => {
                      setStartTime(newValue);
                      if (errors.startTime) {
                        setErrors(prev => ({ ...prev, startTime: '' }));
                      }
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        required: true,
                        error: !!errors.startTime,
                        helperText: errors.startTime
                      }
                    }}
                  />
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <TimePicker
                    label="Horário de Término"
                    value={endTime}
                    onChange={(newValue) => {
                      setEndTime(newValue);
                      if (errors.endTime) {
                        setErrors(prev => ({ ...prev, endTime: '' }));
                      }
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        required: true,
                        error: !!errors.endTime,
                        helperText: errors.endTime
                      }
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    label="Observações"
                    fullWidth
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                  />
                </Grid>
                
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    sx={{ 
                      minWidth: 200,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      py: 1.2,
                      borderRadius: '30px'
                    }}
                  >
                    Agendar Aula
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
        
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            Aula agendada com sucesso!
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
  );
};

export default Schedule; 