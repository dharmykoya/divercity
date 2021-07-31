/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "../../utils/test/test-utils";
import Modal from "./Modal";

test("should render the modal element", async () => {
  const { getByText } = render(
    <Modal
      open
      onClose={jest.fn()}
      modalClass="w-3/4"
    >
      <div>Hello</div>
    </Modal>,
  );

  const element = getByText("Hello");

  expect(element).toBeInTheDocument();
});
