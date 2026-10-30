import React from 'react'
import Header from './Header'
import About from './About'
import Body1 from './Body1'
import Body2 from './Body2'
import Body3 from './Body3'
import Body4 from './Body4.jsx'
import Body5 from './Body5.jsx'
import Musicplayer from './Musicplayer.jsx'
import Weather from './weather.jsx'
import Education from './Education.jsx'
import ContactSection from './ContactSection.jsx'
const Home = () => {
  return (
    <>
    <div className='oveflow-hidden'>
        <Header />
    <Body1 />
    <About></About>
    <Body4></Body4>
    <Body5></Body5>
    <Education></Education>
    <ContactSection></ContactSection>
    </div>
    </>
  )
}

export default Home