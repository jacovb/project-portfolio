import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Name() {
  return (
    <div className="name-component">
      <div className="home-text">
        <div className="home-line topline"></div>
        <h1>JACO VAN BILJON</h1>
        <div className="home-text-sub">
          <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> LONDON, UK</h4>
          <h4>FRONT-END DEVELOPER</h4>
        </div>
        <div className="home-line bottomline"></div>
      </div>
      <div className="name-background-fade"></div>
    </div>
  )
}