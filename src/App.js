import React, { useState } from "react";
import "./App.css";
import "./Contact.css";
import "./Portfolio.css";
import "./Tooltip.css";
import PageLayout from "./components/PageLayout";

function App() {
  const [activeTab, setActiveTab] = useState("HOME");

  return (
    <div className="App">
      <PageLayout activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;

// rework grid of header
// maybe move header to footer area?
// rework button to syncronize with tabs.
// calculate correct widths of tabs to coincide with grid
// add content.
