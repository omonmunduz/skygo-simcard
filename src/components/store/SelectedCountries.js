import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from '@reach/router';
import './SelectedCountries.css';



const SelectedCountries = () => {
    const selectedCountries = useSelector((state) => state.packages.chosenCountries);
    return <div id ="selected-region-results">
        {selectedCountries.map(item => {
            return (
                <Link to={`/store/${item.country}`} key={item.id}>
                    <div className="country-item">
                        <p>{item.country}</p>
                    </div>
                </Link>
            )
        })}
    </div>
};
export default SelectedCountries;