import React from "react";
import { Link } from "@reach/router";
import "./SliderItem.css";
import { Button } from "@material-ui/core";

const Item = (props) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>SKyGo Global Data SIM</h3>
        <p>
          <strong>
            Travel the world while staying connected with SkyGo Global Data SIM.
            If life is an adventure where one journey leads to another, let
            SkyGo Global Data SIM be your key to unlocking greater experiences.
          </strong>
        </p>
        <Button>
          <Link to="/add-sim" className="add-sim">
            ADD SIM &rarr;
          </Link>
        </Button>
      </div>
      <div className="item-desc">
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </div>
    </section>
  );
};
export default Item;
