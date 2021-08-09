import React from 'react';

const Collapse = ({title, activeTab, setActiveTab, children}) => {
  
  function handleCollapseToggle() {
      setActiveTab(title)
      document.title = title
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
            overflow: "scroll",
          } : {
            opacity: "0",
          }} 
        >
          
        <div 
          className="collapse-content-container"
          style={(activeTab === title) ? {
            opacity: "1",
          } : {
            opacity: "0",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Collapse;