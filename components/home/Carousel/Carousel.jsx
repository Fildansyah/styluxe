import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
// import { SliderBox } from "react-native-image-slider-box";
import styles from "./Carousel.style";
import { COLORS } from "../../../constants";
import Carousel from "react-native-reanimated-carousel";

const Carousels = ({slides, renderItem, calc, autoPlay, loop }) => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
       <Carousel
                loop={loop}
                width={width}
                height={height/calc}
                autoPlay={autoPlay}
                data={slides}
                scrollAnimationDuration={2000}
                renderItem={renderItem}
            />
  );
};

export default Carousels;
