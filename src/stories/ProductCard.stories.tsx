import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCard from "src/components/ProductCard";

export default {
  title: "Example/ProductPage",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
