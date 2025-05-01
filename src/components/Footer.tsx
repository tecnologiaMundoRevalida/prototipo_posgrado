import React from 'react';
import { Box, Container, Typography, Link, Divider, useTheme } from '@mui/material';
import { Grid } from './DisableTypeChecking';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.grey[100],
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              PosgradoMed
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fornecendo ensino de português de qualidade para médicos estrangeiros desde 2020.
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <Link href="#" color="inherit">
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href="#" color="inherit">
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit">
                <LinkedInIcon />
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links Rápidos
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/dashboard" color="inherit" display="block" sx={{ mb: 1 }}>
              Dashboard
            </Link>
            <Link href="/agendar" color="inherit" display="block" sx={{ mb: 1 }}>
              Agendar Aulas
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Sobre Nós
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Av. Paulista, 1234
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              São Paulo, SP - Brasil
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              contato@posgradomed.com.br
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              +55 (11) 1234-5678
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Nosso Programa
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Português Médico
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Terminologia Técnica
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Cultura Brasileira
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Preparação para Revalida
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 4, mb: 4 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} PosgradoMed. Todos os direitos reservados.
          </Typography>
          <Box>
            <Link href="#" color="inherit" sx={{ pl: 1 }}>
              Política de Privacidade
            </Link>
            <Link href="#" color="inherit" sx={{ pl: 2 }}>
              Termos de Uso
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 