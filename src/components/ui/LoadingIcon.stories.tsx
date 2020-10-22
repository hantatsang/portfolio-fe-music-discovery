import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import LoadingIcon from './LoadingIcon';

export default {
  title: 'Components/LoadingIcon',
  component: LoadingIcon
} as Meta;

export const _default: React.FC<{}> = () => <LoadingIcon />
