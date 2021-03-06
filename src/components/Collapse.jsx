import React from 'react';

const Collapse = ({title, activeTab, setActiveTab, children}) => {
  
  function handleCollapseToggle() {
      setActiveTab(title)
  }

  return (
    <div className={(activeTab === title) ? "collapse show" : "collapse"} onClick={handleCollapseToggle}>
      <div className={(activeTab === title) ? "collapse-heading-show" : "collapse-heading"}>
        <div className="collapse-heading-container">
          <p>{title}</p>
        </div>
      </div>

      <div 
        className="collapse-content"
        style={(activeTab === title) ? {
            opacity: "1",
            overflow: "auto",
            visibility: "visible",
            transitionDelay: "0.3s",
          } : {
            opacity: "0",
            visibility: "hidden",
            overflow: "hidden",
          }} 
        >
          {children}
      </div>
    </div>
  )
}

export default Collapse;