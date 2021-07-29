/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("renders navbar with the right content", async () => {
  const setOpenNavbar = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation((openNavbar) => [openNavbar, setOpenNavbar]);
  const { getByText, getByTestId } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  const element = getByText("Name");
  const loginElement = getByText("UserName");

  const menuElement = getByTestId("menu");

  fireEvent.click(menuElement);

  expect(setOpenNavbar).toBeTruthy();

  expect(element).toBeInTheDocument();
  expect(loginElement).toBeInTheDocument();
});
