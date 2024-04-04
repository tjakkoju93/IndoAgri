import React from 'react';
import './Section2.scss';
import tolbet from '../Assets/tolbet.png';
import albert from '../Assets/albert.png';
import ShareIcon from '@mui/icons-material/Share';
import greenland from '../Assets/greenland.png';
import grapes from '../Assets/grapes.png';
import greengrass from '../Assets/greengrass.png';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Section2 = () => {
    const testimonials = [
        {
            id: 1,
            image: tolbet,
            content: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
            name: "Bonnie Tolbet"
        },
        {
            id: 2,
            image: albert,
            content: "There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.",
            name: "Sarah Albert"
        }
    ];

    const members = [
        {
            id:1,
            picture:greenland,
            name:"Kevin Smith"
        },
        {
            id:2,
            picture:grapes,
            name:"Jessica Brown"
        },
        {
            id:3,
            picture:greengrass,
            name:"David Martin"
        }
    ]

    return (

        <>
            <div className='testimonials'>
                <p>Our Testimonials</p>
                <h2>What They Say</h2>
                <div className="people">
                    {
                        testimonials.map((item) => {
                            return (
                                <div className="customer">
                                    <img src={item.image} alt="" />
                                    <div className="colorgreen"></div>
                                    <div className="green">

                                        <p>{item.content}</p>
                                        <h3>{item.name}</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>

            </div>

            <div className="team">
                <p>Team Members</p>
                <h2>Meet Our Farmers</h2>
                <div className="members">
                    {
                        members.map((item)=>{
                            return (
                                <div className="picture">
                                    <img src={item.picture} alt="" />
                                    <ShareOutlinedIcon className='share'/>
                                    <div className="name">
                                        <h3>{item.name}</h3>
                                        <p>Farmer</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="blonde">
                
            </div>

        </>
    )
}

export default Section2
