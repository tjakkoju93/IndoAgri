import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Sectionside from './Components/Sectionside/Sectionside'
import './Shop.scss';

const Shop = () => {
  return (
    <>
    <Navbar/>
    <Header heading="Shop" caption="AGRICULTURE PRODUCTS"/>
    <Sectionside/>
    <Footer/>
    </>
  )
}

export default Shop
