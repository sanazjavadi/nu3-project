import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppHeader } from '../components/AppHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AppHeader',
  component: AppHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      "name": "title",
      "type": "string"
    },
  },
} as ComponentMeta<typeof AppHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppHeader> = (args) => <AppHeader {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "Lorem Ipsum!"
};