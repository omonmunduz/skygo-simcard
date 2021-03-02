import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {useSelector} from 'react-redux';
import './VerticalTabs.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const packages = useSelector((state) => state.packages.regions);

  const asia = packages.filter(item => item.region === "Asia");
  const europe = packages.filter(item => item.region === "Europe");
  const northAmerica = packages.filter(item => item.region === "North America");
  const oceania = packages.filter(item => item.region === "Oceania");
  const global = packages.filter(item => item.region === "All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="verical-tabs">
        <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Asia" {...a11yProps(0)} />
        <Tab label="Europe" {...a11yProps(1)} />
        <Tab label="North America" {...a11yProps(2)} />
        <Tab label="Oceania" {...a11yProps(3)} />
        <Tab label="Global" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="tab-results">
        {asia.map(item => {
            return <div className="tab-result-country">{item.country}</div>
        })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div className="tab-results">
          {europe.map(item => {
            return <div className="tab-result-country">{item.country}</div>
        })}
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="tab-results">
      {northAmerica.map(item => {
            return <div className="tab-result-country">{item.country}</div>
        })}
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="tab-results">
      {oceania.map(item => {
            return <div className="tab-result-country">{item.country}</div>
        })}
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="tab-results">
      {global.map(item => {
            return <div className="tab-result-country">{item.country}</div>
        })}
      </div>
      </TabPanel>
    </div>
    </section>
  );
}
