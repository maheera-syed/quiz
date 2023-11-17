import React from 'react'
import MyNavbar from './components/myNavbar'
import WelcomePage from './components/WelcomePage'
import { AboutUs } from './components/AboutUs'
import Offering from './components/Offering'
import ContactUs from './components/ContactUs'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <MyNavbar />
      <WelcomePage />
      <Offering />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
