import React from "react";
import { StyleSheet } from "react-native";
import Animated, { 
  cancelAnimation,
  Easing, 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming 
} from "react-native-reanimated";
import { useEffect } from "react";
import { useState } from "react";

interface CreationPointProps {
    posX: number,
    posY: number,
}

const POINT_SIZE = 80;
const HALF_SIZE = POINT_SIZE / 2;
const DURATION = 50;

const CreationPoint: React.FC<CreationPointProps> = ({
  posX,
  posY
}) => {

  const [ firstMount, setFirstMount ] = useState(true);

  const scale = useSharedValue(0);

  const animatedScale = useAnimatedStyle(
    () => {
      return {
        transform: [{ 
          scale: scale.value === 1 ? withTiming(scale.value, {
            duration: DURATION,
            easing: Easing.linear
          }) : 0 
        }],
      };
    },
    [scale]
  );
  

  useEffect(
    () => {
      cancelAnimation(scale);
      if (firstMount) {
        scale.value = 1;
        setFirstMount(false);
      } else {
        scale.value = 0;
        setTimeout(() => {
          scale.value = 1;
        }, 10);
      }
      return () => {
        scale.value = 0;
      };
    },
    [posX, posY]
  );


  return (
    <Animated.View
      style={[
        styles.root,
        animatedScale,
        {
          top: posY - HALF_SIZE,
          left: posX - HALF_SIZE,
        },
      ]}
    ></Animated.View>
  );
};

export default CreationPoint;


const styles = StyleSheet.create({
  root: {
    position: "absolute",
    width: POINT_SIZE,
    height: POINT_SIZE,
    borderRadius: HALF_SIZE,
    backgroundColor: "grey",
    opacity: 0.5,
    borderColor: "darkgrey",
    borderWidth: 1,
    zIndex: 9999
  }
});