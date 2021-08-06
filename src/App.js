import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/layout";

function App() {
  const [activeTab, setActiveTab] = useState("");
  const [pageTitle, setPageTitle] = useState("Home");

  useEffect(() => {
    setActiveTab("Home");
  }, []);

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
