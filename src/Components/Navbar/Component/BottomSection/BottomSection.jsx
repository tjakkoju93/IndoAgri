import React from 'react';
import './BottomSectionStyle.scss';
import navbackground from '../../../../assets/navbar.png';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import link from '../../../../assets/Link.png';


const BottomSection = () => {
  return (
    <div className="navbottom" style={{
      backgroundImage: `url(${navbackground})`,
      backgroundsSize: "cover",
      backgroundPosition: "fixed"
    }}>
      <div className="bottom-section" >
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to='/AgriServices'>Agriculture Services</Link>
        <Link to="/Project">Projects</Link>
        <Link to="/News">News</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div className="cart">
        <SearchIcon className="searchicon"/ >
        <div className="cartimg">
        <img src={link} alt="" />
        <sup>0</sup>
        </div>
        
      </div>
    </div>
  );
}

export default BottomSection
