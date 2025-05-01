import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  useTheme,
  Paper
} from '@mui/material';
import { Grid } from '../components/DisableTypeChecking';
import { Link } from 'react-router-dom';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { PLACEHOLDERS } from '../data/placeholders';

const Home: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Agendamento Simples',
      description: 'Agende aulas com facilidade, escolhendo horários convenientes e professores especializados.',
      icon: <EventAvailableIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Professores Qualificados',
      description: 'Aprenda com os melhores professores de português para médicos estrangeiros.',
      icon: <PersonIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
    },
    {
      title: 'Acompanhamento Pedagógico',
      description: 'Acompanhe seu progresso e receba feedback detalhado após cada aula.',
      icon: <SchoolIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                Agendamento de Aulas PosgradoMed
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 300 }}>
                Transformando a medicina do exterior, tornando a carreira no Brasil um fácil acesso para os médicos da América Latina.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/aluno"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ 
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5
                  }}
                >
                  Sou Aluno
                </Button>
                <Button
                  component={Link}
                  to="/professor"
                  variant="outlined"
                  color="secondary"
                  size="large"
                  sx={{ 
                    fontWeight: 'bold',
                    borderWidth: 2,
                    px: 4,
                    py: 1.4,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  Sou Professor
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src={PLACEHOLDERS.heroImage}
                alt="PosgradoMed Learning"
                sx={{ 
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ mb: 6, fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          Como Funciona
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: theme.palette.secondary.light, py: 8 }}>
        <Container maxWidth="md">
          <Card
            sx={{
              bgcolor: 'white',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={PLACEHOLDERS.ctaImage}
                  alt="Médico estudando português"
                  sx={{ height: { xs: 200, md: '100%' } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                  <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" color="primary">
                    Comece Agora Mesmo
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                    Agende suas aulas de português para médicos e acelere sua adaptação ao sistema de saúde brasileiro. Professores especializados em terminologia médica e comunicação clínica.
                  </Typography>
                  <Button
                    component={Link}
                    to="/agendar"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ 
                      py: 1.5,
                      fontWeight: 'bold',
                    }}
                  >
                    Agendar Primeira Aula
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ mb: 6, fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          Depoimentos de Alunos
        </Typography>
        
        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                p: 2,
                borderRadius: 3
              }}>
                <CardContent>
                  <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
                    "As aulas de português médico da PosgradoMed foram essenciais para minha adaptação ao Brasil. Hoje consigo me comunicar com pacientes e colegas com confiança."
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Box
                      component="img"
                      src={PLACEHOLDERS.avatarPlaceholder(item)}
                      alt="Depoimento"
                      sx={{ 
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        mr: 2
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Dr. Nome do Aluno {item}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Médico, País de Origem
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 