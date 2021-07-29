/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./App";

const mockStore = configureMockStore([thunk]);
test("renders learn react link", () => {
  const store = mockStore({
    jobs: { jobs: [] },
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Jobs/i);
  expect(linkElement).toBeInTheDocument();
});
