import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AllJobs from "./views/jobs/AllJobs";
import Signin from "./views/signin/Signin";
import Signup from "./views/signup/Signup";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
