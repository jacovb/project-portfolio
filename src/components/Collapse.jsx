import React, { useRef } from 'react';

const Collapse = ({title, activeTab, setActiveTab, children}) => {

  const parentRef = useRef();

  function handleCollapseToggle() {
      setActiveTab(title)
  }

  return (
    <div className={(activeTab === title) ? "collapse show" : "collapse"}>
      <div className="collapse-heading" onClick={handleCollapseToggle}>
        <div className="collapse-heading-container">
          <p>{title}</p>
        </div>
      </div>

      <div 
        className="collapse-content" 
        ref={parentRef}
        style={(activeTab === title) ? {
            height: parentRef.current.scrollHeight + "px",
            opacity: "1",
          } : {
            height: "0px",
            opacity: "0",
          }} 
        >
        <div 
          className="collapse-content-container"
          style={(activeTab === title) ? {
            height: parentRef.current.scrollHeight + "px",
            opacity: "1",
          } : {
            height: "0px",
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