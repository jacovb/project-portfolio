import React from "react"
import HomeIcon from '@material-ui/icons/Home';
import Collapse from "./Collapse";

const Layout = ({ setPageTitle, activeTab, setActiveTab}) => {
  
  return (
    <main>
      <div className="header-container">
        <div className="topblock-1"></div>
        <div className="topblock-2"></div>
      </div>
      <div className="sliders">
        <Collapse
          title="Home"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <div>Home Content</div>
        </Collapse>

        <Collapse
          title="About"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <div>About Content</div>
        </Collapse>

        <Collapse
          title="Portfolio"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p>
        </Collapse>

        <Collapse
          title="Contact"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <div>Contact Content</div>
        </Collapse>
      </div>
      <div className="grid-container footer-container">
        <div className="block-1">
          <button
            className="home-button"
            onClick={() => setPageTitle("Home")}
            >
            <HomeIcon />
          </button>
        </div>
        <div className="block-2">
          <nav className="main-navbar">
            <button
              className="main-navbar-button"
              onClick={() => setPageTitle("About")}
            >
              About
            </button>

            <button
              className="main-navbar-button"
              onClick={() => setPageTitle("Portfolio")}
            >
              Portfolio
            </button>

            <button
              className="main-navbar-button"
              onClick={() => setPageTitle("Contact")}
            >
              Contact
            </button>
          </nav>
        </div>
        <div className="block-3"></div>
      </div>
    </main>
  )
}

export default Layout
