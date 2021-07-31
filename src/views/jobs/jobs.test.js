/* eslint-disable no-undef */
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "../../utils/test/test-utils";
import Job from "./AllJobs";

test("renders all jobs page with a job", async () => {
  render(<Job />);
  const linkElement = screen.getByText(/Jobs/i);
  await waitFor(() => screen.getByText("divercity"));
  const divercityElement = screen.getByText(/divercity/i);
  expect(linkElement).toBeInTheDocument();

  expect(divercityElement).toBeInTheDocument();
});

test("should not allow a user apply for job when not logged in", async () => {
  render(<Job />);
  await waitFor(() => screen.getByText("divercity"));

  const applyElement = screen.getByText(/Apply/i);

  fireEvent.click(applyElement);

  const loginToApply = screen.getByTestId(/loginToApply/i);
  expect(loginToApply).toBeInTheDocument();
});
