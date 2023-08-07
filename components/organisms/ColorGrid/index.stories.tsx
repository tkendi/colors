import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColorGridOrganism from '.';

export default {
  title: 'Colors/Template',
  component: ColorGridOrganism,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ColorGridOrganism>;

const Template: ComponentStory<typeof ColorGridOrganism> = (args) => (
  <ColorGridOrganism />
);

export const Primary = Template.bind({});
