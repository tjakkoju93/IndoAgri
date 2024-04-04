import React from 'react'
import './Sideandmain.scss'
import ricefarming from '../Assets/ricefarming.png'
import driedlogs from '../Assets/driedlogs.png'
import tomatoharvest from '../Assets/tomatoharvest.png'
import vector from '../Assets/Vector-2.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Sideandmain = () => {
    const categories = ['Agriculture', 'Farming', 'resh Vegetables', 'Harvest', 'Organic Food'];
    return (
        <div className='sectionmain'>
            <div className="sidebar">
                <div className="categories">
                    <h3>Categories</h3>
                    {
                        categories.map((item) => {
                            return (
                                <p>{item}</p>
                            )
                        })
                    }
                </div>
                <div className="help">
                    <h2>Need Help?</h2>
                    <p>Speak with a human to filling out a
                        form? call corporate office and we
                        will connect you with a team
                        member help.</p>
                    <h3>+92 (000) -9630</h3>
                    <button>Start Shopping Now</button>
                </div>

            </div>
            <div className="sidemain">

                    <img src={ricefarming} alt="" className='mainimage'/>
                    <img src={vector} alt="" className='vectorimage'/>

                <div className="agriproducts">
                    <h2>Agriculture Products</h2>
                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia
                        quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis
                        enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since
                        the 1500s.</p>
                    <p>It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and
                        type setting Ipsum take a look at our round. When an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting.</p>
                </div>
                <div className="benifits">
                    <div className="ourbenifits">
                        <img src={driedlogs} alt="" />
                        <h3>Our Benefits</h3>
                        <p>
                            It has survived not only five centuries em simply
                            dummy text. Duis aute irure dolor in eprehenderit
                            in voluptate velit esse cillum.
                        </p>
                    </div>
                    <div className="tomatos">
                        <img src={tomatoharvest} alt="" />
                        <p>Nsectetur cing elit. <span>
                            Suspe ndisse suscipit sagittis leo.</span> <span>
                                Entum estibulum dignissim posuere.</span> <span>
                                Lorem Ipsum on the tend to repeat. </span></p>
                    </div>

                </div>
                <div className="moreinfo">
                    <div className="titleinfo">
                        <h3>World’s hottest destinations for vegans</h3>
                        <ArrowForwardIosIcon className='arrow' />

                    </div>
                    <div className="titleinfo">
                        <h3>Let’s grow naturaly and live naturaly</h3>
                        <ArrowForwardIosIcon className='arrow' />

                    </div>
                    <p>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie
                        ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus many of
                        some form.</p>
                    <div className="titleinfo">
                        <h3>Best vegetables for your healthy hair</h3>
                        <ArrowForwardIosIcon className='arrow' />

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sideandmain
