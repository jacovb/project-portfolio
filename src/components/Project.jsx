import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Project({name, gifLink, demoLink, codeLink ,description, children}) {
  return (
    <>
      <h3>{name}</h3>
      <img src={gifLink} alt={name} style={{maxWidth: "500px", maxHeight: "500px"}} />
      <div>{description}</div>
      <div className="tech-list">{children}</div>
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
    </>
  )
}