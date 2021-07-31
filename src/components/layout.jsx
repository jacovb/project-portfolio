import * as React from "react"

const Layout = ({ pageTitle, children }) => {
  return (
    <main className="mx-auto bg-gray-900 h-screen w-screen">
      <title>{pageTitle}</title>
      <div
        id="grid"
        className="grid grid-cols-18 grid-rows-12 w-full h-full gap-2"
      >
        <h1 className="row-start-1 row-end-3 col-start-1 col-end-3 text-white w-full h-full bg-red-500">
          Hello
        </h1>
        <div className="row-start-1 row-end-3 col-start-3 col-end-13 bg-white"></div>
        <div className="row-start-1 row-end-3 col-start-13 col-end-19 bg-white"></div>
        <div className="row-start-3 row-end-5 col-start-1 col-end-3 bg-white"></div>
        <div className="row-start-3 row-end-5 col-start-3 col-end-11 bg-blue-500 ">
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
