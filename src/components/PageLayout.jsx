import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Collapse from "./Collapse";
import Name from "./Name";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";

const PageLayout = ({ activeTab, setActiveTab}) => {
  return (
    <main>
      <div className="header-container">
        <div className="topblock-1">{activeTab === "HOME" ? "" : activeTab}</div>
        <div className="topblock-2"></div>
      </div>
      <div className="sliders">
        <Collapse
          title="HOME"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <Name />
        </Collapse>

        <Collapse
          title="ABOUT"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <About />
        </Collapse>

        <Collapse
          title="PORTFOLIO"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <Portfolio />
        </Collapse>

        <Collapse
          title="CONTACT"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <ContactForm />
        </Collapse>
      </div>
      <div className="grid-container footer-container">
        <div className="block-1"></div>
        <div className="block-2">
        </div>
        <div className="block-3">
          <nav className="contact-button-navbar">
            <a href="https://github.com/jacovb" target="_blank" rel="noreferrer noopener" className="main-navbar-button">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.linkedin.com/in/jaco-van-biljon-62b27422/" target="_blank" rel="noreferrer noopener" className="main-navbar-button">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="#top" className="main-navbar-button" onClick={() => setActiveTab("CONTACT")}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </nav>
        </div>
      </div>
    </main>
  )
}

export default PageLayout
