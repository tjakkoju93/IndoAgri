import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/components/Header/Header'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'


const About = () => {
  return (
    <>
      <Navbar />
      <Header heading="About" caption="ABOUT" />
      <Section1 />
      <Section2/>

      <Footer />

    </>
  )
}

export default About
