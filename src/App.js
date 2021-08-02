import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout pageTitle="Header">
          <div>content for Layout</div>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
