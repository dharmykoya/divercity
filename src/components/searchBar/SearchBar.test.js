/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("handles clicks event on search component", async () => {
  const CURRENT = "developer";

  const handleClick = jest.fn((e) => e.preventDefault);
  const handleSearchChange = jest.fn((e) => e.preventDefault);

  const { getByText, getByPlaceholderText } = render(
    <SearchBar
      searchValue={CURRENT}
      handleSearch={handleClick}
      handleSearchValue={handleSearchChange}
    />,
  );

  const element = getByText("search");
  const inputElement = getByPlaceholderText("search for jobs");

  expect(inputElement.value).toBe(CURRENT);
  fireEvent.change(inputElement, { target: { value: "dev" } });
  fireEvent.submit(element);

  expect(handleSearchChange).toHaveBeenCalled();
  expect(handleClick).toHaveBeenCalled();
});
