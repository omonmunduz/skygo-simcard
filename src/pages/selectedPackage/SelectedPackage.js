import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from '@reach/router';
import './SelectedPackage.css';


const SelectedPackage = () => {
    const params = useParams();
    const selected = params.selectedPackage;
    return <h1>{selected}</h1>
};
export default SelectedPackage;