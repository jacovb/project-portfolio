import React from 'react';
import Project from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faAws, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons";

import PunchCard from '../images/PunchCard.gif'
import PaymentCalculator from '../images/PaymentCalculator.gif'
import StarWarsApp from '../images/StarWarsApp.gif'

export default function Portfolio() {
  return (
    <div className="project-slider">
      <Project 
        name="Punch-Card" 
        gifLink={PunchCard}
        description="Employees Add, Edit and Manage 
            timesheet entries and automatically creates reports that can be used by employers for 
            business and resource management"
        demoLink="https://master.d13ledzsxl0qxj.amplifyapp.com/"
        codeLink="https://github.com/jacovb/time-harvest"
        projectStyle="punch-card-styles"
      >
        <FontAwesomeIcon icon={faHtml5} style={{color: "#E44D26"}}/>
        <FontAwesomeIcon icon={faCss3} style={{color: "#2965f1"}}/>
        <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F"}}/>
        <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB"}}/>
        <FontAwesomeIcon icon={faAws} style={{color: "#F05340"}}/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" alt="graphql" height="21px" />
      </Project>

      <Project
        name="Mortgage Payment Calculator"
        gifLink={PaymentCalculator}
        description="Calculates and vizualises Mortgage Payments. 
            See how Interest Rates and Initial Fixed Rate Periods impact your 
            Oustanding Capital Amount"
        demoLink="https://payment-calculator120.netlify.app/"
        codeLink="https://github.com/jacovb/payment-calculator"
        projectStyle="calculator-styles"
      >
        <FontAwesomeIcon icon={faHtml5} style={{color: "#E44D26"}}/>
        <FontAwesomeIcon icon={faCss3} style={{color: "#2965f1"}}/>
        <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F"}}/>
        <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB"}}/>
      </Project>

      <Project
        name="Star Wars App"
        gifLink={StarWarsApp}
        description="My introduction to API requests, React Hooks and React Router, 
            mixed with a bit of fun styling"
        demoLink="https://star-wars-app200.netlify.app/"
        codeLink="https://github.com/jacovb/star-wars-app"
        projectStyle="star-wars-styles"
      >
        <FontAwesomeIcon icon={faHtml5} style={{color: "#E44D26"}}/>
        <FontAwesomeIcon icon={faCss3} style={{color: "#2965f1"}}/>
        <FontAwesomeIcon icon={faJs} style={{color: "#F0DB4F"}}/>
        <FontAwesomeIcon icon={faReact} style={{color: "#61DBFB"}}/>
      </Project>
    </div>
  )
}