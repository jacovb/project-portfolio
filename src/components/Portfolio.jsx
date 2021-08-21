import React from 'react';
import Project from './Project';

export default function Portfolio() {
  return (
    <>
      <h1>PROJECTS</h1>
      <Project 
        name="Punch-Card" 
        gifLink="https://giphy.com/embed/0DFXQqk3XPfLxgomLY"
        description="An app that makes it easier for employees to add, edit and manage their 
            timesheets and automatically creates reports that can be used by employers for 
            business and resource management"
        demoLink="https://master.d13ledzsxl0qxj.amplifyapp.com/"
        codeLink="https://github.com/jacovb/time-harvest"
      />
    </>
  )
}