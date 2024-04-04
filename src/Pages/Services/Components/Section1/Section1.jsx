import React from 'react'
import './Section1.scss';
import riceplant from '../Assets/riceplant.png'
import father from '../Assets/fatherkid.png'
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';;
import harvest from '../Assets/harvested.png'
import driedgrass from '../Assets/driedgrass.png'
import wheat from '../Assets/whaet.png'
import agro from '../Assets/agro.png'
import ferm from '../Assets/ferm.png'
import rices from '../Assets/rices.png'
import agric from '../Assets/agric.png'
import arrow from '../Assets/arrow.png'


const Section1 = () => {

    const service = [
        {
            id: 1,
            image: riceplant,
            Icon: AgricultureOutlinedIcon,
            name: "Agriculture Products"
        },
        {
            id: 2,
            image: father,
            Icon: SpaOutlinedIcon,
            name: "Organic Products"
        },
        {
            id: 3,
            image: harvest,
            Icon: AgricultureOutlinedIcon,
            name: "Agriculture Products"
        },
        {
            id: 4,
            image: driedgrass,
            Icon: AgricultureOutlinedIcon,
            name: "Agriculture Products"
        }

    ]
    return (
        <>

            <div className="service-details">
                {
                    service.map((item) => {
                        const { image, Icon, name } = item
                        return (
                            <div className="card">
                                <img src={image} alt="" />
                                <Icon className='icon' />
                                <div className="name">
                                    <button>Read More</button>
                                    <h3>{name}</h3>

                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className="arrow">
                <img src={arrow} alt="" className='arrow' />
                <img src={wheat} alt="" />
                <img src={agro} alt="" />
                <img src={ferm} alt="" />
                <img src={rices} alt="" />
                <img src={agric} alt="" />

            </div>

            

        </>
    )
}

export default Section1
