/* eslint-disable no-undef */
import { render, screen } from "./utils/test/test-utils";
import App from "./App";

test("renders learn react link", () => {
  render(
    <App />,
  );
  const linkElement = screen.getByText(/Jobs/i);
  expect(linkElement).toBeInTheDocument();
});
