import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import LayoutContainer from './LayoutContainer';

export default {
  title: 'Components/LayoutContainer',
  component: LayoutContainer
} as Meta;

export const _default: React.FC<{}> = () => <LayoutContainer>
  <p>This component provides page body layout that have <code>max-width</code> of <code>1140px</code> for large screen sizes. You can test viewing this on small/medium/large screen sizes to check its responsiveness and behavior on different screen sizes.</p>
</LayoutContainer>
