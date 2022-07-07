import { render, screen } from "@testing-library/react";
import AppHeader from "./";
import TestWrapper, { makeStore } from "../../utils/TestWrapper";
import renderer from "react-test-renderer";

const store = makeStore();

test("AppHeader: Renders", () => {
  render(TestWrapper(AppHeader, store, { title: "Test" }));
  const headerElement = screen.getByTestId("app-header");
  expect(headerElement).toBeInTheDocument();
});

test("AppHeader: Renders Title", () => {
  render(TestWrapper(AppHeader, store, { title: "Test" }));
  const headerTitleElement = screen.getByTestId("header-title");
  expect(headerTitleElement).toHaveTextContent("Test");
});

test("AppHeader: Renders Basket", () => {
  render(TestWrapper(AppHeader, store, { productsCount: 1 }));
  const basketElement = screen.getByTestId("basket-container");
  expect(basketElement).toBeInTheDocument();
});

test("AppHeader: Snapshot", () => {
  const component = renderer.create(
    TestWrapper(AppHeader, store, { productsCount: 1 })
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
