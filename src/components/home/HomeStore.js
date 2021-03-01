import React, { useState, useEffect } from "react";
import './HomeStore.css';
import {useSelector} from 'react-redux';
import CountryCard from './CountryCard';

const HomeStore = () => {
  const packages = useSelector((state) => state.packages.regions);
  const [regions] = useState(["Asia", "Europe", "North America", "Oceania", "All"]);
  const [selectedRegion, setSelectedRegion] = useState("Asia");
  const [selectedCountries, setSelectedCountries] = useState(['ss','bb','cc'])

  useEffect( () => {
      let selected = packages.filter(item => item.region === selectedRegion)
        setSelectedCountries(selected)
  },[selectedRegion,packages])
  
  const changeRegion = (val) => {
    setSelectedRegion(val)
    const selected = packages.filter((item) => item.region === val )
    setSelectedCountries(selected)
  }
  return <section className="homestore">
          <div className="select-region">
              {regions.map((region, id) => <div key={id} className="region" onClick={()=> changeRegion(region)}>{region}</div>)}
          </div>
          <h3><strong>{selectedRegion}</strong></h3>
          <div className="selected-region-and-countries">
              {selectedCountries.map(item => <CountryCard key={item.id} item={item}/>)}
          </div>
  </section>;
};
export default HomeStore;
