import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "src/components/Button";

export default {
  title: "Example/button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
