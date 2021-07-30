import React from "react";
import {
  BrowserRouter as Router, Switch, Route, useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { checkAuth, getUser } from "./utils/helpers/helper";
import AllJobs from "./views/jobs/AllJobs";
import Signin from "./views/signin/Signin";
import { reloadSession } from "./views/signin/signin.action";
import Signup from "./views/signup/Signup";
import store from "./store/store";

if (localStorage.token) {
  const isAuthenticated = checkAuth();
  if (isAuthenticated) {
    const user = getUser();
    store.dispatch(reloadSession(user));
  }
}

function NoMatch() {
  const location = useLocation();

  return (
    <div className="mt-60">
      <div className="text-center m-auto">
        <p className="text-4xl mb-2">No match for</p>
        <code className="text-4xl my-10">{location.pathname}</code>
        <br />
        <h3 className="text-8xl text-gray-500 mt-10">404</h3>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <AllJobs />
          </Route>
          <Route path="/register" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Signin />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
