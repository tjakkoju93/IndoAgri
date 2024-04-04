import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from "react-router-dom";
import Sectiontop from './Component/Sectiontop/Sectiontop';
import SectionMiddle from './Component/Sectionmiddle/SectionMiddle';
import SectionBottom from './Component/SectionBottom/SectionBottom';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Sectiontop/>
      <SectionMiddle/>
      <SectionBottom/>
      <Footer/>
    </div>
  )
}

export default Home
