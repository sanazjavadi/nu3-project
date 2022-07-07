import { render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import TestWrapper, { makeStore } from "../../utils/TestWrapper";
import Input from ".";

const store = makeStore();

describe("Input Tests Cases", () => {
  test("AppInput: Renders", () => {
    render(TestWrapper(Input, store));
    const InputElement = screen.getByLabelText("input");
    expect(InputElement).toBeInTheDocument();
  });

  it("correctly change values when user types", async () => {
    const onChange = jest.fn();
    render(TestWrapper(Input, store, { onChange: onChange }));
    const InputElement = screen.getByLabelText("input");
    userEvent.type(InputElement, "test");

    await waitFor(() => expect(InputElement).toHaveValue("test"));
    expect(onChange).toHaveBeenCalled();
  });
});

test("AppInput: Snapshot", () => {
  const component = renderer.create(TestWrapper(Input, store));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
