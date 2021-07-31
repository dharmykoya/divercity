/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "../../utils/test/test-utils";
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

  const element = getByText("Home");
  const loginElement = getByText("Login");
  const registerElement = getByText("Register");

  const menuElement = getByTestId("menu");

  fireEvent.click(menuElement);

  expect(setOpenNavbar).toBeTruthy();

  expect(element).toBeInTheDocument();
  expect(loginElement).toBeInTheDocument();
  expect(registerElement).toBeInTheDocument();
});
