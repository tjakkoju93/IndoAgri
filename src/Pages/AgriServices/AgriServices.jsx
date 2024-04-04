import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Sideandmain from './Components/Sideandmain/Sideandmain'
import Header from '../../Components/Header/components/Header/Header'

const AgriServices = () => {
  return (
    <>
    <Navbar />
    <Header heading="Services" caption="AGRICULTURE PRODUCTS"/>
    <Sideandmain />
    <Footer/>
    </>
  )
}

export default AgriServices
