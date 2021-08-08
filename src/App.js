import React, { useState } from "react";
import "./App.css";
import Layout from "./components/layout";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [pageTitle, setPageTitle] = useState("Home");

  return (
    <div className="App">
      <Layout
        pageTitle={pageTitle}
        setPageTitle={setPageTitle}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default App;

// rework grid of header
// maybe move header to footer area?
// rework button to syncronize with tabs.
// calculate correct widths of tabs to coincide with grid
// add content.
