import React from 'react';
import './SelectedBanner.css'

const SelectedBanner = (props) => {
    return <div className = "selected-banner">{props.children}</div>
};
export default SelectedBanner;