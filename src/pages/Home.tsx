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
  Paper,
  Divider,
  Avatar,
  Rating
} from '@mui/material';
import { Grid } from '../components/DisableTypeChecking';
import { Link } from 'react-router-dom';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

  const benefits = [
    'Aprenda terminologia médica em português',
    'Melhore sua comunicação com pacientes brasileiros',
    'Conheça o sistema de saúde brasileiro',
    'Obtenha suporte para o Revalida',
    'Flexibilidade de horários',
    'Aulas personalizadas ao seu nível'
  ];

  const testimonials = [
    {
      text: "As aulas de português médico da PosgradoMed foram essenciais para minha adaptação ao Brasil. Hoje consigo me comunicar com pacientes e colegas com confiança.",
      name: "Dra. Sofia Martinez",
      country: "Argentina",
      rating: 5,
      avatar: PLACEHOLDERS.avatarPlaceholder(1)
    },
    {
      text: "A metodologia focada em termos médicos acelerou meu aprendizado. Em apenas 3 meses já conseguia realizar consultas em português.",
      name: "Dr. Carlos Ramirez",
      country: "Colômbia",
      rating: 5,
      avatar: PLACEHOLDERS.avatarPlaceholder(2)
    },
    {
      text: "Os professores são muito atenciosos e pacientes. O conteúdo é perfeito para médicos que desejam trabalhar no Brasil.",
      name: "Dra. Ana Gonzalez",
      country: "México",
      rating: 4.5,
      avatar: PLACEHOLDERS.avatarPlaceholder(3)
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa' }}>
      {/* Hero Section - Com gradiente e animação */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: 'calc(100vh - 70px)', md: 'calc(100vh - 90px)' },
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Elementos decorativos */}
        <Box sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          top: '-100px',
          right: '-100px',
          zIndex: 1
        }} />
        <Box sx={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          bottom: '-50px',
          left: '-50px',
          zIndex: 1
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                fontWeight="bold"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  mb: 3
                }}
              >
                Português Médico para sua Carreira no Brasil
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  fontWeight: 300,
                  lineHeight: 1.6,
                  textShadow: '0 1px 5px rgba(0,0,0,0.1)'
                }}
              >
                Transformando a medicina do exterior, tornando a carreira no Brasil acessível para médicos da América Latina.
              </Typography>
              
              {/* Lista de benefícios */}
              <Box sx={{ mb: 4 }}>
                {benefits.slice(0, 3).map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleOutlineIcon sx={{ mr: 1, color: theme.palette.secondary.light }} />
                    <Typography variant="body1">{benefit}</Typography>
                  </Box>
                ))}
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                mt: 4
              }}>
                <Button
                  component={Link}
                  to="/aluno"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    borderRadius: '30px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    transition: '0.3s all',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  Sou Aluno
                </Button>
                <Button
                  component={Link}
                  to="/professor"
                  variant="outlined"
                  size="large"
                  sx={{ 
                    fontWeight: 'bold',
                    borderWidth: 2,
                    px: 4,
                    py: 1.4,
                    borderRadius: '30px',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: theme.palette.secondary.light,
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Sou Professor
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={PLACEHOLDERS.heroImage}
                  alt="PosgradoMed Learning"
                  sx={{ 
                    width: '100%',
                    maxWidth: 500,
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transition: '0.5s all',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg)',
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: theme.palette.secondary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    padding: 2,
                    textAlign: 'center'
                  }}
                >
                  Comece Hoje!
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefícios com cards mais modernos */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="overline" 
            component="p"
            sx={{ 
              color: theme.palette.secondary.main,
              fontWeight: 'bold',
              letterSpacing: 2,
              mb: 2
            }}
          >
            NOSSA ABORDAGEM
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: 'bold', 
              color: theme.palette.primary.main,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Como Funciona o Processo
          </Typography>
          <Divider sx={{ 
            width: 80, 
            mx: 'auto', 
            borderColor: theme.palette.secondary.main,
            borderWidth: 3,
            borderRadius: 1,
            mb: 3
          }}/>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              color: theme.palette.text.secondary,
              fontSize: '1.1rem'
            }}
          >
            Nossas aulas são ministradas por professores especializados em terminologia médica e adaptadas ao seu nível de proficiência.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  border: '1px solid #eaeaea',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    '& .icon-bg': {
                      transform: 'scale(1.2)'
                    }
                  },
                }}
              >
                <Box 
                  className="icon-bg"
                  sx={{ 
                    position: 'absolute', 
                    top: -20, 
                    right: -20, 
                    width: 120, 
                    height: 120, 
                    borderRadius: '50%', 
                    backgroundColor: `${theme.palette.primary.main}10`,
                    transition: 'all 0.5s ease',
                    zIndex: 0
                  }} 
                />
                <Box sx={{ position: 'relative', zIndex: 1, mb: 3 }}>{feature.icon}</Box>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom 
                  fontWeight="bold"
                  sx={{ mb: 2, color: theme.palette.primary.main }}
                >
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

      {/* CTA Section - Mais impactante */}
      <Box sx={{ 
        background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
        py: { xs: 8, md: 10 },
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={PLACEHOLDERS.ctaImage}
                  alt="Médico estudando português"
                  sx={{ 
                    borderRadius: 4, 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                    height: { xs: 300, md: 400 },
                    objectFit: 'cover'
                  }}
                />
                <Paper 
                  elevation={8}
                  sx={{
                    position: { xs: 'relative', md: 'absolute' },
                    top: { md: '20%' },
                    right: { md: -40 },
                    mt: { xs: -5, md: 0 },
                    ml: { xs: 'auto', md: 0 },
                    mr: { xs: 'auto', md: 0 },
                    width: { xs: '80%', md: '200px' },
                    p: 2,
                    borderRadius: 2,
                    zIndex: 2,
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="h4" color="primary" fontWeight="bold" sx={{ mb: 1 }}>+500</Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    Médicos já formados pelo nosso programa
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                Comece Agora Mesmo a Sua Jornada
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem', opacity: 0.9 }}>
                Agende suas aulas de português para médicos e acelere sua adaptação ao sistema de saúde brasileiro. Professores especializados em terminologia médica e comunicação clínica.
              </Typography>
              
              {/* Lista de benefícios adicionais */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {benefits.slice(3).map((benefit, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleOutlineIcon sx={{ mr: 1 }} />
                      <Typography variant="body1">{benefit}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              <Button
                component={Link}
                to="/agendar"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  py: 1.5,
                  px: 4,
                  fontWeight: 'bold',
                  borderRadius: '30px',
                  backgroundColor: 'white',
                  color: theme.palette.secondary.dark,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  '&:hover': {
                    backgroundColor: 'white',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                  }
                }}
              >
                Agendar Primeira Aula
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section - Com cartões mais elegantes */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="overline" 
            component="p"
            sx={{ 
              color: theme.palette.secondary.main,
              fontWeight: 'bold',
              letterSpacing: 2,
              mb: 2
            }}
          >
            DEPOIMENTOS
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: 'bold', 
              color: theme.palette.primary.main,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            O Que Dizem Nossos Alunos
          </Typography>
          <Divider sx={{ 
            width: 80, 
            mx: 'auto', 
            borderColor: theme.palette.secondary.main,
            borderWidth: 3,
            borderRadius: 1,
            mb: 3
          }}/>
        </Box>
        
        <Grid container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                p: 3,
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  transform: 'translateY(-5px)'
                }
              }}>
                <Box sx={{ mb: 3 }}>
                  <Rating value={item.rating} readOnly precision={0.5} />
                </Box>
                <Typography variant="body1" paragraph sx={{ 
                  fontStyle: 'italic',
                  flex: 1,
                  fontSize: '1.05rem',
                  position: 'relative',
                  color: theme.palette.text.secondary
                }}>
                  <Box component="span" sx={{ 
                    fontSize: '2rem', 
                    color: theme.palette.primary.light,
                    position: 'absolute',
                    top: -15,
                    left: -10
                  }}>
                    "
                  </Box>
                  {item.text}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Avatar
                    src={item.avatar}
                    alt={item.name}
                    sx={{ 
                      width: 55,
                      height: 55,
                      mr: 2,
                      border: `2px solid ${theme.palette.primary.light}`
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ color: theme.palette.primary.main }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.country}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Final CTA */}
      <Box sx={{ bgcolor: theme.palette.primary.dark, color: 'white', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Pronto para começar sua jornada?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto', opacity: 0.9 }}>
            Agende sua primeira aula gratuita hoje mesmo e descubra como podemos ajudar você a alcançar seus objetivos no Brasil.
          </Typography>
          <Button
            component={Link}
            to="/agendar"
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              py: 1.5,
              px: 5,
              fontWeight: 'bold',
              borderRadius: '30px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
              fontSize: '1.1rem'
            }}
          >
            Agendar Aula Gratuita
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 