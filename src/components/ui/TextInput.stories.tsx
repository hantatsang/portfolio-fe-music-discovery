import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput
} as Meta;

export const _default: React.FC<{}> = () => <TextInput placeholder="placeholder" />;
