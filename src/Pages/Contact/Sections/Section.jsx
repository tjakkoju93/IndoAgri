import React from 'react'
import './Section.scss'

const Section = () => {

    const cards = [
        {
            heading: "About",
            details: "Lorem ipsum is simply free text used by copytypinh refreshing. Neque porro est qui"
        },
        {
            heading: "Contact",
            details: "+1- (246) 333-0079 support@agrios.com Mon - Fri: 7:00 am - 6:00 pm"
        },
        {
            heading: "Address",
            details: "66 Broklun Road Golden Street, New Your United States of Ameriaca"
        }

    ]

    return (
        <>

            <div className="topsection">

                <div className="card" style={{ backgroundColor: "#4BAF47" }}>
                    <h3>About</h3>
                    <p>Lorem ipsum is simply free text used by copytypinh refreshing. Neque porro est qui</p>
                </div>
                <div className="card" style={{ backgroundColor: "#C5CE38" }}>
                    <h3>Contact</h3>
                    <p>+1- (246) 333-0079 </p>
                    <p>support@agrios.com</p>
                    <p> Mon - Fri: 7:00 am - 6:00 pm</p>
                </div>
                <div className="card" style={{ backgroundColor: "#EEC044" }}>
                    <h3>Address</h3>
                    <p>66 Broklun Road Golden Street, New Your United States of Ameriaca</p>
                </div>
            </div>

            <div className="contactsection">
                <div className="mapsandform">
                    <div className="googlemaps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9664505395203!2d78.36499377515648!3d17.461319800671127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e6dc1ba759%3A0x34e55209b0db0d68!2sCareerpedia%20Edutech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1711617496367!5m2!1sen!2sin" 
                        width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                    <div className="form">
                        <h4>Contact us</h4>
                        <h2>Write a Message</h2>
                        <div className="nameform">
                            <input type="text" placeholder='Name' className='namemail' />
                            <input type="email" placeholder='Email' className='namemail' />
                        </div>
                        <input type="text" placeholder='Message' className='message' />
                        <button>Send a Message</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section
