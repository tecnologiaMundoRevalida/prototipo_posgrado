import React, { useState } from 'react';
import { 
  Box, 
  Drawer, 
  AppBar, 
  Toolbar, 
  List, 
  Typography, 
  Divider, 
  IconButton, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  useTheme,
  Container,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  useMediaQuery
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Agendar', icon: <EventAvailableIcon />, path: '/agendar' },
    { text: 'Professores', icon: <SchoolIcon />, path: '/professor' },
    { text: 'Estudantes', icon: <PeopleIcon />, path: '/aluno' }
  ];

  const userMenuItems = [
    { text: 'Perfil', icon: <AccountCircleIcon fontSize="small" /> },
    { text: 'Configurações', icon: <SettingsIcon fontSize="small" /> },
    { text: 'Sair', icon: <LogoutIcon fontSize="small" /> }
  ];

  // Drawer para mobile
  const drawer = (
    <Box sx={{ width: 250 }}>
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
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                minHeight: 48,
                bgcolor: location.pathname === item.path ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.08)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: 'center',
                  color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  color: location.pathname === item.path ? theme.palette.primary.main : 'inherit', 
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ p: { xs: 0, sm: 1 } }}>
            {/* Menu Mobile */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            
            {/* Logo */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ 
                flexGrow: 1, 
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              PosgradoMed
            </Typography>
            
            {/* Menu Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {menuItems.map((item) => (
                  <Box 
                    key={item.text}
                    component={Link}
                    to={item.path}
                    sx={{ 
                      mx: 1.5,
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      opacity: location.pathname === item.path ? 1 : 0.8,
                      position: 'relative',
                      padding: '0.5rem 0',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: location.pathname === item.path ? '0%' : '50%',
                        width: location.pathname === item.path ? '100%' : 0,
                        height: 2,
                        bgcolor: 'white',
                        transition: 'all 0.3s ease',
                      },
                      '&:hover': {
                        opacity: 1,
                        '&::after': {
                          width: '100%',
                          left: '0%',
                        }
                      }
                    }}
                  >
                    {item.text}
                  </Box>
                ))}
              </Box>
            )}

            {/* Menu do usuário */}
            <Box sx={{ flexGrow: 0, ml: 2 }}>
              <Tooltip title="Configurações">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar 
                    alt="Usuário" 
                    src="/static/images/avatar/2.jpg"
                    sx={{ 
                      width: 40, 
                      height: 40,
                      border: '2px solid white' 
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {userMenuItems.map((item) => (
                  <MenuItem key={item.text} onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <Typography>{item.text}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      {/* Drawer Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Melhor performance em dispositivos móveis
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 250 },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Conteúdo principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        <Container maxWidth="lg" sx={{ pt: 2 }}>
          {children}
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Layout; 