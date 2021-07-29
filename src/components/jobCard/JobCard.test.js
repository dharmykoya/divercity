/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";

test("handles clicks event", async () => {
  const { getByText } = render(<JobCard />);

  const element = getByText("location");

  expect(element).toBeInTheDocument();
});
