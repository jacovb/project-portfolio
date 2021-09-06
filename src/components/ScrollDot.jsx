import React from 'react';

const ScrollDot = ({pageTitle, pageLink, portPage, setPortPage}) => {
  
  function handlePageToggle() {
    setPortPage(pageTitle)
  }
  
  return (
    <div className="dot-container">
      <a href={pageLink}>
        <div className={(pageTitle === portPage) ? "port-active-page" : "port-non-active-page"} onClick={handlePageToggle}></div>
      </a>
    </div>
  )
}

export default ScrollDot;