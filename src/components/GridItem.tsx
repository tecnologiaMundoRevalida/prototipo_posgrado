import React from 'react';
import { Grid } from './CustomGrid';

interface GridItemProps {
  children: React.ReactNode;
  xs?: number | 'auto' | boolean;
  sm?: number | 'auto' | boolean;
  md?: number | 'auto' | boolean;
  lg?: number | 'auto' | boolean;
  xl?: number | 'auto' | boolean;
  [key: string]: any;
}

// Este componente é um wrapper para o Grid do MUI que resolve problemas de tipagem
const GridItem: React.FC<GridItemProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
};

export default GridItem; 