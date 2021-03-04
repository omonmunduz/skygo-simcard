import React from "react";
import Hero from '../../components/home/Hero';
import HomeLanding from '../../components/home/HomeLanding';

const Home = () => {
  return (
    <>
    <Hero />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#75a9a4" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,90.7C672,85,768,75,864,106.7C960,139,1056,213,1152,229.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <HomeLanding />
    </>
  )
};
export default Home;
