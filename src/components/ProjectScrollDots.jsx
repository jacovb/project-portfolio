import React from 'react';

const ProjectScrollDots = ({pageTitle, portPage, setPortPage}) => {
  
  function handlePageToggle() {
    setPortPage(pageTitle)
  }
  
  return (
    <div>
      <div style={(pageTitle === portPage) ? {color: "red"} : {color: "yellow"}}>{pageTitle}</div>
    </div>
  )
}

export default ProjectScrollDots;