import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Grid, { GridProps } from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args}>
  {[...Array(10)].map((_, i) => <div
    key={i}
    style={{
      background: '#00bf56',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '150px',
    }}
  >
    Example Grid item #{i}
  </div>)}
</Grid>;

export const OneColumn = Template.bind({});
OneColumn.args = {
  col: 1
};

export const FiveColumns = Template.bind({});
FiveColumns.args = {
  col: 5
}
