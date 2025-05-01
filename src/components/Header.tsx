import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ 
          textDecoration: 'none', 
          color: 'white',
          fontWeight: 'bold'
        }}>
          PosgradoMed
        </Typography>
        
        <Box>
          <Button 
            color="inherit" 
            component={Link} 
            to="/dashboard"
            sx={{ mx: 1 }}
          >
            Dashboard
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/agendar"
            sx={{ mx: 1 }}
          >
            Agendar
          </Button>
          <Button 
            variant="outlined" 
            color="inherit" 
            component={Link}
            to="/login"
            sx={{ 
              ml: 1,
              borderColor: 'white',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 