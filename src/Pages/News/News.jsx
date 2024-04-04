import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/components/Header/Header'
import Newssection from './NewsComponents/Newssection'

const News = () => {
  return (
    <>

    <Navbar/>
    <Header heading="News Grid" caption="NEWS GRID"></Header>
    <Newssection/>
    <Footer/>
    
    </>
  )
}

export default News
