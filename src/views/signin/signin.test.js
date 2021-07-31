/* eslint-disable no-undef */
import {
  fireEvent,
  render,
  screen,
} from "../../utils/test/test-utils";
import Signin from "./Signin";

test("renders signin page", async () => {
  render(<Signin />);
  const welcomeElement = screen.getByText(/Welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("should validate input on signin", async () => {
  render(<Signin />);
  const signinElement = screen.getByText(/Sign in/i);
  expect(signinElement).toBeInTheDocument();
  fireEvent.click(signinElement);
  const userNameError = screen.getByText(/Please username is required/i);
  const passwordError = screen.getByText(/Please password is required/i);

  expect(userNameError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
});
