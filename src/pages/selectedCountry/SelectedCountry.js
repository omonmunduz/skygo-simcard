import React from "react";
import { useSelector } from 'react-redux';
import { useParams} from '@reach/router';
import { Link } from '@reach/router';
import "./SelectedCountry.css";
import { Button, Box } from '@material-ui/core';

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
                        <Box mt={2} p={2}>
                            <Button variant="contained" color="primary" size="large">
                                
                                    <p className="data-desc">{`${item.name}  ${selectedCountry.remarks}`}</p>
                                    <p className="data-desc">US${item.price}</p>
                                
                                    </Button>
                                    </Box>
                        </Link>
                })}
            </div>
        </section>
      </>
  );
};
export default SelectedCountry;

