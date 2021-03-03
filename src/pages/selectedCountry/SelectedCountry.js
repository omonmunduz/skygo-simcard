import React from "react";
import { useSelector } from 'react-redux';
import { useParams} from '@reach/router';
import { Link } from '@reach/router';
import "./SelectedCountry.css";


import SelectedBanner from '../../components/shared/SelectedBanner';

const SelectedCountry = (props) => {
    const packages = useSelector( state => state.packages.regions);
    const params = useParams();
    const selected = params.countryName
    const selectedCountry = packages.find( item => item.country === selected);
    
  return (
      <>
      <SelectedBanner>
                <h2>{`${selectedCountry.country} Data Packages`}</h2>
      </SelectedBanner>

      <section className="selected-country">
            
            <div className="data-packages">
                {selectedCountry.package.map(item => {
                    return <Link to={`/store/${selected}/${item.name}`} key={item.id}>
                                <div className="package-container">
                                    <p className="data-desc">{`${item.name}  ${selectedCountry.remarks}`}</p>
                                    <p className="data-desc">US${item.price}</p>
                                </div>
                        </Link>
                })}
            </div>
        </section>
      </>
  );
};
export default SelectedCountry;

