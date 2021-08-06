import React, { useRef } from 'react';

const Collapse = ({title, activeTab, setActiveTab, children}) => {

  const parentRef = useRef();

  function handleCollapseToggle() {
    if(activeTab === title) {
      setActiveTab("");
    } else {
      setActiveTab(title)
    }
  }

  return (
    <div className="collapse">
      <div className="collapse-heading" onClick={handleCollapseToggle}>
        <div className="collapse-heading-container">
          <p>{title}</p>
          <span>
            {activeTab === title ? "-" : "+"}
          </span>
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
        <div className="collapse-content-container">
          {children}
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Collapse;