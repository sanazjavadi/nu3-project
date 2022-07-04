import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "src/components/Select";

export default {
  title: "Example/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
