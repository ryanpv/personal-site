import React from 'react'
import Aboutpage from '../pages/aboutPage'
import PersonalProjects from '../pages/projects'
import ContactUs from './contactForm'
import { ScrollerHandler } from './scrollHandler'
import LandingPage from '../pages/landingPage'

export default function MainPage() {

  return (
    <>
    <ScrollerHandler />
      <section id="home">
        <div className=''>
          <LandingPage />
        </div>
      </section>

      <section id="about">
        <div>
          <Aboutpage />
        </div>
      </section>

      <section id="projects">
        <div>
          <PersonalProjects />
        </div>
      </section>

      <section id="contact">
        <div>
          <ContactUs />
        </div>
      </section>
    </>

  )
}
