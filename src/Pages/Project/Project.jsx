import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ProjectSection from './ProjectComponents/SectionTop/ProjectSection'
import Header from '../../Components/Header/components/Header/Header'

const Project = () => {
  return (
    <>
    <Navbar/>
    <Header  heading="Projects" caption="HEALTHY FOOD"/>
    <ProjectSection/>
    <Footer/>
    </>
  );
}

export default Project
