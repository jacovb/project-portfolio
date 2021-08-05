import React from 'react';

const Collapse = ({title, activeTab, setActiveTab}) => {
  return (
    <div className="collapse">
      <div className="collapse-heading">
        <div className="collapse-heading-container">
          <p>{title}</p>
          <span onClick={() => setActiveTab(title)}>
            {activeTab === title ? "-" : "+"}
          </span>
        </div>
      </div>

      <div className={(activeTab === title ? "show" : "" ) + " collapse-content"}>
        <div className="collapse-content-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Collapse;