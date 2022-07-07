import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TestWrapper, { makeStore } from "../../utils/TestWrapper";
import Basket from "./";

const store = makeStore();

describe("Basket Tests Cases", () => {
  test("AppBasket: Renders", () => {
    render(TestWrapper(Basket, store, { productsCount: 1 }));
    const basketElement = screen.getByTestId("basket-container");
    expect(basketElement).toBeInTheDocument();
  });

  test("AppBasket: Show Product Count In Basket", () => {
    render(TestWrapper(Basket, store, { productsCount: 1 }));
    const basketElement = screen.getByTestId("basket-container");
    expect(basketElement).toContainHTML("1");
  });
});

test("AppBasket: Snapshot", () => {
  const component = renderer.create(
    TestWrapper(Basket, store, { productsCount: 1 })
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
