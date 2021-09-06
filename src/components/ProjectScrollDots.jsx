import React from 'react';
import ScrollDot from './ScrollDot';

const ProjectScrollDots = ({portPage, setPortPage}) => {
  return (
    <>
      <ScrollDot pageTitle="page1" pageLink="#project-index" portPage={portPage} setPortPage={setPortPage} />
      <ScrollDot pageTitle="page2" pageLink="#punch-card" portPage={portPage} setPortPage={setPortPage} />
      <ScrollDot pageTitle="page3" pageLink="#calculator" portPage={portPage} setPortPage={setPortPage} />
      <ScrollDot pageTitle="page4" pageLink="#star-wars" portPage={portPage} setPortPage={setPortPage} />
    </>
  )
}

export default ProjectScrollDots;