import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { CardAction, CardContent, CardHeader, CardImage } from '.';
import img from '../assets/michael-48yI_ZyzuLo-unsplash.jpg';
import Card from './Card';
export default {
  title: 'Composed Components/Card',
  component: Card
} as Meta;

export const _default: React.FC<{}> = () => <Card>
  <CardImage image={img} />
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
