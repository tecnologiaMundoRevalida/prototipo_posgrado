import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Avatar, Box, Chip, Rating, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link } from 'react-router-dom';

interface TeacherCardProps {
  id: string;
  name: string;
  specialties: string[];
  rating: number;
  availability: string;
  imageUrl?: string;
  description: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ 
  id, 
  name, 
  specialties, 
  rating, 
  availability, 
  imageUrl,
  description
}) => {
  const theme = useTheme();

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
      }
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar 
            src={imageUrl} 
            alt={name}
            sx={{ 
              width: 70, 
              height: 70, 
              mr: 2,
              bgcolor: theme.palette.primary.main
            }}
          >
            {name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" component="h2" gutterBottom>
              {name}
            </Typography>
            <Rating value={rating} precision={0.5} readOnly size="small" />
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
          {specialties.map((specialty, index) => (
            <Chip 
              key={index}
              label={specialty}
              size="small"
              icon={<SchoolIcon />}
              sx={{ 
                mr: 1, 
                mb: 1,
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.text.primary,
              }}
            />
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EventAvailableIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="body2">
            Disponibilidade: {availability}
          </Typography>
        </Box>
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button 
          component={Link} 
          to={`/professor/${id}`}
          size="small" 
          color="primary"
        >
          Ver perfil
        </Button>
        <Button 
          component={Link}
          to={`/agendar/${id}`}
          variant="contained" 
          color="primary" 
          size="small"
        >
          Agendar aula
        </Button>
      </CardActions>
    </Card>
  );
};

export default TeacherCard; 