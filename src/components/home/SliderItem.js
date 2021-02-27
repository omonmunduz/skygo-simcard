import React from 'react';
import { Paper, Button } from '@material-ui/core';
import './SliderItem.css'

const Item = (props) => {
    return (
        <div className="slider-item">
                <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
        </div>
        
    )
};
export default Item;