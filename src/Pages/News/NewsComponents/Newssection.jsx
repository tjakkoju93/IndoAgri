import React from 'react'
import './Newssection.scss'
import Familia from '../Assets/Familia.png'
import familytime from '../Assets/familytime.png'
import grasswomen from '../Assets/grasswomen.png'
import rawtomato from '../Assets/rawtomato.png'
import truck from '../Assets/truck.png'
import replanting from '../Assets/replanting.png'
import vector3 from '../Assets/Vector-3.png'
import vector4 from '../Assets/Vector-4.png'

const Newssection = () => {

    const cards = [
        {
            id: 1,
            image: grasswomen,
            details: "Bringing Food Production Back To Cities"
        },
        {
            id: 2,
            image: Familia,
            details: "The Future of Farming, Smart Irrigation Solutions"
        },
        {
            id: 3,
            image: rawtomato,
            details: "Agronomy and relation to Other Sciences"
        },
        {
            id: 4,
            image: replanting,
            details: "We grow products with the organic farming"
        },
        {
            id: 5,
            image: familytime,
            details: "A Quick Solution to Low Milk Production in Zimbabwe"
        },
        {
            id: 6,
            image: truck,
            details: "Winter wheat harvest organic gather nice moment"
        }
    ]

    return (
        <div className='newscards'>
            <div className="cardssection">
                {
                    cards.map((item) => {

                        const {image, details } = item;
                        return (
                            <div className="gridcard">
                                <div className="images">
                                    <img src={image} alt="" />
                                </div>
                                <div className="content">
                                    <div className="date"><h4>05 July 2022</h4></div>
                                    <div className="comments">
                                        <div className="name">
                                            <img src={vector3} alt="" />
                                            <p>by Kevin Martin</p>
                                        </div>
                                        <div className="name">
                                            <img src={vector4} alt="" />
                                            <p>0 comments</p>
                                        </div>
                                    </div>
                                    <h3>{details}</h3>
                                </div>

                            </div>

                        )

                    })
                }

            </div>

        </div>
    )
}

export default Newssection
