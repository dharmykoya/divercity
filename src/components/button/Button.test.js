/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("handles clicks event", async () => {
  const CURRENT = "click me";

  const handleClick = jest.fn();

  const { getByText } = render(
    <Button buttonText={CURRENT} handleClick={handleClick} />,
  );

  const element = getByText(CURRENT);

  fireEvent.click(element);

  expect(handleClick).toHaveBeenCalled();
});
