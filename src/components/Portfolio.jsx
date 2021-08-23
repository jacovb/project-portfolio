import React from 'react';
import Project from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faAws, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons";

import PunchCard from '../images/PunchCard.gif'
import PaymentCalculator from '../images/PaymentCalculator.gif'

export default function Portfolio() {
  return (
    <>
      <h1>PROJECTS</h1>
      <Project 
        name="Punch-Card" 
        gifLink={PunchCard}
        description="An app that makes it easier for employees to add, edit and manage their 
            timesheets and automatically creates reports that can be used by employers for 
            business and resource management"
        demoLink="https://master.d13ledzsxl0qxj.amplifyapp.com/"
        codeLink="https://github.com/jacovb/time-harvest"
      >
        <FontAwesomeIcon icon={faHtml5} style={{color: "#E44D26"}}/>
        <FontAwesomeIcon icon={faCss3} style={{color: "#2965f1"}}/>
        <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F"}}/>
        <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB"}}/>
        <FontAwesomeIcon icon={faAws} style={{color: "#F05340"}}/>
      </Project>

      <Project
        name="Payment-Calculator"
        gifLink={PaymentCalculator}
        description="An app that calculates and vizualises Mortgage Payments. 
            See how Interest Rates and Initial Fixed Rate Periods impact your 
            Oustanding Capital Amount"
        demoLink="https://payment-calculator120.netlify.app/"
        codeLink="https://github.com/jacovb/payment-calculator"
      >
        <FontAwesomeIcon icon={faHtml5} style={{color: "#E44D26"}}/>
        <FontAwesomeIcon icon={faCss3} style={{color: "#2965f1"}}/>
        <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F"}}/>
        <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB"}}/>
      </Project>
    </>
  )
}