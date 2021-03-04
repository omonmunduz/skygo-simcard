import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { submitCard } from '../../features/packages/packagesSlice';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import "./AddSim.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      maxWidth: "500px",
      margin: "0 auto",
      padding: "9px",
      display: "flex",
      flexDirection: "column",
    },
  },
}));

const AddSim = () => {
  const [simNum, setSimNum] = useState(null);
  const [simCode, setSimCde] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  

  const handleSimNum = (e) => {
    setSimNum(e.target.value)
  }
  const handleSimCode = (e) => {
    setSimCde(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      const data = {
        simCardNum: simNum,
        simCardCode: simCode
      };
      dispatch(submitCard(data))
      console.log(data)
    
  }

  return (
    <section className="internet">
      <h2>Add SIM Card</h2>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          type="number"
          label="Please add the last 13 digits of the card number"
          onChange={handleSimNum}
        />
        <TextField
          id="filled-basic"
          type="number"
          label="Please fill in the 4-digit verification code"
          onChange={handleSimCode}
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="I have read and agreed with user agreement"
          labelPlacement="end"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add SIM &rarr;
        </Button>
      </form>
      <div className="how-to-add-sim">
        <h5>How to add SIM Card</h5>
        <div className="add-sim-img-box">
          <img
            src="https://global.cmlink.com/img/bitmap-1.be673e01.png"
            alt="how to add SIM card"
          />
          <img
            src="https://global.cmlink.com/img/bitmap-copy.1eb91b3d.png"
            alt="how to add SIM card"
          />
        </div>
        <ul>
          <li>
            <strong>Step 1:</strong> Enter the ICCID number on the SIM.
          </li>
          <li>
            <strong>Step 2:</strong> Enter the verification code and click [Add
            Card]
          </li>
        </ul>
      </div>
    </section>
  );
};
export default AddSim;
