/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TestWrapper, { makeStore } from "../../utils/TestWrapper";
import ProductCart from "./";

const store = makeStore();
const MockData = [
  {
    price: 13.99,
    image:
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/4_252F5_252F3_252F4_252F453437c2922e342acc8db2a47e2a24ee197fe940_20174_9807111a-5f4b-4430-a21b-3809799931aa_large.jpg?v=1623047667",
    vendor: "BEAVITA",
    title: "BEAVITA Vitalkost Diät-Shake",
    id: "4365140131921",
    link: "/products/beavita-vitalkost-diaet-shake",
  },
];
describe("ProductCart Tests Cases", () => {
  test("ProductCart: Renders", () => {
    render(TestWrapper(ProductCart, store, MockData[0]));
    const productCartElement = screen.getByTestId("product-cart-container");
    expect(productCartElement).toBeInTheDocument();
  });

  it("should render a product image", () => {
    render(TestWrapper(ProductCart, store, MockData[0]));
    const productCardImage = screen.getByRole("img");
    expect(productCardImage).toBeInTheDocument();

    expect(productCardImage.getAttribute("src")).toBe(MockData[0].image);
  });

  it("should render a product title", () => {
    render(TestWrapper(ProductCart, store, MockData[0]));
    const productCardTitle = screen.getByText("BEAVITA Vitalkost Diät-Shake");
    expect(productCardTitle).toBeInTheDocument();
  });

  it("should render the product link", () => {
    render(TestWrapper(ProductCart, store, MockData[0]));
    const productCardTitle = screen.getByText("BEAVITA Vitalkost Diät-Shake");
    expect(productCardTitle.closest("a")?.href).toBe(
      "http://localhost/product-detail-page"
    );
  });
});

test("ProductCart: Snapshot", () => {
  const component = renderer.create(TestWrapper(ProductCart, store));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
