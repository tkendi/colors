import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Colors from ".";

export default {
  title: "Colors/All",
  component: Colors,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = args => (
  <Colors />
);

export const Primary = Template.bind({});
