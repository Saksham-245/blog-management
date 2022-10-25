import React from "react";

export function Header() {
  const [showNav, setShowNav] = React.useState(false)
  const toggleNav = () => setShowNav(!showNav)

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-3xl tracking-tight">Blog</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleNav}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div
        className={`${
          showNav ? 'block' : 'hidden'
        }
        w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 mr-4"
          >
            Home
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
