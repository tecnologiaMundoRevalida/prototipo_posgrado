import React from 'react';
import { Paper, Typography, Box, Chip, Avatar, Button, Divider, useTheme } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ClassSummaryProps {
  id: string;
  teacherName: string;
  teacherAvatar?: string;
  date: string;
  startTime: string;
  endTime: string;
  topic: string;
  status: 'agendada' | 'concluida' | 'cancelada';
  onCancel?: () => void;
  onReschedule?: () => void;
}

const ClassSummary: React.FC<ClassSummaryProps> = ({
  id,
  teacherName,
  teacherAvatar,
  date,
  startTime,
  endTime,
  topic,
  status,
  onCancel,
  onReschedule,
}) => {
  const theme = useTheme();
  
  const statusColors = {
    agendada: theme.palette.primary.main,
    concluida: theme.palette.success.main,
    cancelada: theme.palette.error.main,
  };
  
  const statusLabels = {
    agendada: 'Agendada',
    concluida: 'Concluída',
    cancelada: 'Cancelada',
  };

  const formattedDate = date ? format(new Date(date), 'dd/MM/yyyy', { locale: ptBR }) : '';
  
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            src={teacherAvatar} 
            alt={teacherName}
            sx={{ 
              width: 50, 
              height: 50, 
              mr: 2,
              bgcolor: theme.palette.primary.main
            }}
          >
            {teacherName?.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" component="h3">
              {topic}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <PersonIcon fontSize="small" sx={{ mr: 0.5 }} />
              Professor: {teacherName}
            </Typography>
          </Box>
        </Box>
        
        <Chip 
          label={statusLabels[status]} 
          sx={{ 
            backgroundColor: statusColors[status],
            color: 'white',
            fontWeight: 'bold'
          }} 
        />
      </Box>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <DateRangeIcon fontSize="small" sx={{ mr: 0.5, color: theme.palette.primary.main }} />
          {formattedDate}
        </Typography>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessTimeIcon fontSize="small" sx={{ mr: 0.5, color: theme.palette.primary.main }} />
          {startTime} - {endTime}
        </Typography>
      </Box>
      
      {status === 'agendada' && (
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
          {onReschedule && (
            <Button 
              variant="outlined" 
              color="primary"
              size="small"
              onClick={onReschedule}
            >
              Reagendar
            </Button>
          )}
          {onCancel && (
            <Button 
              variant="outlined" 
              color="error"
              size="small"
              onClick={onCancel}
            >
              Cancelar
            </Button>
          )}
        </Box>
      )}
    </Paper>
  );
};

export default ClassSummary; 