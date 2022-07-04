import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Showcase } from '../components/Showcase';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Showcase',
  component: Showcase,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: React.Children
  },
} as ComponentMeta<typeof Showcase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Showcase> = (args) => <Showcase {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: undefined
};

export const HasContent = Template.bind({});
HasContent.args = {
    children: React.createElement('p', {}, "Storybook demo!")
}