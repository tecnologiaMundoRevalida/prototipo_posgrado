import React from 'react';
import { Grid as MuiGrid, GridProps } from '@mui/material';

// Versão tipada do Grid que contorna problemas de tipagem
export const Grid = (props: any) => {
  return <MuiGrid {...props} />;
}; 