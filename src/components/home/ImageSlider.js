import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./SliderItem";

const ImageSlider = (props) => {
  const items = [
    {
      name: "Japan",
      description: "30 days 15GB Data package as low as US$0.62/day ",
    },
    {
      name: "Singapore",
      description: "Data package as low as US$0.53/day",
    },
    {
      name: "Vietnam",
      description: "Data package as low as US$0.673/day",
    },
  ];

  return (
    <Carousel fullHeightHover={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};
export default ImageSlider;
