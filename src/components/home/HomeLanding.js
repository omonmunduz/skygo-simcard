import React from 'react';
import { Link } from '@reach/router';
import './HomeLanding.css';
import addSimcard from './images/add-simcard.svg';
import choose from './images/choose.svg';
import destination from './images/destination.svg';
import paymentss from './images/paymentss.svg';


const HomeLanding = () => {
    return <section className="home-intro-section">
        <div className="intro-box">
        <span className="order">1</span><img src={addSimcard} alt="Add SIM card" className="intro-box-img"/>
            <div className="intro-box-text">
                <h4>Add SIM</h4>
                <p className="intro-box-para">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Duis finibus at tellus vel ullamcorper. 
                 Maecenas vulputate ut diam ac cursus. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Sed tellus arcu, porta sed consectetur ut,
                   interdum at lacusAdd SIM</p>
            </div>
            <Link to="/add-sim" className="learn-more">Learn more about how to ADD SIM</Link>
        </div>
        <div className="intro-box">
        <span className="order">2</span>
        <img src={destination} alt="Destination" className="intro-box-img"/>
        <div className="intro-box-text">
                <h4>Select Desired Region and Country</h4>
                <p className="intro-box-para">After adding you SIM number go to <Link to="/store">Store</Link>
                 page where you can select you region
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                 Duis finibus at tellus vel ullamcorper. Maecenas vulputate ut diam ac cursus. 
                 Class aptent taciti sociosqu ad litora torquent per conubia Store
                   </p>
            </div>
            <Link to="/store" className="learn-more">Learn more about covered countries</Link>
        </div>
        <div className="intro-box">
        <span className="order">3</span><img src={choose} alt="Choose" className="intro-box-img"/>
            <div className="intro-box-text">
                <h4>Select Desired Package</h4>
                <p className="intro-box-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis finibus at tellus vel ullamcorper. Maecenas vulputate ut diam ac cursus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Sed tellus arcu, porta sed consectetur ut, interdum at lacus</p>
            </div>
            <Link to="/how-to" className="learn-more">Learn more about data pacakges</Link>
        </div>
        <div className="intro-box">
        <span className="order">4</span><img src={paymentss} alt="Payments" className="intro-box-img"/>
        <div className="intro-box-text">
                <h4>Complete Payments</h4>
                <p className="intro-box-para">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Duis finibus at tellus vel ullamcorper. 
                Maecenas vulputate ut diam ac cursus. Class aptent taciti sociosqu ad 
                litora torquent per conubia nostra, per inceptos himenaeos. 
                Sed tellus arcu, porta sed consectetur ut, interdum at lacus</p>
        </div>
        <Link to="faq" className="learn-more">Learn more about payments</Link>
        </div>
    </section>
};
export default HomeLanding