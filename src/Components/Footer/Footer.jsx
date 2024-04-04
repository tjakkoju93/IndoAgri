import React, { Component } from 'react';
import logo from '../Footer/Assets/sprout.png';
import Icons from '../../Components/Header/Icons'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.scss'


const Footer = () => {

  const leaf = ["About", "Services", "Our Project", "Meet the Farmers", "Latest News", "Contact"];
  const contact = [
    {
      id: 1,
      Icon: PhoneIcon,
      detail: "666 888 0000"

    },
    {
      id: 2,
      Icon: MailIcon,
      detail: "needhelp@company.com"

    },
    {
      id: 3,
      Icon: LocationOnIcon,
      detail: "80 broklyn golden street line New York, USA"

    },

  ]

  return (
    <>
      <div className="footer">

        <div className="footer-child">

          <div className="footer-card">
            <div className="footer-logo">
              <img src={logo} alt="" />
              <h2>IndoAgri</h2>
              <h3>Indian Agriculture</h3>

            </div>

            <div className="footer-content">
              <p>There are many variations of passages <span>of lorem ipsum available,but the</span>
                majority suffered.
              </p>
              <Icons />
            </div>

          </div>

          <div className="footercards">
            <div className="foot-header">
              <h2>Explore</h2>
            </div>
            <div className="foot-lines">
              <div className='foot-line'>
              </div>
              <div className='foot-dot'></div>
            </div>
            <div className="foot-content">
              {
                leaf.map((item) => {
                  return (
                    <div className="foot-leaf">
                      <EnergySavingsLeafIcon style={{ color: "#A5A49A" }} />
                      <p>{item}</p>
                    </div>
                  );
                })
              }

            </div>
          </div>

          <div className="footercards">
            <div className="foot-header">
              <h2>News</h2>
            </div>
            <div className="foot-lines">
              <div className='foot-line'>
              </div>
              <div className='foot-dot'></div>
            </div>
            <div className='foot-content'>
              <div className="FoodProd-top">
                <p>Bringing Food Production
                  Back To Cities</p>
                <h3>July 5, 2022</h3>

              </div>
              <div className="FoodProd-top">
                <p>The Future of Farming,
                  Smart Irrigation Solutions</p>
                <h3>July 5, 2022</h3>
              </div>
            </div>
          </div>
          <div className="footercards">
            <div className="foot-header">
              <h2>Contact</h2>
            </div>
            <div className="foot-lines">
              <div className='foot-line'>
              </div>
              <div className='foot-dot'></div>
            </div>
            <div className='foot-content'>
              {contact.map((item) => {
                const { id, Icon, detail } = item;
                return (
                  <div className="foot-details" key={id}>
                    <Icon style={{ color: "#EEC044" }} />
                    <p>{detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
