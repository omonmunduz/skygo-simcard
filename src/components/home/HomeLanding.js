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
            <img src={addSimcard} alt="Add SIM card" className="intro-box-img"/>
            <div className="intro-box-text">
                <h3>Add SIM</h3>
                <p className="intro-box-para">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Duis finibus at tellus vel ullamcorper. 
                 Maecenas vulputate ut diam ac cursus. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Sed tellus arcu, porta sed consectetur ut,
                   interdum at lacus<Link to="/add-sim"> Add SIM</Link></p>
            </div>
        </div>
        <div className="intro-box">
        <div className="intro-box-text">
                <h3>Select Desired Region and Country</h3>
                <p className="intro-box-para">After adding you SIM number go to <Link to="/store">Store</Link>
                 page where you can select you region
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                 Duis finibus at tellus vel ullamcorper. Maecenas vulputate ut diam ac cursus. 
                 Class aptent taciti sociosqu ad litora torquent per conubia <Link to="/store">Store</Link>
                   </p>
            </div>
            <img src={destination} alt="Destination" className="intro-box-img"/>
        </div>
        <div className="intro-box">
            <img src={choose} alt="Choose" className="intro-box-img"/>
            <div className="intro-box-text">
                <h2>Select Desired Package</h2>
                <p className="intro-box-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis finibus at tellus vel ullamcorper. Maecenas vulputate ut diam ac cursus. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Sed tellus arcu, porta sed consectetur ut, interdum at lacus</p>
            </div>
        </div>
        <div className="intro-box">
        <div className="intro-box-text">
                <h2>Complete Payments</h2>
                <p className="intro-box-para">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Duis finibus at tellus vel ullamcorper. 
                Maecenas vulputate ut diam ac cursus. Class aptent taciti sociosqu ad 
                litora torquent per conubia nostra, per inceptos himenaeos. 
                Sed tellus arcu, porta sed consectetur ut, interdum at lacus</p>
            </div>
            <img src={paymentss} alt="Payments" className="intro-box-img"/>
        </div>
    </section>
};
export default HomeLanding