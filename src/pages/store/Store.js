import React from 'react';
import SelectRegion from '../../components/store/SelectRegion';
import SelectedCountries from '../../components/store/SelectedCountries';
import './Store.css' 

const Store = () => {
    return <section className="store">
        <div className="store-banner">
            <h2 id="store-title">Select Desired Region and Country</h2>
        </div>
       <SelectRegion />
       <SelectedCountries />
    </section>
};
export default Store;