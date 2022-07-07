import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import TestWrapper, { makeStore } from "../../utils/TestWrapper";
import Select from "./";

const store = makeStore();
const mockOptionsProps = [
  {
    title: "Shuffle",
    value: "shuffle",
  },
];

describe("Select Tests Cases", () => {
  test("AppSelect: Renders", () => {
    render(TestWrapper(Select, store));
    const selectElement = screen.getByLabelText("select");
    expect(selectElement).toBeInTheDocument();
  });

  it("renders options elements", () => {
    render(
      TestWrapper(Select, store, {
        options: mockOptionsProps,
      })
    );
    const selectElement = screen.getByLabelText("select");
    expect(selectElement.childNodes).toHaveLength(mockOptionsProps.length);
  });

  it("Should select any value", () => {
    const onChange = jest.fn();
    render(
      TestWrapper(Select, store, {
        options: mockOptionsProps,
        onChange: onChange,
      })
    );
    const selectElement: HTMLSelectElement = screen.getByLabelText("select");
    fireEvent.change(selectElement, { target: { value: "shuffle" } });
    expect(selectElement.value).toBe("shuffle");
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("Should be disabled", () => {
    render(
      TestWrapper(Select, store, {
        options: mockOptionsProps,
        disabled: true,
      })
    );
    const selectElement: HTMLSelectElement = screen.getByLabelText("select");
    expect(selectElement).toBeDisabled();
  });
});

test("AppSelect: Snapshot", () => {
  const component = renderer.create(
    TestWrapper(Select, store, {
      options: mockOptionsProps,
    })
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
