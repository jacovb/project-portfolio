import React, { useState } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

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
              <div className="wrapper">
                <div className="accordion">
                  {data.map((item, i) => (
                    <div className="item" key={i}>
                      <div className="title" onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? "-" : "+"}</span>
                      </div>
                      <div
                        className={selected === i ? "content show" : "content"}
                      >
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default App;
