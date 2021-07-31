/* eslint-disable react/prop-types */
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { MemoryRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Import your own reducer
import rootReducer from "../../store/rootReducer";

const middleware = [thunk];
function render(
  ui,
  {
    preloadedState,
    store = createStore(rootReducer, applyMiddleware(...middleware)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
