import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout pageTitle="Home">
              <div>HomePage Content</div>
            </Layout>
          </Route>

          <Route exact path="/about">
            <Layout pageTitle="About">
              <div>About Content</div>
            </Layout>
          </Route>

          <Route exact path="/portfolio">
            <Layout pageTitle="Portfolio">
              <div>Portfolio Content</div>
            </Layout>
          </Route>

          <Route exact path="/contact">
            <Layout pageTitle="Contact">
              <div>Contact Content</div>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
