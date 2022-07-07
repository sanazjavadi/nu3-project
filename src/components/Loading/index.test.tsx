import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TestWrapper, { makeStore } from "../../utils/TestWrapper";
import Loading from "./";

const store = makeStore();

describe("Loading Tests Cases", () => {
  test("AppBasket: Renders", () => {
    render(TestWrapper(Loading, store));
    const LoadingElement = screen.getByTestId("loading");
    expect(LoadingElement).toBeInTheDocument();
  });
});

test("AppLoading: Snapshot", () => {
  const component = renderer.create(TestWrapper(Loading, store));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
