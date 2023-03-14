import React from 'react'
import Home from '../../home/Home'
import About from '../aboutUs/About'
import ContactUs from '../contactUs/ContactUs'
import Foother from '../header/foother/Foother'
import Projects from '../Projects/Projects'

const MainDashBoard = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <ContactUs/>
      <Foother/>
    </div>
  )
}

export default MainDashBoard