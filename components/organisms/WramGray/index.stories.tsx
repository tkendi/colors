import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WarmGrayColorsOrganism from ".";

export default {
  title: "Colors/WarmGray",
  component: WarmGrayColorsOrganism,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WarmGrayColorsOrganism>;

const Template: ComponentStory<typeof WarmGrayColorsOrganism> = args => (
  <WarmGrayColorsOrganism />
);

export const Primary = Template.bind({});
