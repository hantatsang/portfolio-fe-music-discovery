import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import Grid from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid
} as Meta;

export const _default: React.FC<{}> = () => <Grid>
  {[...Array(10)].map((_, i) => <div
    key={i}
    style={{
      background: '#00bf56',
      color: '#ffffff',
      width: '100%',
      height: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Example grid item #{i}
  </div>)}
</Grid>
