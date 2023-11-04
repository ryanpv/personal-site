import React from 'react'
import Homepage from '../pages/homepage'
import PersonalProjects from '../pages/projects'
import ContactUs from './contactForm'

export default function MainPage() {

  return (
    <>
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
