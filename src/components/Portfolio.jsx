import React from 'react';
import Project from './Project';

export default function Portfolio() {
  return (
    <>
      <h1>PROJECTS</h1>
      <Project 
        name="Punch-Card" 
        description="An app that makes it easier for employees to add, edit and manage their 
            timesheets and automatically creates reports that can be used by employees for 
            business and resource management"
      />
    </>
  )
}