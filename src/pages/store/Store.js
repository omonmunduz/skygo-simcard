import React,{ useState } from 'react';
import SelectRegion from '../../components/store/SelectRegion';
import SelectedCountries from '../../components/store/SelectedCountries';
import './Store.css' 

const Store = () => {
    return <section className="store">
        <div className="store-banner">
            <h3 id="store-title">Select Country</h3>
        </div>
       <SelectRegion />
       <SelectedCountries />
    </section>
};
export default Store;