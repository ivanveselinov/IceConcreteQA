import React from 'react'
import Mailer from './mailer'
import { Fade } from "react-awesome-reveal";



const ContactUs = () => {
  return (
  <Fade left duration={2000}>
    <div className="w-full h-screen pt-24" id="contactUs"> 
      <h1 className="text-center p-10 mt-10 text-4xl xs:text-2xl md:text-2xl lg:text-2xl xl:text-4xl"> ContactUs</h1> 
     <div className="w-3/4 m-auto h-3/4">
        <Mailer/>
     </div>
    </div>
  </Fade>
  )
}

export default ContactUs