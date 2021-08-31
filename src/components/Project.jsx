import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Project({name, gifLink, demoLink, codeLink ,description, projectStyle, children}) {
  return (
    <div className="project-card" id={projectStyle}>
      <div className="card-row-1">
        <div className="image-block">
          <div className={`project-image ${projectStyle}`}>
            <h1 className="project-title">{name}</h1>
            <img src={gifLink} alt={name} />
          </div>
          <div className="project-card-buttons">
            <a href={demoLink} target="_blank" rel="noreferrer noopener" className="project-button demo-button">
              <FontAwesomeIcon icon={faEye} />
              <div>DEMO</div>
            </a>
            <a href={codeLink} target="_blank" rel="noreferrer noopener" className="project-button code-button">
              <FontAwesomeIcon icon={faGithub} />
              <div>CODE</div>
            </a>
          </div>
        </div>
        <div className="tech-list">
          {children}
        </div>
      </div>
      <div className="card-row-2">
        <div className="project-card-description">{description}</div>
        <div className="card-row-2-arrow">
          <div className="arrow-down">
            <FontAwesomeIcon icon={faArrowDown} className="bounce"/>
          </div>
        </div>
      </div>
    </div>
  )
}