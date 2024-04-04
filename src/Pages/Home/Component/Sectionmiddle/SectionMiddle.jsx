import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './SectionMiddle.scss';
import truck from "./Assets/truck.png";
import cow from "./Assets/cow.png";
import fruit from "./Assets/fruit.png";
import greenleaf from "./Assets/greenleaf.png";
import papercut from "./Assets/papercut.png";
import berries from './Assets/berries.png'
import apple from './Assets/apple.png'
import strawberry from './Assets/strawberry.png'
import corn from './Assets/corn.png'
import orange from './Assets/orange.png'
import cabbage from './Assets/cabbage.png'




const SectionMiddle = () => {

    const card = [{

        id: 1,
        image: truck,
        name: "AGRICULTURE",
        sale: "PRODUCTS",
        content: "Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshireto the dispatched."
    },
    {

        id: 2,
        image: fruit,
        name: "FRESH",
        sale: "VEGETABLES",
        content: "Perming rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched."


    },
    {

        id: 3,
        image: cow,
        name: "DAIRY",
        sale: "PRODUCTS",
        content: "Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshireto the dispatched."


    }
    ]

    const eatable1 = [berries, strawberry, cabbage]
    const eatable2 = [corn, orange, apple]

    return (
        <>

            <div className='organicfood'>
                <div className="food">
                    <p>What we do</p>
                    <h2>Currently we are <span>
                        selling organic food</span></h2>
                </div>
                <div className="organic-cards">


                    {
                        card.map((item) => {
                            const { id, image, name, sale, content } = item;

                            return (
                                <div className="card" key={id}>
                                    <img src={image} alt="" />
                                    <h3>{name}</h3>
                                    <h4>{sale}</h4>
                                    <div className="card-content">

                                        <p>{content}</p>
                                        <ArrowForwardIcon className='arrowicon' />
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>

                <div className="land-complete">
                    <img src={papercut} alt="" className="paper" />
                    <div className='distributors'>
                        <h2>Distributors of
                            Organic Produce</h2>
                        <p>Contrasted dissimilar get joy you instrument out reasonably. Again
                            keeps at no meant stuff. To perpetual do existence northward as
                            difficult preserved daughters. Continued at up to zealously.</p>
                        <div className="tick">
                            <ul>
                                <li> Modern Agriculture Equipment</li>
                                <li> Awesome Harvest of Wheat</li>
                                <li> Fresh Fruits & Vegetables</li>
                            </ul>
                        </div>


                    </div>
                    <img src={greenleaf} alt="" />

                </div>

                {/* <div className="healthylife">
                <div className="content">
                    <h3>Healthy Life
                        With Fresh
                        Products</h3>
                </div>


                <div className="fruits">
                    <div className="eatable">

                        {
                            eatable1.map((item) => {
                                return (
                                    <img src={item} alt="" />
                                )
                            })
                        }

                    </div>
                    <div className="eatable">

                        {
                            eatable2.map((item) => {
                                return (
                                    <img src={item} alt="" />
                                )
                            })
                        }

                    </div>

                </div>

            </div> */}

            </div>

            <div className="organic-bottom">
                <div className="healthylife">
                    <div className="content">
                        <h3>Healthy Life
                            With Fresh
                            Products</h3>
                    </div>


                    <div className="fruits">
                        <div className="eatable">

                            {
                                eatable1.map((item) => {
                                    return (
                                        <img src={item} alt="" />
                                    )
                                })
                            }

                        </div>
                        <div className="eatable">

                            {
                                eatable2.map((item) => {
                                    return (
                                        <img src={item} alt="" />
                                    )
                                })
                            }

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SectionMiddle
