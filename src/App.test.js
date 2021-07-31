/* eslint-disable no-undef */
import { setupServer } from "msw/node";
import { render, screen } from "./utils/test/test-utils";
import App from "./App";

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("renders learn react link", () => {
  const { debug } = render(
    <App />,
  );
  // console.log(45, debug);
  debug();
  const linkElement = screen.getByText(/Jobs/i);
  expect(linkElement).toBeInTheDocument();
});
