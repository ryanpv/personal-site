import React from 'react'
import Homepage from '../pages/homepage'
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
          <Homepage />
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
