import React from 'react'
import './Section2.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import tomatoharvest from '../Assets/tomatoharvest.png'
import leafharvest from '../Assets/leafharvest.png'
import leafyveggies from '../Assets/leafyveggies.png'
import happysenior from '../Assets/happysenior.png'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import greenhouse from '../Assets/greenhouse.png'

const Section2 = () => {
    const cards = [
        {
            id: 1,
            image: tomatoharvest,
            heading: "Quality Standards"
        },
        {
            id: 1,
            image: leafharvest,
            heading: "Organic Farming"
        },
        {
            id: 1,
            image: leafyveggies,
            heading: "Agriculture Products"
        }
    ]

    const shorticon = [
        {
            id: 1,
            Icon: LocalFloristOutlinedIcon,
            name: "Harvesting",
            color: "#4BAF47"
        },
        {
            id: 2,
            Icon: EngineeringOutlinedIcon,
            name: "Maintenance",
            color: "#C5CE38"
        },
        {
            id: 3,
            Icon: LocalShippingOutlinedIcon,
            name: "Fencing",
            color: "#EEC044"
        }

    ]
    return (
        <>
            <div className="development">
                <div className='content'>
                    <h2>Agriculture
                        Matters to the
                        Future of
                        Development</h2>
                </div>
                <div className='arrow'>
                    <PlayArrowIcon className='play' />
                </div>
                <p>Watch our video</p>

            </div >

            <div className="cards">
                {

                    cards.map((item) => {
                        return (
                            <div className="card">
                                <div className='content'>
                                    <h3>{item.heading}</h3>
                                </div>
                                <img src={item.image} alt="" />
                            </div>

                        )
                    })
                }


            </div>

            <div className="healthy">


                <div className="healthyfood">
                    <div className="round">

                    </div>
                    <img src={happysenior} alt="" />
                    <div className="content">
                        <div className="heading">
                            <p>What We Do</p>
                            <h2>Healthy Food for Good Growth</h2>
                        </div>
                        <div className="loremtext">
                            <p>Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit
                                sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo sit met
                                entum cubilia crae onec.</p>
                            <p>Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere dui.
                                Pellentesque venenatis sem non lacus ac auctor.</p>

                        </div>
                        <div className="shorticon">
                            {
                                shorticon.map((item) => {
                                    const { Icon, name, color } = item;
                                    return (
                                        <div className="iconcard" style={{ backgroundColor: { color } }}>
                                            <Icon className='icon' />
                                            <p>{name}</p>
                                        </div>
                                    )
                                })
                            }


                        </div>

                    </div>
                </div>
            </div>

            <div className="greenhouse">
                <div className="greencontent">
                    <p>
                        Agriculture Market Leaders
                    </p>
                    <h3>We’re popular in agriculture market globally</h3>
                </div>
                <button>Discover More</button>
                <img src={greenhouse} alt="" />

            </div>


        </>
    )
}

export default Section2
