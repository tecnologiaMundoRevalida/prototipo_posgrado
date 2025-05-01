import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useTheme, 
  Container,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Avatar,
  useScrollTrigger,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PLACEHOLDERS } from '../data/placeholders';

// Interface para ocultar a barra de navegação ao rolar para baixo
function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Verifica se a página está na home
  const isHome = location.pathname === '/';

  // Controla a transparência do menu na home page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Opções principais do menu
  const menuItems = [
    { text: 'Home', icon: <HomeIcon fontSize="small" />, path: '/' },
    { text: 'Dashboard', icon: <DashboardIcon fontSize="small" />, path: '/dashboard' },
    { text: 'Agendar', icon: <EventAvailableIcon fontSize="small" />, path: '/agendar' },
    { text: 'Professores', icon: <SchoolIcon fontSize="small" />, path: '/professor' },
    { text: 'Alunos', icon: <PersonIcon fontSize="small" />, path: '/aluno' }
  ];

  // Determina o estilo do AppBar (transparente na home quando no topo, colorido em todas as outras páginas)
  const getAppBarStyle = () => {
    if (isHome && !isScrolled) {
      return {
        background: 'transparent',
        boxShadow: 'none',
        transition: 'all 0.3s ease'
      };
    }
    return {
      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    };
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Determina a cor do texto no menu principal (branco se for transparente, padrão se não)
  const textColor = isHome && !isScrolled ? 'white' : undefined;

  // Drawer mobile
  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          p: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white'
        }}
      >
        <Avatar 
          sx={{ 
            width: 60, 
            height: 60, 
            mb: 1,
            bgcolor: theme.palette.secondary.main
          }}
        >
          P
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          PosgradoMed
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  bgcolor: `${theme.palette.primary.light}20`,
                  color: theme.palette.primary.main,
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.primary.main
                  }
                }
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/login">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed"
        sx={{ 
          ...getAppBarStyle(),
          zIndex: theme.zIndex.drawer + 1
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none', 
                color: textColor || 'white',
              }}
              component={Link}
              to="/"
            >
              <Box 
                component="img"
                src={PLACEHOLDERS.logo}
                alt="PosgradoMed"
                sx={{ 
                  height: 40, 
                  mr: 1, 
                  display: { xs: 'none', sm: 'block' } 
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                PosgradoMed
              </Typography>
            </Box>
            
            {/* Menu desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {menuItems.map((item, index) => (
                <Button 
                  key={item.text}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{ 
                    mx: 1,
                    fontWeight: 500,
                    position: 'relative',
                    opacity: location.pathname === item.path ? 1 : 0.8,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 5,
                      left: location.pathname === item.path ? '10%' : '50%',
                      width: location.pathname === item.path ? '80%' : 0,
                      height: 2,
                      bgcolor: 'currentColor',
                      transition: 'all 0.3s ease',
                    },
                    '&:hover': {
                      opacity: 1,
                      bgcolor: 'transparent',
                      '&::after': {
                        width: '80%',
                        left: '10%',
                      }
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
              
              <Button 
                variant="contained" 
                color="secondary"
                component={Link}
                to="/login"
                sx={{ 
                  ml: 2,
                  px: 3,
                  py: 0.8,
                  borderRadius: '30px',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Login
              </Button>
            </Box>
            
            {/* Menu mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header; 