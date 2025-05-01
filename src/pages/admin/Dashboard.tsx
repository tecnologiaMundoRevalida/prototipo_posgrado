import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Tabs, 
  Tab, 
  Button, 
  useTheme,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
  IconButton,
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import PaymentsIcon from '@mui/icons-material/Payments';
import DashboardStats from '../../components/DashboardStats';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Dados simulados para estatísticas
  const dashboardData = {
    totalClasses: 156,
    completedClasses: 124,
    upcomingClasses: 28,
    canceledClasses: 4,
    monthlyStats: [
      { month: 'Janeiro', count: 18 },
      { month: 'Fevereiro', count: 22 },
      { month: 'Março', count: 25 },
      { month: 'Abril', count: 30 },
      { month: 'Maio', count: 35 },
      { month: 'Junho', count: 26 },
    ],
    classDistribution: [
      { label: 'Terminologia Médica', value: 45, color: theme.palette.primary.main },
      { label: 'Comunicação Clínica', value: 32, color: theme.palette.secondary.main },
      { label: 'Prontuário', value: 28, color: theme.palette.success.main },
      { label: 'Gramática', value: 15, color: theme.palette.warning.main },
      { label: 'Outros', value: 10, color: theme.palette.error.main },
    ],
  };

  // Dados simulados de professores
  const teachers = [
    {
      id: '1',
      name: 'Ana Silva',
      email: 'ana.silva@posgradomedlearning.com',
      specialty: 'Terminologia Médica',
      classesCount: 45,
      rating: 4.8,
      status: 'ativo',
    },
    {
      id: '2',
      name: 'Carlos Mendes',
      email: 'carlos.mendes@posgradomedlearning.com',
      specialty: 'Comunicação Clínica',
      classesCount: 38,
      rating: 4.5,
      status: 'ativo',
    },
    {
      id: '3',
      name: 'Juliana Costa',
      email: 'juliana.costa@posgradomedlearning.com',
      specialty: 'Português Médico',
      classesCount: 41,
      rating: 4.7,
      status: 'ativo',
    },
  ];

  // Dados simulados de alunos
  const students = [
    {
      id: '1',
      name: 'Dr. Juan Garcia',
      email: 'juan.garcia@email.com',
      country: 'Argentina',
      specialty: 'Clínica Médica',
      classesCount: 12,
      lastClass: '15/06/2023',
      status: 'ativo',
    },
    {
      id: '2',
      name: 'Dra. Maria Gonzalez',
      email: 'maria.gonzalez@email.com',
      country: 'Colômbia',
      specialty: 'Cardiologia',
      classesCount: 8,
      lastClass: '18/06/2023',
      status: 'ativo',
    },
    {
      id: '3',
      name: 'Dr. Roberto Lopez',
      email: 'roberto.lopez@email.com',
      country: 'Peru',
      specialty: 'Pediatria',
      classesCount: 15,
      lastClass: '12/06/2023',
      status: 'ativo',
    },
  ];

  // Dados simulados de pagamentos
  const payments = [
    {
      id: '1',
      teacher: 'Ana Silva',
      month: 'Junho 2023',
      classesCount: 20,
      totalAmount: 'R$ 2.000,00',
      status: 'pendente',
      date: '-',
    },
    {
      id: '2',
      teacher: 'Carlos Mendes',
      month: 'Junho 2023',
      classesCount: 18,
      totalAmount: 'R$ 1.800,00',
      status: 'pendente',
      date: '-',
    },
    {
      id: '3',
      teacher: 'Ana Silva',
      month: 'Maio 2023',
      classesCount: 22,
      totalAmount: 'R$ 2.200,00',
      status: 'pago',
      date: '05/06/2023',
    },
    {
      id: '4',
      teacher: 'Carlos Mendes',
      month: 'Maio 2023',
      classesCount: 15,
      totalAmount: 'R$ 1.500,00',
      status: 'pago',
      date: '05/06/2023',
    },
  ];

  const getStatusChip = (status: string) => {
    const statusConfig: Record<string, { color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning', label: string }> = {
      ativo: { color: 'success', label: 'Ativo' },
      inativo: { color: 'error', label: 'Inativo' },
      pendente: { color: 'warning', label: 'Pendente' },
      pago: { color: 'success', label: 'Pago' },
    };

    const config = statusConfig[status] || { color: 'default', label: status };

    return <Chip size="small" color={config.color} label={config.label} />;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" color="primary" fontWeight="bold">
          Painel Administrativo
        </Typography>
      </Box>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="dashboard tabs"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab icon={<DashboardIcon />} iconPosition="start" label="Dashboard" />
            <Tab icon={<SchoolIcon />} iconPosition="start" label="Professores" />
            <Tab icon={<PeopleIcon />} iconPosition="start" label="Alunos" />
            <Tab icon={<PaymentsIcon />} iconPosition="start" label="Pagamentos" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <DashboardStats {...dashboardData} />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">
              Professores
            </Typography>
            <TextField
              placeholder="Buscar professor..."
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: 'rgba(49, 103, 123, 0.1)' }}>
                  <TableCell><Typography fontWeight="bold">Nome</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Email</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Especialidade</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Aulas</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Avaliação</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Status</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Ações</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teachers.map((teacher) => (
                  <TableRow key={teacher.id} hover>
                    <TableCell>{teacher.name}</TableCell>
                    <TableCell>{teacher.email}</TableCell>
                    <TableCell>{teacher.specialty}</TableCell>
                    <TableCell align="center">{teacher.classesCount}</TableCell>
                    <TableCell align="center">{teacher.rating}</TableCell>
                    <TableCell align="center">{getStatusChip(teacher.status)}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="primary">
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">
              Alunos
            </Typography>
            <TextField
              placeholder="Buscar aluno..."
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: 'rgba(49, 103, 123, 0.1)' }}>
                  <TableCell><Typography fontWeight="bold">Nome</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Email</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">País</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Especialidade</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Aulas</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Última Aula</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Status</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Ações</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id} hover>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.country}</TableCell>
                    <TableCell>{student.specialty}</TableCell>
                    <TableCell align="center">{student.classesCount}</TableCell>
                    <TableCell>{student.lastClass}</TableCell>
                    <TableCell align="center">{getStatusChip(student.status)}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="primary">
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">
              Pagamentos aos Professores
            </Typography>
            <Box>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<DownloadIcon />}
                sx={{ mr: 2 }}
              >
                Exportar Relatório
              </Button>
              <TextField
                placeholder="Buscar pagamento..."
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: 'rgba(49, 103, 123, 0.1)' }}>
                  <TableCell><Typography fontWeight="bold">Professor</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Período</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Total de Aulas</Typography></TableCell>
                  <TableCell align="right"><Typography fontWeight="bold">Valor Total</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Status</Typography></TableCell>
                  <TableCell><Typography fontWeight="bold">Data de Pagamento</Typography></TableCell>
                  <TableCell align="center"><Typography fontWeight="bold">Ações</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id} hover>
                    <TableCell>{payment.teacher}</TableCell>
                    <TableCell>{payment.month}</TableCell>
                    <TableCell align="center">{payment.classesCount}</TableCell>
                    <TableCell align="right">{payment.totalAmount}</TableCell>
                    <TableCell align="center">{getStatusChip(payment.status)}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="primary">
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default AdminDashboard; 