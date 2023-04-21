import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LightGrayColorsOrganism from ".";

export default {
  title: "Colors/LightGray",
  component: LightGrayColorsOrganism,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LightGrayColorsOrganism>;

const Template: ComponentStory<typeof LightGrayColorsOrganism> = args => (
  <LightGrayColorsOrganism />
);

export const Primary = Template.bind({});
