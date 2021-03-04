import React from "react";
import { useSelector } from 'react-redux';
import { useParams} from '@reach/router';
import { Link } from '@reach/router';
import { Button, Box } from '@material-ui/core';
import './SelectedPackage.css';



const SelectedPackage = () => {
    const packages = useSelector( state => state.packages.regions);
    const params = useParams();
    const selected = params.selectedPackage;
    const selectedCountry = params.countryName;
    const findSelectedCountry = packages.find(item => item.country === selectedCountry)
    const findSelectedPackage = findSelectedCountry.package.find(item => item.name === selected)

   


    return <section className="selected-package">
        <div id="selected-package-title">
            <h4>Package Order</h4>
        </div>
        <div className="package-content">
            <div className="package-name-add-price">
                <h4 className="package-name">{`${findSelectedPackage.name} ${findSelectedCountry.remarks}`}</h4>
                
                <div className="usage-guidelines">
                    <h5>Package Usage Guidelines</h5>
                    <p>For multiple packages which expiry time is different, the package with earlier expiry time will be prioritized to activate.</p>
                    <p>For multiple packages with same expiry time but different coverage, the package with less coverage will be prioritized to activate.</p>
                    <p>For multiple packages with the same expiry time and coverage, the activation will be based on the subscription time, e.g. first subscribed package will be activated.</p>
                </div>
            </div>

            <div className="package-description">
                <h2 id="total-cost">Total: US${findSelectedPackage.price}</h2>
                <h5>Package Description</h5>
                <p>Applicable areas: {selectedCountry}</p>
                <ul>
                    <li>-500MB daily high speed data usage, thereafter unlimited restricted speed data usage</li>
                    <li>-24 hours is counted as 1 day and counted continuously starting from service activation</li>
                    <li>-Purchased plan can be used within 180 days from purchase</li>
                </ul>
            </div>
        </div>

        <section className="checkout-section">
        <div className="check-sim">
        <div className="additional-info-simcard">
            <h4>Existing SIM card, buy package again</h4>
            <p>Package Only, please <Link to="/add-sim">add SIM card</Link> brfore purchase</p>
        </div>
        <div className="additional-info-buy-sim">
            <h4>No SIM card, buy SIM card + package</h4>
            <p>Data package will pair with the SIM card together.</p>
            <div className="sim-options">
                <Box m={2} p={1}>
                    <Button variant="contained" color="primary" size="large">Physical SIM</Button>
                </Box>
                <Box m={2} p={1}>
                     <Button variant="contained" color="primary" size="large">ESIM</Button>
                </Box>
            </div>
        </div>
        </div>
        <div id="checkout">
        <button>Checkout</button>
        </div>

        </section>

    </section>
};
export default SelectedPackage;