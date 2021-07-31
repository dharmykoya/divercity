/* eslint-disable no-undef */
import { render, screen } from "../../utils/test/test-utils";
import Job from "./AllJobs";

test("renders learn react link", () => {
  const { debug } = render(<Job />);
  debug();
  const linkElement = screen.getByText(/Jobs/i);
//   const divercityElement = screen.getByText(/divercity/i);
  expect(linkElement).toBeInTheDocument();
});
