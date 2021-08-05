import React, { useState } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Collapse from "./components/Collapse";

function App() {
  const [activeTab, setActiveTab] = useState("");

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
              <Collapse
                title="Home"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <Collapse
                title="About"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <Collapse
                title="Portfolio"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <Collapse
                title="Contact"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </Layout>
          </Route>

          <Route exact path="/contact">
            <Layout pageTitle="Contact">
              <div>Contact content</div>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
