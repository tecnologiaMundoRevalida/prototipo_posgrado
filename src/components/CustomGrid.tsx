import React from 'react';
import { Grid as MuiGrid } from '@mui/material';

// Interface customizada para o Grid que permite 'item' junto com props responsivas
interface CustomGridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: number | 'auto' | boolean;
  sm?: number | 'auto' | boolean;
  md?: number | 'auto' | boolean;
  lg?: number | 'auto' | boolean;
  xl?: number | 'auto' | boolean;
  spacing?: number;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  sx?: any;
  key?: any;
  [key: string]: any; // Para aceitar qualquer outra propriedade que possa ser passada
}

// Componente Grid que ignora problemas de tipagem usando "any"
export const Grid = (props: any) => {
  return <MuiGrid {...props} />;
}; 