import React from 'react'
import smilewomen from '../Assets/smilewomen.png'
import truck from '../Assets/truck.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import veggies from '../Assets/veggies.png'
import './Section1.scss';


const Section1 = () => {
    return (
        <>
            <div className='section'>
                <div className="images">
                    <img src={smilewomen} alt="" className='smile' />
                    <div className="green"></div>
                    <img src={truck} alt="" className='truck' />
                </div>
                <div className="content">
                    <h4>Get to Know Us</h4>
                    <h2>The Best Agriculture Market</h2>
                    <h3>There are many variations of passa of lorem available, but the majority have suffered alteration.</h3>
                    <p>There are many variations of passages of lorem ipsum available but the
                        majority have suffered alteration in some form by injected humor or
                        random word which don’t look even.</p>
                    <ul>
                        <li> Suspe ndisse suscipit sagittis leo</li>
                        <li> Entum estibulum disgnissim posuere </li>
                        <li> Lorem Ipsum on the tend to repeat</li>
                    </ul>
                    <button>Discover More</button>
                </div>
            </div>
            <div className="plantation">
                <div className='arrow'><PlayArrowIcon className='play' /></div>
                <h2>ECO-Friendly Products can <span>
                    be Made from Scratch</span></h2>
                <div className="opaq">

                </div>
                <div className="opaq2">

                </div>
            </div>
            <div className="framesection">
                <img src={veggies} alt="" />
                <h4>Agriculture Products</h4>
                <h4>Projects Completed</h4>
                <h4>Satisfied Clients</h4>
                <h4>Experts Farmers</h4>

            </div>
        </>
    )
}

export default Section1
