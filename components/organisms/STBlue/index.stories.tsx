import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import STBlueOrganism from '.';

export default {
  title: 'Colors/STBlue',
  component: STBlueOrganism,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof STBlueOrganism>;

const Template: ComponentStory<typeof STBlueOrganism> = (args) => <STBlueOrganism />;

export const Primary = Template.bind({})