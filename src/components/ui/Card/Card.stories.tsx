import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { CardAction, CardContent, CardHeader, CardImage } from '.';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card
} as Meta;

export const _default: React.FC<{}> = () => <Card>
  <CardImage image={''} />
  <CardContent>
    <CardHeader>
      Card Header
    </CardHeader>
    Card Content
  </CardContent>
  <CardAction>
    Card Action
  </CardAction>
</Card>
