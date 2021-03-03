import React from 'react';
import SupportedCountriesEurope from './SupportedCountriesEurope';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegion } from '../../features/packages/packagesSlice';


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 230,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


/// COMPONENT STARTS HERE  ************
const SelectRegion = () => {
  const selectedReg = useSelector((state) => state.packages.chosenRegion);
  const classes = useStyles();
  const [region, setRegion] = React.useState(selectedReg);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRegion(event.target.value);
    dispatch(selectRegion(event.target.value))
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={region}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'North America'}>North America</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
          <MenuItem value={'Global'}>Global</MenuItem>
        </Select>
      </FormControl>
      <div className="supp">
        {region === 'Europe' ? <SupportedCountriesEurope /> : <h2>{region}</h2>}
      </div>
    </div>

  );
}
export default SelectRegion;
