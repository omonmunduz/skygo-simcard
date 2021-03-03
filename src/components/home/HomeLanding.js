import React from 'react';

import './HomeLanding.css';
import addSimcard from './images/add-simcard.svg';
import choose from './images/choose.svg';
import destination from './images/destination.svg';
import paymentss from './images/paymentss.svg';


const HomeLanding = () => {
    return <section className="home-intro-section">
        <div className="intro-box">
            <img src={addSimcard} alt="Add SIM card" className="intro-box-img"/>
            <div className="intro-box-text">
                <h2>Add SIM</h2>
            </div>
        </div>
        <div className="intro-box">
        <div className="intro-box-text">
                <h2>Select Desired Region and Country</h2>
            </div>
            <img src={destination} alt="Destination" className="intro-box-img"/>
        </div>
        <div className="intro-box">
            <img src={choose} alt="Choose" className="intro-box-img"/>
            <div className="intro-box-text">
                <h2>Select Desired Package</h2>
            </div>
        </div>
        <div className="intro-box">
        <div className="intro-box-text">
                <h2>Complete Payments</h2>
            </div>
            <img src={paymentss} alt="Payments" className="intro-box-img"/>
        </div>
    </section>
};
export default HomeLanding