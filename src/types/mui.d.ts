import { ElementType, ClassAttributes, ReactElement } from 'react';
import { Theme, SxProps } from '@mui/material/styles';
import { SystemProps } from '@mui/system';
import { GridTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { GridProps as MuiGridProps } from '@mui/material/Grid';

declare module '@mui/material/Grid' {
  interface GridProps extends MuiGridProps {
    item?: boolean;
  }
  
  const Grid: OverridableComponent<GridTypeMap>;
  export default Grid;
} 