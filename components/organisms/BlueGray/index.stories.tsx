import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BlueGrayColorsOrganism from ".";

export default {
  title: "Colors/BlueGray",
  component: BlueGrayColorsOrganism,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof BlueGrayColorsOrganism>;

const Template: ComponentStory<typeof BlueGrayColorsOrganism> = args => (
  <BlueGrayColorsOrganism />
);

export const Primary = Template.bind({});
