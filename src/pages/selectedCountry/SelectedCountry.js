import React from "react";
import { useSelector } from 'react-redux';
import { useParams} from '@reach/router';
import { Link } from '@reach/router';
import "./SelectedCountry.css";

const SelectedCountry = (props) => {
    const packages = useSelector( state => state.packages.regions);
    const params = useParams();
    const selected = params.countryName
    const selectedCountry = packages.find( item => item.country === selected);
    
  return (
        <section className="selected-country">
            <div className="selected-country-banner">
                <img src={selectedCountry.imgUrl} alt='a flag' className="selected-flag"/>
                <h3>{`${selectedCountry.country} Data Packages`}</h3>
            </div>
            <div className="data-packages">
                {selectedCountry.package.map(item => {
                    return <Link to={`/store/${selected}/${item.name}`} key={item.id}>
                            <div className="data-package">
                                
                                    <p className="data-desc">{`${item.name}  ${selectedCountry.remarks}`}</p>
                                    <p className="data-desc">US${item.price}</p>
                                
                        </div>
                        </Link>
                })}
            </div>
        </section>
  );
};
export default SelectedCountry;

