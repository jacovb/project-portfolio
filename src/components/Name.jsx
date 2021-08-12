import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Name() {
  return (
    <div>
      <h1 style={{margin: "0 auto 0 auto"}}>JACO VAN BILJON</h1>
      <div style={{display: "flex", justifyContent: "space-between", width: "380px", margin: "auto"}}>
        <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> LONDON, UK</h4>
        <h4>FRONT-END DEVELOPER</h4>
      </div>
    </div>
  )
}