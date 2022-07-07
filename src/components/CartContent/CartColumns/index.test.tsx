import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import CartColumns from "./";
import TestWrapper, { makeStore } from "../../../utils/TestWrapper";

const store = makeStore();

describe("CartColumns Tests Cases", () => {
  test("CartColumns: Renders", () => {
    render(TestWrapper(CartColumns, store));
    const cartTableHeaderElement = screen.getByTestId("cart-columns-container");
    expect(cartTableHeaderElement).toBeInTheDocument();
  });

  test("CartColumns: Renders Image Column Header", () => {
    render(TestWrapper(CartColumns, store));
    const imageColumnHeaderElement = screen.getByTestId("image-column-header");
    expect(imageColumnHeaderElement).toBeInTheDocument();
  });

  test("CartColumns: Renders Item Column Header", () => {
    render(TestWrapper(CartColumns, store));
    const itemColumnHeaderElement = screen.getByTestId("item-column-header");
    expect(itemColumnHeaderElement).toBeInTheDocument();
  });

  test("CartColumns: Renders Price Column Header", () => {
    render(TestWrapper(CartColumns, store));
    const priceColumnHeaderElement = screen.getByTestId("price-column-header");
    expect(priceColumnHeaderElement).toBeInTheDocument();
  });

  test("CartColumns: Renders Quantity Column Header", () => {
    render(TestWrapper(CartColumns, store));
    const quantityColumnHeaderElement = screen.getByTestId(
      "quantity-column-header"
    );
    expect(quantityColumnHeaderElement).toBeInTheDocument();
  });

  test("CartColumns: Renders Subtotal Column Header", () => {
    render(TestWrapper(CartColumns, store));
    const subtotalColumnHeaderElement = screen.getByTestId(
      "subtotal-column-header"
    );
    expect(subtotalColumnHeaderElement).toBeInTheDocument();
  });
});

test("CartColumns: Snapshot", () => {
  const component = renderer.create(TestWrapper(CartColumns, store));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
