import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
// import useCard from "src/hooks/useCard";
import TestWrapper, { makeStore } from "../../utils/TestWrapper";
// import { renderHook } from "@testing-library/react-hooks";
import Button from "./";

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

describe("Button Tests Cases", () => {
  test("Button: Render Button with More Than 1 Qty", () => {
    render(TestWrapper(Button, store, { id: MockData[0].id }));
    const initialButtonElement = screen.getByTestId("initial-button");

    expect(initialButtonElement).toBeInTheDocument();
  });

  test("Button: onClick should be called", () => {
    const onClick = jest.fn();
    render(
      TestWrapper(Button, store, {
        id: MockData[0].id,
        handleClick: onClick,
      })
    );

    const initialButtonElement = screen.getByTestId("initial-button");
    fireEvent.click(initialButtonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

test("Button: Snapshot", () => {
  const component = renderer.create(
    TestWrapper(Button, store, { id: MockData[0].id })
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
