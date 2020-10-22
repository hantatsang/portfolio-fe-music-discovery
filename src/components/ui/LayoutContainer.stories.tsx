import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import LayoutContainer from './LayoutContainer';

export default {
  title: 'Components/LayoutContainer',
  component: LayoutContainer
} as Meta;

export const _default: React.FC<{}> = () => <LayoutContainer>
  <p>This component provides page body layout that have <code>max-width</code> for large screen sizes.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti quam, natus numquam, repellendus saepe tenetur esse adipisci dicta laudantium consequatur iure nulla at iusto facere illum nostrum sequi maxime!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti quam, natus numquam, repellendus saepe tenetur esse adipisci dicta laudantium consequatur iure nulla at iusto facere illum nostrum sequi maxime!</p>
</LayoutContainer>
