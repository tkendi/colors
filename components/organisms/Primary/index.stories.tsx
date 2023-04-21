import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DarkGrayColorsOrganism from ".";

export default {
  title: "Colors/DarkGray",
  component: DarkGrayColorsOrganism,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DarkGrayColorsOrganism>;

const Template: ComponentStory<typeof DarkGrayColorsOrganism> = args => (
  <DarkGrayColorsOrganism />
);

export const Primary = Template.bind({});
