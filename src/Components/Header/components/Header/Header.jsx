import React from 'react'
import headerImg from "../Assets/background.png"
import './Header.scss'
import BottomSection from '../../../Navbar/Component/BottomSection/BottomSection'
import TopSection from '../../../Navbar/Component/TopSection/TopSection'

const Header = ({ heading,caption }) => {
  return (
    <>
      <section className="header" style={{ backgroundImage: `url(${headerImg})`, backgroundsSize: "cover", backgroundPosition: "fixed" }}>
        <p>Home / {caption}</p>
        <h1>{heading}</h1>

      </section>
    </>
  )
}

export default Header
