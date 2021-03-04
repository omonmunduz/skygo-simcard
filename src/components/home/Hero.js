import React from 'react';
import { Link } from '@reach/router';
import { Button } from "@material-ui/core";
import Slider from './Slider';
import speedTest from '../../assets/speedtest.svg';
import './Hero.css';


const Hero = () => {
    return <>
    <section id="hero">
        <img src={speedTest} alt="speed test" id="speedtest" />
        <div className="hero-items">
        <div className="hero-content">
            <div className="hero--content-text">
                <h3 id="main-title">SKyGo Global Data SIM</h3>
                <p id="hero-intro">
                <strong>
                    Travel the world while staying connected with SkyGo Global Data SIM.
                    If life is an adventure where one journey leads to another, let
                    SkyGo Global Data SIM be your key to unlocking greater experiences.
                </strong>
                </p>
            </div>
            <div id="add-sim">
                <Link to="/add-sim">
                    <Button variant="contained" color="primary" size="large" >
                        ADD SIM &rarr;
                    </Button>
            </Link>
            </div>
      </div>
      <div className="slider">
      <Slider />
      </div>
        </div>
    </section>
    <div id="skewed"></div>
    </>
};
export default Hero;