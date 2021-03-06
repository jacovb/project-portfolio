import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faCalculator, faRocket, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ProjectIndex() {

  return (
    <div className="project-card project-index" id="project-index">
      <div className="index-column-1">
        <div className="project-index-title">
          <h1>PROJECT INDEX</h1>
        </div>
        <div className="index-project-list">
          <div className="project-list-box">
            <a href="#punch-card" className="project-link"><div className="index-icon-container"><FontAwesomeIcon icon={faStopwatch}/></div> Punch-Card</a>
            <a href="#calculator" className="project-link"><div className="index-icon-container"><FontAwesomeIcon icon={faCalculator}/></div> Mortgage Payment Calculator</a>
            <a href="#star-wars" className="project-link"><div className="index-icon-container"><FontAwesomeIcon icon={faRocket}/></div> Star Wars App</a>
          </div>
          <div className="arrow-down">
            <FontAwesomeIcon icon={faArrowDown} className="bounce"/>
          </div>
        </div>
      </div>
    </div>
  )
}