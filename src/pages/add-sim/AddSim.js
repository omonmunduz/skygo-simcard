import React from "react";
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
  const classes = useStyles();

  return (
    <section className="internet">
      <h2>Add SIM Card</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Please add the last 13 digits of the card number"
        />
        <TextField
          id="filled-basic"
          label="Please fill in the 4-digit verification code"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="I have read and agreed with user agreement"
          labelPlacement="end"
        />
        <Button variant="contained" color="primary">
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
