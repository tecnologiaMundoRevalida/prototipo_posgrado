import React, { useState } from 'react';
import { Box, Paper, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, useTheme } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

interface CalendarProps {
  events?: Array<{
    id: string;
    title: string;
    start: string;
    end: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    extendedProps?: any;
  }>;
  editable?: boolean;
  selectable?: boolean;
  onEventAdd?: (event: any) => void;
  onEventClick?: (event: any) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  events = [],
  editable = false,
  selectable = false,
  onEventAdd,
  onEventClick,
}) => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('60');

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const durations = [
    { value: '30', label: '30 minutos' },
    { value: '60', label: '1 hora' },
    { value: '90', label: '1 hora e 30 minutos' },
    { value: '120', label: '2 horas' },
  ];

  const handleDateClick = (arg: any) => {
    if (selectable) {
      setSelectedDate(arg.date);
      setOpenDialog(true);
    }
  };

  const handleEventClick = (arg: any) => {
    if (onEventClick) {
      onEventClick(arg.event);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedDate(null);
    setSelectedTimeSlot('');
    setSelectedDuration('60');
  };

  const handleAddEvent = () => {
    if (!selectedDate || !selectedTimeSlot) return;

    const [hours, minutes] = selectedTimeSlot.split(':').map(Number);
    const startDate = new Date(selectedDate);
    startDate.setHours(hours, minutes, 0);
    
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + parseInt(selectedDuration));

    if (onEventAdd) {
      onEventAdd({
        title: 'Aula',
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
      });
    }

    handleCloseDialog();
  };

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          locale="pt-br"
          buttonText={{
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
          }}
          allDaySlot={false}
          slotMinTime="08:00:00"
          slotMaxTime="19:00:00"
          height="auto"
          events={events}
          editable={editable}
          selectable={selectable}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          slotLabelFormat={{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }}
        />
      </Paper>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Agendar Aula</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              Data: {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : ''}
            </Typography>
            
            <TextField
              select
              label="Horário"
              value={selectedTimeSlot}
              onChange={(e) => setSelectedTimeSlot(e.target.value)}
              fullWidth
              margin="normal"
            >
              {timeSlots.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </TextField>
            
            <TextField
              select
              label="Duração"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              fullWidth
              margin="normal"
            >
              {durations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button 
            onClick={handleAddEvent} 
            variant="contained" 
            color="primary"
            disabled={!selectedTimeSlot}
          >
            Agendar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar; 