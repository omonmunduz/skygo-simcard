import React,{ useState } from 'react';
import VerticalTabs from '../../components/home/VerticalTabs';
import SelectRegion from '../../components/store/SelectRegion';
import './Store.css' 

const Store = () => {
    return <section className="store">
        <div className="store-banner">
            <h3 id="store-title">Select Country</h3>
        </div>
       <SelectRegion />
    </section>
};
export default Store;