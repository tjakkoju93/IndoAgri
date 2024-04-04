import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import apple from '../Assets/apple.jpeg';
import banana from '../Assets/banana.jpeg';
import blackgrapes from '../Assets/blackgrapes.jpeg';
import garlic from '../Assets/garlic.jpeg';
import grapes from '../Assets/grapes.jpeg';
import lettuce from '../Assets/lettuce.jpeg';
import onion from '../Assets/onion.jpeg';
import potato from '../Assets/potato.jpeg';
import carrot from '../Assets/carrot.jpeg';
import StarIcon from '@mui/icons-material/Star';
import './Sectionside.scss'

const Sectionside = () => {

    const categories = ['Agriculture', 'Farming', 'resh Vegetables', 'Harvest', 'Organic Food'];
    const groceries = [
        {
            id: 1,
            image: apple,
            name: "Apples",
            price: "$50.00"

        },
        {
            id: 2,
            image: banana,
            name: "Bananas",
            price: "$20.00"

        },
        {
            id: 3,
            image: carrot,
            name: "Carrot",
            price: "$50.00"

        },
        {
            id: 4,
            image: garlic,
            name: "Garlic",
            price: "$20.00"

        },
        {
            id: 5,
            image: grapes,
            name: "Grapes",
            price: "$100.00"

        },
        {
            id: 6,
            image: lettuce,
            name: "Lettuce",
            price: "$30.00"

        },
        {
            id: 7,
            image: onion,
            name: "Onions",
            price: "$20.00"

        },
        {
            id: 8,
            image: potato,
            name: "Potatos",
            price: "$30.00"

        },
        {
            id: 9,
            image: blackgrapes,
            name: "Red Grapes",
            price: "$100.00"

        }
    ];
    return (
        <div className='herosection'>
            <div className="sidebar">
                <button>Search products…</button>
                <div className="price">
                    <h4>Price</h4>
                    <div className="range">
                        <div className="circle"></div>
                        <div className="line"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="filter">
                        <p> $20 - $100 </p>
                        <button>Apply</button>
                    </div>
                </div>

                <div className="categories">
                    <h3>Categories</h3>
                    {
                        categories.map((item) => {
                            return (
                                <div className="list">
                                    <p>{item}</p>
                                    <p> <ArrowForwardIosIcon /></p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="mainsection">
                <div className="header">
                    <p>Showing 1–9 of 10 results</p>
                    <button>Default sorting  <ArrowDropDownIcon /> </button>
                </div>

                <div className="market">

                    {
                        groceries.map((items) => {
                            const { id, image, name, price } = items;
                            return (
                                <div className="list" key={id}>
                                    <img src={image} alt="" />
                                    <h3>{name} <StarIcon className='star'/></h3>
                                    <h4>{price}</h4>
                                </div>
                            );
                        })
                    };
                    
                </div>

                <div className="pagenumbers">
                    <div className='green'>1</div>
                    <div className='number'>2</div>
                    <div className='number'><ArrowForwardIosIcon/></div>
                </div>
            </div>
        </div>
    )
}

export default Sectionside
