import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScreenResize = () => {
      if (window.innerWidth >= 1024) setNavbarOpen(false);
    };

    window.addEventListener('resize', handleScreenResize);

    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);

  return (
  <nav className={`container navbar ${ navbarOpen ? 'rounded' : 'rounded-full' } relative flex flex-wrap items-center justify-between py-3 mb-3 bg-orange-400 opacity-70`}>    
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a
          className="text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          href="/#"
        >
          Ryan Voong
        </a>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href={ location.pathname.includes("/blogs") ? "/#/" : "#" }
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href={ location.pathname.includes("/blogs") ? "/#/projects" : "#/projects" }
              // >
              >
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="/#/blogs"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blogs</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href={ location.pathname.includes("/blogs") ? "/#/contact" : "#/contact" }
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
