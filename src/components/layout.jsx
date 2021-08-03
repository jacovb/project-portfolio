import React from "react"
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const Layout = ({ pageTitle, children }) => {
  return (
    <main className="header-container">
      <title>{pageTitle}</title>
      <div className="grid-container">
        <div className="block-1"></div>
        <div className="block-2">
          <nav className="main-navbar">
            <Link
              to="/about"
              className="main-navbar-button"
            >
              About
            </Link>

            <Link
              to="/portfolio"
              className="main-navbar-button"
            >
              Portfolio
            </Link>

            <Link
              to="/contact"
              className="main-navbar-button"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="block-3"></div>
        <div className="block-4">
          <Link
            to="/"
            className="home-button"
            >
            <HomeIcon />
          </Link>
          
        </div>
        <div className="block-5"></div>
        <div className="block-6"></div>
      </div>
          <h1>{pageTitle}</h1>
          {children}
    </main>
  )
}

export default Layout
