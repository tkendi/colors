import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ColorsTemplate from ".";

export default {
  title: "Colors/Color",
  component: ColorsTemplate,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["Primary", "Info", "Warning", "Danger", "Success"]
      }
    }
  },
} as ComponentMeta<typeof ColorsTemplate>;

const Template: ComponentStory<typeof ColorsTemplate> = args => (
  <ColorsTemplate {...args} />
);

export const Primary = Template.bind({});
