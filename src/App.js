import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AllJobs from "./views/jobs/AllJobs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <AllJobs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
