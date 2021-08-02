import React from "react"
import { Link } from 'react-router-dom';

const Layout = ({ pageTitle, children }) => {
  return (
    <main className="header-container">
      <title>{pageTitle}</title>
      <div className="grid-container">
        <div className="block-1"></div>
        <div className="block-2"></div>
        <div className="block-3"></div>
        <div className="block-4 row-start-3 row-end-5 col-start-1 col-end-3 bg-white"></div>
        <div className="block-5 row-start-3 row-end-5 col-start-3 col-end-11 bg-blue-500 ">
          <nav className="flex h-full w-full items-center justify-center">
            <Link
              to="/"
              className="flex-1 bg-white border-2 border-black rounded-full py-2 ml-4 mr-2 text-black text-center hover:bg-blue-700 hover:text-white hover:border-white transition-all duration-300 ease-in-out "
            >
              Home
            </Link>

            <Link
              to="/about"
              className="flex-1 bg-white border-2 border-black rounded-full py-2 mx-2 text-black text-center hover:bg-blue-700 hover:text-white hover:border-white transition-all duration-300 ease-in-out"
            >
              About
            </Link>

            <Link
              to="/page-2"
              className="flex-1 bg-white border-2 border-black rounded-full py-2 ml-2 mr-4 text-black text-center hover:bg-blue-700 hover:text-white hover:border-white transition-all duration-300 ease-in-out"
            >
              Page-2
            </Link>
          </nav>
        </div>
        <div className="row-start-3 row-end-5 col-start-11 col-end-19 bg-yellow-500"></div>
        <div className="row-start-5 row-end-11 col-start-1 col-end-3 bg-white"></div>
        <div className="row-start-5 row-end-11 col-start-3 col-end-13 bg-white">
          <h1>{pageTitle}</h1>
          {children}
        </div>
        <div className="row-start-5 row-end-9 col-start-13 col-end-19 bg-white"></div>
        <div className="row-start-9 row-end-11 col-start-13 col-end-19 bg-blue-500"></div>
        <div className="row-start-11 row-end-13 col-start-1 col-end-3 bg-white"></div>
        <div className="row-start-11 row-end-13 col-start-3 col-end-6 bg-red-500"></div>
        <div className="row-start-11 row-end-13 col-start-6 col-end-11 bg-white"></div>
        <div className="row-start-11 row-end-13 col-start-11 col-end-19 bg-white"></div>
      </div>
    </main>
  )
}

export default Layout
