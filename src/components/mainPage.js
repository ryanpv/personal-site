import React from 'react'
import Homepage from '../pages/homepage'
import PersonalProjects from '../pages/projects'
import Navbar from './navbar'
import ContactUs from './contactForm'
import { useLocation } from 'react-router-dom'

export default function MainPage() {
  const location = useLocation();
console.log("location: ", location)

  return (
    <>
    <div className="sticky top-0">
        <Navbar />
      </div>
          <section id="homepage">
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
