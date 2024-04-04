import React from 'react'
import agriimg from '../../../../assets/sprout.png'
import './TopSectionStyle.css'
import Icons from '../../../Header/Icons';


const TopSection = () => {
    return (

        <div className="top-section">

            <div className="logo">
                <img src={agriimg} alt="" />
                <h2>IndoAgri</h2>
                <h3>Indian Agriculture</h3>
            </div>

            <div className="address">
                <Icons className='Icons' />
                <div className='address-content1'>
                    <h3>Call anytime</h3>
                    <h2>+98 (000) - 9630</h2>
                </div>
                <div className='address-content'>
                    <h3>Send email</h3>
                    <h2>ambed@agrios.com</h2>
                </div>
                <div className='address-content'>
                    <h3>380 St Kilda Road</h3>
                    <h2>Melbourne, Australia</h2>
                </div>
            </div>
        </div>

    )
}

export default TopSection
