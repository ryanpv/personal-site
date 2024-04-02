import React from 'react'
import { useLocation } from 'react-router-dom'
import { elementToTop } from '../components/navScroller';

export default function LandingPage() {
  const location = useLocation();
  const [loadDelay, setLoadDelay] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoadDelay(false);
    }, 1000)
  },[]);

  const Heading = () => {
    return (
      <div 
        className='flex flex-col space-y-8 items-center justify-center min-h-screen'

      >
        <div 
          className={ ` flex text-white flex-col text-6xl` }
          data-aos='fade-down' 
          data-aos-duration='1500'
          >
          <h1>Hello, I'm <span className='text-orange-400'>Ryan</span>.</h1>
          <h1>I'm a full-stack developer</h1>
        </div>
        <div 
          className={ `transition-all duration-200 ease-in rounded text-orange-400 border-2 py-2 px-4 text-2xl hover:bg-orange-100 hover:border-orange-100` }
          data-aos='zoom-in' 
          data-aos-duration='800'
          data-aos-delay='800'
          data-aos-easing='ease-in'
          >
          <a 
            href={ location.pathname.includes("/blogs") ? "/#/about" : "#/about" }
            onClick={ () => elementToTop(location) }
          >View my profile</a>
        </div>
      </div>
    )
  }

  return (
    <div 
      className='min-h-screen z-40' 
      style={{ backgroundImage: `url(${require('../starry-sky.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
     { !loadDelay ? <Heading /> : null }
    </div>
  )
}
