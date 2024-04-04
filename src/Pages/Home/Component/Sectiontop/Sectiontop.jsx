import React from 'react'
import farmer from '../../../../assets/mainfarmer.png'
import girl from '../../../../assets/girl.jpeg'
import leaves from '../../../../assets/Leaves.png'
import greenleaf from '../../../../assets/greenleaf.png'
import corn from '../../../../assets/Corn.png'
import './Sectiontop.scss'

const Sectiontop = () => {
    return (
        <div className='Sections'>

            <div className='start'>
                <img src={farmer} alt="" />
            </div>

            <div className="middle">
                

                <div className="second">
                    <div className="girl"><img src={girl} alt="" /></div>
                    <div className="leaves"><img src={leaves} alt="" /></div>

                </div>
                <div className="third">
                    <div className="organicfarm">
                        <h2>Agriculture & Organic
                            Product Farm</h2>
                        <p>There are many variations of passages of ipsum available but the
                            majority have suffered alteration in some form by injected humor or
                            random word which don’t look even. Comparison new ham melancholy.</p>
                        <div className="value">
                            <h3>25M</h3>
                            <h4></h4>
                            <p>Growth Tonns
                                of Harvest</p>
                        </div>
                    </div>
                    <div className="third-child">
                        <div className="orange">
                            <img src={greenleaf} alt="" />
                            <h4>100% Guaranteed
                                Organic Product</h4>
                            <p>Always parties but trying she
                                shewing of moment.</p>
                        </div>
                        <div className="green">
                            <img src={corn} alt="" />
                            <h4>Top-Quality Healthy
                                Foods Production</h4>
                            <p>Majority have suffered alteration in
                                some form by injected humor.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sectiontop
