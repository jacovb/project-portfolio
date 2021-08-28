import React from 'react';

export default function ProjectIndex() {

  return (
    <div className="project-card project-index">
      <div className="index-column-1">
        <div className="project-index-title">
          <h1>PROJECT INDEX</h1>
        </div>
        <div className="index-project-list">
          <div className="project-list-box">
            <a href="#punch-card-styles">Punch-Card</a>
            <a href="#calculator-styles">Mortgage Payment Calculator</a>
            <a href="#star-wars-styles">Star Wars App</a>
          </div>
        </div>
      </div>
      <div className="index-column-2"></div>
    </div>
  )
}