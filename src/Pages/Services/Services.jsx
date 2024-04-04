import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const Services = () => {
  return (
    <>
    <Navbar/>
    <Header heading="Services" caption="SERVICES"/>
    <Section1/>
    <Section2/>
    <Footer/>
    </>
  )
}

export default Services
