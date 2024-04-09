import React from 'react';
import thingrass from "./Assets/thingrass.png";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import hatman from './Assets/hatman.jpeg'
import quotes from './Assets/quotes.png'
import './SectionBottom.scss'
import NearMeIcon from '@mui/icons-material/NearMe';
import corn from './Assets/corn.png';
import axeboy from './Assets/axeboy.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import curlygirl from './Assets/curlygirl.jpeg';
import plantation from './Assets/plantation.jpeg';
import agroforestry from './Assets/agroforestry.jpg';
import alternativefeeds from './Assets/alternativefeeds.jpg';
import OrganicFarming from './Assets/OrganicFarming.jpg';
import Farmtotable from './Assets/Farmtotable.webp'
import watermanagement from './Assets/watermanagement.jpg'
import Hydroponic from './Assets/Hydroponic.jpg'
import PrecisionAgriculture from './Assets/PrecisionAgriculture.jpg'
import verticalfarming from './Assets/verticalfarming.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SectionBottom = () => {

    const contacts = [{
        id: 1,
        name: "Hotline",
        detail: "+4733378901"
    },
    {
        id: 2,
        name: "Our Location",
        detail: "55 Main Street, The Grand Avenue 2nd Block,New York City"
    },
    {
        id: 3,
        name: "Official Email",
        detail: "info@agrul.com"
    }]


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const projects = [{
        name: "AGRO FORESTRY",
        farmimage: agroforestry
    },
    {
        name: "ORGANIC FARMING",
        farmimage: OrganicFarming
    },
    {
        name: "ALTERNATIVE FEEDS",
        farmimage: alternativefeeds
    },
    {
        name: "FARM TO TABLE",
        farmimage: Farmtotable
    },
    {
        name: "WATER MANAGEMENT",
        farmimage: watermanagement
    },
    {
        name: "HYDEROPONIC FARMING",
        farmimage: Hydroponic
    },
    {
        name: "PRECISING AGRICULTURE",
        farmimage: PrecisionAgriculture
    },
    {
        name: "VERTICAL FARMING",
        farmimage: verticalfarming
    }]
    return (
        <>

            <div className='bottomsection'>

                <div className="testimonials">

                    <div className="inner">
                        <h2>Testimonials</h2>
                        <img src={hatman} alt="" className='hatman' />
                        <div className='content'>
                            <img src={quotes} alt="" className='quotes' />
                            <h4>
                                “Targeting consultation discover
                                apartments. ndulgence off under folly
                                death wrote cause her way spite. Plan
                                upon yet way get cold spot its week.”
                            </h4>
                            <div className="rating">
                                <h3>Matthew J. Wyman <span>Senior Consultant</span></h3>
                                <div className="star">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarHalfIcon />
                                </div>


                            </div>
                        </div>

                        <img src={thingrass} alt="" className='grass' />
                    </div>
                </div>

            </div>

            <div className="projects">
                <h4>Awesome Gallery</h4>
                <h2>Explore Projects</h2>
                <div className='carousels'>
                    <Slider {...settings}>

                        {
                            projects.map((item) => {
                                const { name, farmimage } = item

                                return (
                                    <div key={name}>
                                        <img src={farmimage} alt="" />
                                        <div className="farmtext">
                                            <h2>{name}</h2>
                                        </div>
                                    </div>
                                )

                            })
                        }


                    </Slider>

                </div>

                <div className="content">
                    <div className="organic">
                        <div className="top">
                            <h2>Pure & Organic</h2>
                            <p>Continued at up to zealously necessary
                                breakfast. Surrounded sir motionless she
                                end literature. Gay direction neglected but
                                supported yet her.</p>
                        </div>
                        <div className="top">
                            <h2>Always Fresh</h2>
                            <p>Continued at up to zealously necessary
                                breakfast. Surrounded sir motionless she
                                end literature. Gay direction neglected but
                                supported yet her.</p>
                        </div>

                    </div>
                    <div className="quality">
                        <h2>
                            Organic Solutions
                        </h2>
                        <h2>Quality Agriculture</h2>
                    </div>
                </div>

                {/* </div> */}
            </div>
            <div className="contact-info">
                <img src={axeboy} alt="" className='axeboy' />
                <div className="frame">
                    <h3>Have Questions?</h3>
                    <h2>Send us a massage</h2>
                    <div className="input-form">
                        <input type="text" placeholder='Name' />
                        <div className="email-phone">
                            <input type="email" placeholder='Email*' />
                            <input type="tel" placeholder='Phone' />
                        </div>
                        <input type="text" placeholder='Tell Us About Project *' className='about-text' />
                        <div className="get-in-touch">
                            <NearMeIcon />
                            <h4> Get in Touch</h4>
                        </div>
                    </div>
                </div>
                <div className="green">

                    <div className="info-content">
                        <h2>Contact Information</h2>
                        <p>Plan upon yet way get cold spot its week. Almost do am or limits hearts. <span>
                            Resolve parties but why she shewing.</span></p>
                        <div className="info">
                            {
                                contacts.map((item) => {
                                    return (
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>{item.detail}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div className="corn-pic">
                        <img src={corn} alt="" />
                    </div>
                </div>


            </div>

            <div className="blog">
                <h3>Latest News</h3>
                <h2>Check out our blog posts</h2>
                <div className="blog-images">
                    <div className="main-pic">
                        <h2>Miscovery incommode earnestly
                            commanded if.</h2>
                        <p>Seeing rather her you not esteem men settle genius excuse. Deal say over <span>
                            you age from. Comparison new ham melancholy son themselves.</span></p>

                        <h3>Continue Reading <ArrowForwardIcon /></h3>

                    </div>
                    <div className="second-image">
                        <div className="girlsmileimage">
                            <img src={curlygirl} alt="" />
                            <div className="imagedate">
                                <h2>26</h2>
                                <div className="augdate">
                                    <p>Aug 2023</p>

                                </div>
                            </div>
                            <div className="girlimagecontent">
                                <p>Md Sohag . 25 April, 2023</p>
                                <h3>Expression acceptance
                                    imprudence particular</h3>
                                <h4>CONTINUE READING <ArrowForwardIcon /></h4>
                            </div>
                        </div>
                        <div className="girlsmileimage">
                            <img src={plantation} alt="" />
                            <div className="imagedate">
                                <h2>08</h2>
                                <div className="augdate">
                                    <p>Aug 2023</p>

                                </div>

                            </div>
                            <div className="girlimagecontent">
                                <p>Md Sohag . 25 April, 2023</p>
                                <h3>Considered imprudence of
                                    technical friendship.</h3>
                                <h4>CONTINUE READING <ArrowForwardIcon /></h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionBottom
