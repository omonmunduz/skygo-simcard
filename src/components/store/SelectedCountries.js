import React from 'react';
import { useSelector} from 'react-redux';



const SelectedCountries = () => {
    const selectedCountries = useSelector((state) => state.packages.chosenCountries);
    return <div id ="selected-region-results">
        {selectedCountries.map(item => {
            return (
                <div>{item.country}</div>
            )
        })}
    </div>
};
export default SelectedCountries;